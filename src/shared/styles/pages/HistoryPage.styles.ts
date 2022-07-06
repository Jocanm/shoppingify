import styled from 'styled-components';
import { GlobalTitle } from '../../../shared';

export const ViewWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 3rem;

    ${props => props.theme.breakpoints.sm} {
        gap: 1.5rem;
    }

`

export const ViewTitle = styled.h1`

    font-size:1.9rem;
    font-weight: 600;
    
    ${props => props.theme.breakpoints.lg} {
        font-size: 1.4rem;
    }
    
    ${props => props.theme.breakpoints.md} {
        font-size: 1.6rem;
    }

`