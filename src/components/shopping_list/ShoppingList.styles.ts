import styled from 'styled-components';


export const ShoppingListContainer = styled.section`

    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.colors.lightOrange};

    ${props => props.theme.breakpoints.lg} {
        display: none;
    }

`