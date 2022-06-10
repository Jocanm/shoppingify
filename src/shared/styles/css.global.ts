import { css } from 'styled-components';


export const globalWhiteCard = css`

    border-radius: 12px;
    padding: .8rem;

    background-color: ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.globals.shadow};

`

export const MainViewStyles = css`

    padding: 2rem 4rem;

    ${props => props.theme.breakpoints.md} {
        padding: 2rem 1rem;
    }

`