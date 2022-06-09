import styled from "styled-components";
import { TextField } from '@mui/material';

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
    width:450px;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    h2{
        font-size:1.2rem;
    }


    ${props => props.theme.breakpoints.sm} {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
    }

`

export const LoginTitle = styled.h1`

    font-size: 1rem;

`

export const InputContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap:1.2rem;
    >*{
        width: 100%;
    }

    /* .css-1eqv57h-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline{
        border: inherit;
    }
    .css-1eqv57h-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
        border: 1px solid rgba(0, 0, 0, 0.23);
    } */

`

export const SocialMediaContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap:1.2rem;

    h4{
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme.colors.darkGray};
        text-align: center;
    }

`

export const SocialMediaIcon = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #828282;
    padding: 0.5rem;
    cursor: pointer;

    >*{
        font-size: 1.6rem;
        fill: #828282;
    }

`