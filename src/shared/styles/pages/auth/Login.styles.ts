import styled from "styled-components";

export const LoginWrapper = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const LoginForm = styled.form`

    border: 1px solid ${props => props.theme.colors.input};
    border-radius: 1.5rem;
    padding: 3rem;
    max-width:450px;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3{
        font-weight: 400;
    }

`

export const LoginTitle = styled.h1`

    font-size: 1rem;

`

export const InputContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap:1rem;

    input{
        :focus{
            border: none;
        }
    }

    >*{
        width: 100%;
    }

`