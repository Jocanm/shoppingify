import { css } from 'styled-components';


export const globalWhiteCard = css`

    border-radius: 12px;
    padding: .8rem;

    background-color: ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.globals.shadow};

`

export const MainViewStyles = css`

    padding: 2rem 4rem 2rem 10rem;

    ${props => props.theme.breakpoints.md} {
        padding: 2rem 1rem 2rem 6rem;
    }

    @media (max-height: 400px) {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

`

export const NoVisivleScrollBar = css`

    &::-webkit-scrollbar{
        width: 0px;
    }

    &::-webkit-scrollbar-thumb{
        background: transparent;
        border-radius: 0px;
    }

`

export const CustomScrollBar = css`

    &::-webkit-scrollbar{
        width: .5rem;
    }

    &::-webkit-scrollbar-thumb{
        background: ${props => props.theme.colors.orange};
        border-radius: .5rem;
    }

`

export const GlobalTitle = css`

    font-size:1.9rem;
    font-weight: 500;
    
    ${props => props.theme.breakpoints.lg} {
        font-size: 1.4rem;
    }
    
    ${props => props.theme.breakpoints.md} {
        font-size: 1.6rem;
    }

`

export const GlobalSecondTitle = css`

    font-size:1.6rem;
    font-weight: 600;
    
    ${props => props.theme.breakpoints.lg} {
        font-size: 1.1rem;
    }
    
    ${props => props.theme.breakpoints.md} {
        font-size: 1.3rem;
    }


`

export const GlobalCard = css`

    ${NoVisivleScrollBar}

    width: 100%;
    overflow-y: auto;

    ${props => props.theme.breakpoints.lg} {
        display:none;
    }

`

export const GlobalMdCard = css`

    ${NoVisivleScrollBar}

    width: 100%;
    overflow-y: auto;
    display:none;

    ${props => props.theme.breakpoints.lg} {
        display:flex;
        position:fixed;
        max-width: 29rem;
        right: 0;
        top: 0;
        bottom: 0;
    }

    ${props => props.theme.breakpoints.xs} {
        width: auto;
        left: 5rem;
    }

`

export const GlobalBackButton = css`

    display:flex;
    align-items:center;
    font-size:1.2rem;
    font-weight:500;

    width:5.5rem;

    transition:background .1s ease-in-out;
    transition-property: background, color;
    padding:.2rem .5rem;
    border-radius:.75rem;

    color:${props => props.theme.colors.orange};

    :hover{
        background-color:${props => props.theme.colors.orange};
        color:${props => props.theme.colors.white};
    }

    svg{
        transform:rotate(180deg);
    }

`

export const GlobalStatusBox = css<{ color: string }>`

    border-radius: 0.5rem;
    padding: .3rem .5rem;

    border: 1px solid ${props => props.color};
    color: ${props => props.color};

`