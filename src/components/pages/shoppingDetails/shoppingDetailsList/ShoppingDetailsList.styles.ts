import styled from 'styled-components';
import { globalWhiteCard } from '../../../../shared';
import * as S from '../../../items/categories/CategoriesList.styles';
import { ProductItemBox, ProductListBox } from '../../../items/products/ProductsList.styles';
import { motion } from 'framer-motion';


export const ShoppingDetailsListWrapper = styled(S.CategoryListContainer)``

export const ShoppingDetailsCategorieList = styled(S.CategoryItemBox)`
`

export const ShoppingDetailsProducListStyles = styled(ProductListBox)``

export const ShoppingDetailsProductItemStyles = styled(motion.li) <{ done: boolean }>`

    ${globalWhiteCard}

    font-size:1.2rem;
    font-weight:500;
    padding:0;

    display:grid;
    grid-template-columns: 5fr .7fr;

    >*{
        padding:.8rem;
        transition:background .1s ease-in-out;
    }

    span{
        text-decoration:${props => props.done ? 'line-through' : 'none'};
    }

    span.name{
        border-radius: 12px 0 0 12px;
        cursor: pointer;
        text-transform:capitalize;
        display:flex;
        align-items:center;
        :hover{
            background-color:#ededed;
        }
    }

    span.quantity{
        cursor: default;
        height:100%;
        border-radius: 0 12px 12px 0;
        text-align:center;
        font-size:1rem;
        color:${props => props.theme.colors.orange};
    }

    ${props => props.theme.breakpoints.md}{
        font-size:1rem;
    }

`