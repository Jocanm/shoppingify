import { css, keyframes } from 'styled-components';

export const appear = keyframes`
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
`

export const standOutKF = keyframes`
    0% {
        max-height: 0px;    
    }
    40%{
        max-height: 20vh;    
    }
    60%{
        max-height: 40vh;    
    }
    80%{
        max-height: 80vh;    
    }
    100%{
        max-height: 100vh;    
    }
`


export const CustomScrollBar = css<{ color?: string }>`

    &::-webkit-scrollbar{
        width: .7rem;
    }

    &::-webkit-scrollbar-thumb{
        background: ${props => props.color};
        border-radius: 6px;
    }

`

export const CompleteCentered = css`

    display:flex;
    justify-content:center;
    align-items:center;

`

export const AppearAnimation = css`

    animation: .3s ${appear} ease-in-out;

`

export const SliceAnimation = css`

    animation: .7s ${standOutKF} linear;

`