import styled from 'styled-components';
import { keyframes } from 'styled-components';

interface LoaderProps {
    color?: string
    width?: string
    height?: string
    borderWidth?: string
}

export const LoderAnimation = keyframes`

    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }

`

export const VanillaLoaderStyles = styled.div<LoaderProps>`

    display: inline-block;
    width: ${props => props.width || '2.5rem'};
    height: ${props => props.height || '2.5rem'};

    :after {
        content: ' ';
        display: block;
        width: ${props => props.width || '2.5rem'};
        height: ${props => props.height || '2.5rem'};
        border-radius: 50%;
        border: 2px solid ${props => props.color || props.theme.colors.orange};
        border-color: ${props => props.color || props.theme.colors.orange} transparent ${props => props.color || props.theme.colors.orange} transparent;
        animation: ${LoderAnimation} 1.2s linear infinite;
    }

`

export const FullScreenContainer = styled.div<{ isOpaque?: boolean }>`

    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color:${props => props.theme.colors.lowWhite};
    position:fixed;
    inset:0;

    ${props => props.isOpaque && `

        background-color: ${props.theme.colors.white}99;
        z-index: 100;
    
    `}

`