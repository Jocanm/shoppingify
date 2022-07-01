import styled from 'styled-components';
import { globalWhiteCard } from '../../shared';


export const HeaderContainer = styled.nav`

    width: 100%;

    display:grid;
    grid-template-columns: 1.5fr 1fr;
    gap:7rem;

    ${props => props.theme.breakpoints.lg} {
        gap:10rem;
    }

    ${props => props.theme.breakpoints.md} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap:1rem;
    }

`


export const HeaderTitle = styled.h1`

    font-size:1.9rem;
    font-weight: 500;
    
    span{
        font-weight: 700;
        color:${props => props.theme.colors.orange};
    }

    ${props => props.theme.breakpoints.lg} {
        font-size: 1.4rem;
    }
    
    ${props => props.theme.breakpoints.md} {
        font-size: 1.6rem;
    }


`

export const InputContainer = styled.div`

    position: relative;
    width: 100%;
    align-self: start;
    
    input{
        ${globalWhiteCard}
        width: 100%;
        padding: 1rem 0 1rem 3.5rem;
        font-size: 1.2rem;
    }

    svg{
        position: absolute;
        left: 1rem;
        top: .9rem;
    }

`