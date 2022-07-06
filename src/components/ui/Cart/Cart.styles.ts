import styled from 'styled-components';
import { motion } from 'framer-motion';


export const CartWrapper = styled(motion.div)`

    border-radius: 50%;
    padding: 0.6rem;
    cursor: pointer;

    display:flex;
    align-items: center;
    justify-content: center;

    position: relative;
    transition:all .2s ease-in-out;

    background-color: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.white};

    :hover{
        background-color: ${props => props.theme.colors.darkOrange};
    }

`

export const NumberOfItems = styled.span`

    border-radius: 0.25rem;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    
    display:flex;
    align-items: center;
    justify-content: center;

    top:-0.4rem;
    right: -0.4rem;

    font-size: 0.8rem;

    background-color: ${props => props.theme.colors.red};

`