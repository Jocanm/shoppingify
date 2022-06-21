import { useForm } from 'react-hook-form';
import { Button, MyInput, Form } from '../../';
import * as S from './NewProductCard.styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    toggleShowNewProduct: () => void
}

const FormShape = Yup.object({
    name: Yup.string().required('Name is required'),
})

interface FormProps extends Yup.InferType<typeof FormShape> { }

export const NewProductCard = ({ toggleShowNewProduct }: Props) => {

    const methods = useForm<FormProps>({ resolver: yupResolver(FormShape) })

    const onSubmit = (data: FormProps) => {
        console.log(data)
    }

    return (
        <S.NewMaterialCardBox>

            <Form methods={methods}>
                <MyInput
                    name='name'
                    label='Name'
                    placeholder="Enter a name"
                />
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
