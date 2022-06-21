import { useForm } from 'react-hook-form';
import { Button, MyInput, Form, Box } from '../../';
import * as S from './NewProductCard.styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '../../../config/redux';

interface Props {
    toggleShowNewProduct: () => void
}

const FormShape = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    category: Yup.string().required('Category is required'),
    note: Yup.string(),
    image: Yup.string(),
})

interface FormProps extends Yup.InferType<typeof FormShape> { }

export const NewProductCard = ({ toggleShowNewProduct }: Props) => {

    const methods = useForm<FormProps>({ resolver: yupResolver(FormShape) })

    const { categories } = useAppSelector().categories;

    const onSubmit = (data: FormProps) => {
        console.log(data)
    }

    const onSelectCategory = (value: string) => {
        methods.setValue('category', value)
    }

    return (
        <S.NewMaterialCardBox>

            <Form methods={methods} className="form-container">
                <MyInput
                    name='name'
                    label='Name'
                    placeholder="Enter a name"
                />
                <MyInput
                    name='note'
                    label='Note (optional)'
                    textarea
                    placeholder="Enter a note"
                />
                <MyInput
                    name='image'
                    label='Image (optional)'
                    placeholder="Enter a url"
                />

                <Box flex flexColumn gap="1.5rem">
                    <MyInput
                        name='category'
                        label='Category'
                        placeholder="Enter a category or choose one below"
                    />

                    <S.CategoriesList>
                        {
                            categories.map(cat => (
                                <S.CategoryItem key={cat.id}>
                                    {cat.name}
                                </S.CategoryItem>
                            ))
                        }
                    </S.CategoriesList>
                </Box>

            </Form>

            <S.ButtonContainer>
                <Button onClick={toggleShowNewProduct}>
                    Cancel
                </Button>
                <Button onClick={methods.handleSubmit(onSubmit)}>
                    Save
                </Button>
            </S.ButtonContainer>
        </S.NewMaterialCardBox>
    )
}
