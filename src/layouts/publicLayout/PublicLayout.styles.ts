import styled from 'styled-components';


export const PublicLayoutWrapper = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;

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

`


export const FormWrapper = styled.main`

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
        border: none;
        padding: 1.5rem;
    }

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