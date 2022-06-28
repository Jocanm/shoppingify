import React, { useEffect } from 'react'
import { Button } from '../../ui/buttons';
import { Form } from '../../ui/form'
import { MyInput } from '../../ui/inputs';
import * as S from '../ShoppingList.styles';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../config/redux';
import { startCreateShoppingList, startUpdateShoppingListData } from '../../../config/redux/thunks/shoppingThunks';
import { ShoppingListFormData } from './ShoppingListFormData';
import { ShoppingListFormStatus } from './ShoppingListFormStatus';

const FormShape = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
})

interface FormProps extends Yup.InferType<typeof FormShape> { }

export const ShoppingListForm = () => {

    const dispatch = useAppDispatch()
    const { cartTotal } = useAppSelector().cart
    const { activePurchase } = useAppSelector().shopping
    const { editShoppingListMode } = useAppSelector().ui

    const methods = useForm<FormProps>({ resolver: yupResolver(FormShape) })

    useEffect(() => {

        if (activePurchase) {
            methods.setValue('name', activePurchase.purchase.name)
        }else{
            methods.setValue('name', '')
        }

    }, [activePurchase, methods])

    const onSubmit = ({ name }: FormProps) => {
        if (!cartTotal) {
            methods.setError('name', { message: 'Cart can not be empty' })
            return;
        }

        if (activePurchase) {
            dispatch(startUpdateShoppingListData(name))
        } else {
            dispatch(startCreateShoppingList(name))
        }

    }

    return (
        <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
            {
                activePurchase
                    ? editShoppingListMode
                        ? <ShoppingListFormData />
                        : <ShoppingListFormStatus />
                    : <ShoppingListFormData />
            }
        </Form>
    )
}
