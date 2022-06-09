import styled from 'styled-components';


export const PublicLayoutWrapper = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .45rem;
    background-color: ${props => props.theme.colors.lowWhite};

    ${props => props.theme.breakpoints.sm} {
        .user-info-not-sm{
            display:none;
        }
        .user-info-sm{
            display:flex;
        }
    }

    .creator-name{
        color: ${props => props.theme.colors.orange};
        font-weight: bold;
        cursor: pointer;
    }

    /* & label.Mui-focused {
        color: rgba(0, 0, 0, 0.6);
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border: 1px solid #c4c4c4;
        }
    }

    .css-1eqv57h-MuiInputBase-root-MuiOutlinedInput-root:hover{
        border-color: red;
    } */

`


export const FormWrapper = styled.main`

    /* border: 1px solid ${props => props.theme.colors.input}; */
    box-shadow: 3px 3px 8px #00000029;
    border-radius: 1.5rem;
    padding: 3rem;
    width:450px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    overflow-y: auto;

    h2{
        font-size:1.2rem;
    }

    ${props => props.theme.breakpoints.sm} {
        width: 100%;
        height: 100%;
        border: none;
        padding: 1.5rem;
        margin: auto 0;
    }

`

export const SocialMediaContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap:1rem;

    h4{
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme.colors.darkGray};
        text-align: center;
    }

    .auth-option{
        color: ${props => props.theme.colors.orange};
        cursor: pointer;
        font-weight: 600;
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