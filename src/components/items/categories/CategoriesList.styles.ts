import styled from 'styled-components';
import { NoVisivleScrollBar } from '../../../shared';


export const CategoryListContainer = styled.div`

    display:flex;
    flex-direction:column;
    gap:5rem;

    ${props => props.theme.breakpoints.lg}{
        gap:3rem;
    }

`

export const CategoryItemBox = styled.li`

    display:flex;
    flex-direction:column;
    gap:1.5rem;

    h2{
        font-size:1.4rem;
        font-weight: 500;
    }


`