import styled from 'styled-components';
import { GlobalStatusBox } from '../../../../shared';


export const PurchasesListContainer = styled.ul`

    display:flex;
    flex-direction: column;
    gap:2rem;

`;

export const PurchasesListItem = styled.li`

    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:space-between;
    width: 100%;
    position: relative;

    gap:2rem;
    border-radius: 0.75rem;
    padding: 1.25rem 1.75rem;

    cursor: pointer;
    box-shadow: ${props => props.theme.globals.shadow};
    background-color: ${props => props.theme.colors.white};

    transition: all .1s ease-in-out;

    :hover{
        background-color:#ededed;
    }

    >span{
        font-size:1.2rem;
        font-weight: 600;
    }

    ${props => props.theme.breakpoints.sm} {
        flex-direction: column;
        align-items: flex-start;
        gap:.5rem;
    }

`

export const PurchaseOptions = styled.div`

    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:1rem;

    font-weight: 500;

    ${props => props.theme.breakpoints.sm} {
        flex-direction: column;
        align-items: flex-start;
        gap:.5rem;
    }

    >svg{
        color: ${props => props.theme.colors.orange};
        ${props => props.theme.breakpoints.sm} {
            position: absolute;
            right: 1rem;
        }
    }

    .purchase-date{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${props => props.theme.colors.lightGray};
    };

`
export const PurchaseState = styled.span<{ color: string }>`

    ${GlobalStatusBox}

`