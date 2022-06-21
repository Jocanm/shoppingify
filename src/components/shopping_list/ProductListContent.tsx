/* eslint-disable @next/next/no-img-element */
import { useAppSelector } from "../../config/redux";
import { Box } from "../globalComponents";
import { Button } from "../ui/buttons";
import * as S from './ShoppingList.styles';
import { ShoppingProductsList } from "./ShoppingProductsList";

interface Props {
    toggleShowNewProduct: () => void
}

export const ProductsListContent = ({ toggleShowNewProduct }: Props) => {

    const { cartTotal } = useAppSelector().cart

    return (
        <>
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
                    ? <ShoppingProductsList />
                    : <EmptyCart />
            }

            <S.ShoppingNameBox>
                <input
                    placeholder='Enter a name'
                />
                <Button>
                    Save
                </Button>
            </S.ShoppingNameBox>
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
