import styled from 'styled-components';
import { GlobalStatusBox } from '../../../../shared';


export const DetailsBoxContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap:1rem;

    h1{
        font-size: 2rem;
        text-transform: capitalize;
    }

    .purchase-date{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${props => props.theme.colors.lightGray};
    };


`

export const PurchaseState = styled.div<{color:string}>`

    ${GlobalStatusBox}

`