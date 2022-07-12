import styled from 'styled-components';
import { GlobalSecondTitle } from '../../../../shared';


export const TopSectionContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    ${props => props.theme.breakpoints.md} {
        flex-direction: column;
        gap:2rem;
    }

    .products .nextui-c-dwnaVv{
        background-color: ${props => props.theme.colors.orange};
    }

    .categories .nextui-c-dwnaVv{
        background-color: ${props => props.theme.colors.lightBlue};
    }

`

export const TopSubSectionContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    align-self: flex-start;


`

export const TopSectionTitle = styled.h2`

    ${GlobalSecondTitle}

`

export const TopSectionListItem = styled.div`

    display: flex;
    flex-direction: column;
    gap: .8rem;

    .details{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 500;
    }

`