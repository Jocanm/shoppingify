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

    ${GlobalTitle}

`