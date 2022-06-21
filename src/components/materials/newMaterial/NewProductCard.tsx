import { useForm } from 'react-hook-form';
import { Button, MyInput, Form } from '../../';
import * as S from './NewProductCard.styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '../../../config/redux';

interface Props {
    toggleShowNewProduct: () => void
}

const FormShape = Yup.object({
    name: Yup.string().required('Name is required'),
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
