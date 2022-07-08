import styled from 'styled-components';

export const NoProductsBox = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    height: 100%;
    margin-top: 4rem;

    button:hover{
        background-color: ${props => props.theme.colors.darkOrange};
    }

    span{
        font-weight: 500;
        text-align: center;
    }

    *{
        font-size: 1.5rem;
    }
    
    ${props => props.theme.breakpoints.md}{
        padding:2rem;
        margin-top: 8rem;
        *{
            font-size: 1.2rem;
        }
    }

`

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
        text-transform:capitalize;
        font-size:1.4rem;
        font-weight: 500;
    }


`