import styled from 'styled-components';
import { MainViewStyles, NoVisivleScrollBar } from '../shared';

export const PrivateLayoutContainer = styled.div`

    display: flex;
    height: 100vh;
    width: 100%;
    overflow: hidden;

    display:grid;
    grid-template-columns: auto 3fr 1.1fr;

    ${props => props.theme.breakpoints.lg} {
        grid-template-columns: auto 1fr;
    }

`

export const ChildrenWrapper = styled.main`

    ${MainViewStyles}
    ${NoVisivleScrollBar}
    overflow-y: auto;
    background-color: ${props => props.theme.colors.lowWhite};

`