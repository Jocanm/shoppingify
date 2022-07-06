import styled from 'styled-components';
import { AppearAnimation, GlobalBackButton, GlobalCard, GlobalMdCard, globalWhiteCard, NoVisivleScrollBar } from '../../../shared';
import { ButtonContainer } from '../../materials/newMaterial/NewProductCard.styles';
import { motion } from 'framer-motion';


export const ProductListBox = styled.ul`

    display:flex;
    gap:2rem 1.5rem;
    flex-wrap:wrap;

    ${props => props.theme.breakpoints.md}{
        gap:1rem;
    }

    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    align-items:start;

`

export const ProductItemBox = styled.li<{ isInCart: boolean }>`

    ${globalWhiteCard}
    ${AppearAnimation}

    font-size:1.2rem;
    font-weight:500;
    cursor: pointer;
    padding:0;

    display:grid;
    grid-template-columns: 5fr .5fr;

    >*{
        padding:.8rem;
        transition:background .1s ease-in-out;
    }

    span{
        border-radius: 12px 0 0 12px;
        text-transform:capitalize;
        flex:1;
        :hover{
            background-color:#ededed;
        }
    }

    button{
        height:100%;
        border-radius: 0 12px 12px 0;

        color:${props => props.isInCart ? props => props.theme.colors.white : props.theme.colors.lightGray};
        background-color:${props => props.isInCart && props.theme.colors.orange};

        :hover{
            background-color:${props => props.theme.colors.orange};
            color:${props => props.theme.colors.white};
        }
    }

    ${props => props.theme.breakpoints.md}{
        font-size:1rem;
    }

`

export const ProductDescriptionBox = styled(motion.div)`

    ${NoVisivleScrollBar}
    overflow-y:auto;
    display:flex;

    height:100%;
    padding: 2rem 3rem;

    flex-direction:column;
    gap:2rem;

    position:fixed;
    top:0;
    right:0;
    bottom:0;
    height:100%;
    width:28rem;

    ${props => props.theme.breakpoints.xl2}{
        width:26rem;
    }

    ${props => props.theme.breakpoints.lg}{
        width:100%;
    }

    ${props => props.theme.breakpoints.xs} {
        padding: 2rem;
    }

    background-color:${props => props.theme.colors.white};

`

export const BackButton = styled.button`

    ${GlobalBackButton}

`

export const ProductImage = styled.img`

    width:100%;
    border-radius:1.5rem;

    object-fit:cover;

`

export const ProductInfo = styled.div`

    display:flex;
    flex-direction:column;
    gap:.5rem;

    span{
        font-size:.9rem;
        color:${props => props.theme.colors.lightGray};
    }

    h3{
        text-transform:capitalize;
        font-size:1.3rem;
    }

`

export const ButtonSection = styled(ButtonContainer)`

    button{
        font-weight: 600;
        padding:1.5rem;
        transition:background .1s ease-in-out;
    }

    button:last-child:hover{
        background-color:${props => props.theme.colors.darkOrange};
    }

    button:first-child{
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.text};

        :hover{
            background-color:#ededed;
        }
    }

`