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
        padding: 2rem 1rem 2rem 7rem;
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