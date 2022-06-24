import React from 'react'
import { Button } from '../ui/buttons';
import { Form } from '../ui/form'
import { MyInput } from '../ui/inputs';
import * as S from './ShoppingList.styles';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../config/redux';
import { startCreateShoppingList } from '../../config/redux/thunks/categoriesThunks';

const FormShape = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
})

interface FormProps extends Yup.InferType<typeof FormShape> { }

export const ShoppingListForm = () => {

    const methods = useForm<FormProps>({ resolver: yupResolver(FormShape) })
    const dispatch = useAppDispatch()

    const { cartTotal } = useAppSelector().cart

    const onSubmit = ({ name }: FormProps) => {
        if (!cartTotal) {
            methods.setError('name', { message: 'Cart can not be empty' })
            return;
        }

        dispatch(startCreateShoppingList(name))

    }

    return (
        <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
            <S.ShoppingNameBox>
                <MyInput
                    name='name'
                    placeholder='Enter a name'
                />
                <Button type="submit">
                    Save
                </Button>
            </S.ShoppingNameBox>
        </Form>
    )
}
