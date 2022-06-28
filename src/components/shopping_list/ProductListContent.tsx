/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { toggleEditShoppingListMode, useAppSelector } from "../../config/redux";
import { Box } from "../globalComponents";
import { Button } from "../ui/buttons";
import * as S from './ShoppingList.styles';
import { ShoppingProductsList } from "./ShoppingProductsList";
import { useForm } from 'react-hook-form';
import { Form } from "../ui/form";
import { MyInput } from "../ui/inputs";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ShoppingListForm } from "./form/ShoppingListForm";
import { useDispatch } from 'react-redux';

interface Props {
    toggleShowNewProduct: () => void
}

export const ProductsListContent = ({ toggleShowNewProduct }: Props) => {

    const { cartTotal } = useAppSelector().cart
    const dispatch = useDispatch()

    const toggleEditMode = () => {
        dispatch(toggleEditShoppingListMode())
    }

    return (
        <>
            <Box
                className="products-list-box"
                flex flexColumn gap="1.2rem"
                style={{ overflow: 'auto' }}
            >
                <div className='img-container'>
                    <S.ShoppingImageCard>
                        <img
                            className='shopping-image'
                            src="/assets/bottle.svg"
                            alt="bottle"
                        />
                        <div className="box-content">
                            <span>Didn’t find what you need?</span>
                            <Button onClick={toggleShowNewProduct}>
                                Add Item
                            </Button>
                        </div>
                    </S.ShoppingImageCard>
                </div>

                {
                    cartTotal
                        ? <ShoppingProductsList
                            toggleEditMode={toggleEditMode}
                        />
                        : <EmptyCart />
                }
            </Box>

            <ShoppingListForm />

        </>
    )
}

const EmptyCart = () => (
    <Box flex flexColumn alignCenter fontSize='1.4rem' appear>
        <span style={{ fontWeight: "600" }}>No Items</span>
        <img
            src="/assets/cart.svg"
            alt="cart"
        />
    </Box>
)
