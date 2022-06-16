/* eslint-disable @next/next/no-img-element */
import { Button } from '../ui/buttons';
import * as S from './ShoppingList.styles';

export const ShoppingImage = () => {
    return (
        <S.ShoppingImageCard>
            <img
                className='shopping-image'
                src="/assets/bottle.svg"
                alt="bottle"
            />
            <div className="box-content">
                <span>Didn’t find what you need?</span>
                <Button>
                    Add Item
                </Button>
            </div>
        </S.ShoppingImageCard>
    )
}
