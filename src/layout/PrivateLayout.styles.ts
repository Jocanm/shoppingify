import styled from 'styled-components';

export const PrivateLayoutContainer = styled.div`

    display: flex;
    height: 100vh;
    width: 100%;
    overflow: hidden;

`

export const ChildrenWrapper = styled.main`

    width: 100%;
    padding: 2rem 3rem;
    overflow-y: auto;
    background-color: ${props => props.theme.colors.lowWhite};

`