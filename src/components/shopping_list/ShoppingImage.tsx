import React from 'react'
import * as S from './ShoppingList.styles'
import Image from 'next/image';
import { Button } from '../ui/buttons';

export const ShoppingImage = () => {
    return (
        <S.ShoppingImageCard>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className='shopping-image'
                src="/assets/bottle.svg"
                alt="bottle"
                width={120}
                height={120}
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
