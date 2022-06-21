import styled from 'styled-components';


export const NewMaterialCardBox = styled.div`

    padding: 3rem 4rem;
    height: 100%;

    display:flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${props => props.theme.colors.lowWhite};

    ${props => props.theme.breakpoints.xs} {
        padding: 2rem;
    }

`

export const ButtonContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    button{
        padding: 1rem 1.5rem;
        font-weight: 500;
    }

    button:first-child{
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.text};
    }

`