import styled from 'styled-components';
import { globalWhiteCard } from '../../../shared';


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

    font-size:1.2rem;
    max-width:20rem;
    font-weight:500;
    cursor: pointer;

    ${props => props.theme.breakpoints.md}{
        font-size:1rem;
    }

`