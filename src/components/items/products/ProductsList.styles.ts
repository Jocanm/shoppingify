import styled from 'styled-components';
import { AppearAnimation, globalWhiteCard } from '../../../shared';


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

export const ProductItemBox = styled.li`

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
        transition:all .1s ease-in-out;
    }

    span{
        border-radius: 12px 0 0 12px;
        flex:1;
        :hover{
            background-color:#ededed;
        }
    }

    button{
        height:100%;
        border-radius: 0 12px 12px 0;
        color:${props => props.theme.colors.lightGray};
        :hover{
            background-color:${props => props.theme.colors.orange};
            color:${props => props.theme.colors.white};
        }
    }

    ${props => props.theme.breakpoints.md}{
        font-size:1rem;
    }

`