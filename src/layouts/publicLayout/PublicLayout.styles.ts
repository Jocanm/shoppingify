import styled from 'styled-components';
import { NoVisivleScrollBar } from '../../shared';


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

`


export const FormWrapper = styled.main`

    ${NoVisivleScrollBar}

    background-color: ${props => props.theme.colors.white};
    box-shadow: 3px 3px 8px #00000029;
    border-radius: 1.5rem;
    padding: 2.5rem 3rem;
    width:450px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    overflow-y: auto;

    justify-content: center;

    h2{
        font-size:1.2rem;
    }

    ${props => props.theme.breakpoints.sm} {
        width: 100%;
        height: 100%;
        border: none;
        padding: 1.5rem;
        margin: auto 0;
        border-radius: 0;
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

export const DemoAccountMessage = styled.article<{ isLoginPage: boolean }>`


    background-color: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.white};

    box-shadow: 3px 3px 8px #00000029;
    border-radius: 1.5rem;
    padding: 1.5rem 1rem;

    display: ${props => props.isLoginPage ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    gap: .5rem;

    width:450px;

    p{
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
    }

    p:last-child{
        font-weight: 600;
    }

    ${props => props.theme.breakpoints.sm} {
        display: none;
    }

`
export const DemoAccountMessageSm = styled.article<{ isLoginPage: boolean }>`

    background-color: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.white};

    box-shadow: 3px 3px 8px #00000029;
    border-radius: 1.5rem;
    padding: 1.5rem 0rem;

    display:none;

    flex-direction: column;
    justify-content: center;
    gap: .5rem;

    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;

    p:last-child{
        font-weight: 600;
    }

    ${props => props.theme.breakpoints.sm} {
        display: ${props => props.isLoginPage ? 'flex' : 'none'};
    }

    ${props => props.theme.breakpoints.xs} {
        font-size: 1rem;
    }

`