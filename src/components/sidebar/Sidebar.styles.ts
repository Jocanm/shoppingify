import styled from 'styled-components';
import { NoVisivleScrollBar } from '../../shared';
import { AppearAnimation } from '../../shared/styles/animations.styles';


export const SidebarContainer = styled.aside`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 0;
    width: 6rem;

    overflow: auto;
    ${NoVisivleScrollBar}

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index:10;

    background-color: ${props => props.theme.colors.white};

    @media (max-height: 400px) {
        padding:1rem 0;
    }
    
    img{
        cursor: pointer;
    }

    ${props => props.theme.breakpoints.md} {
        padding:2rem 0;
        width: 5rem;

        img{
            width: 3.5rem;
            height: 3.5rem;
        }
    }


`

export const RoutesList = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;

    @media (max-height: 400px) {
        gap: 1.5rem;
    }

`

export const RouteItemBox = styled.li<{ isActive?: boolean }>`

    position: relative;

    display: flex;
    align-items: center;
    color:${props => props.theme.colors.darkGray};
    justify-content: ${props => props.isActive ? 'space-between' : 'center'};

    padding: 0.5rem 0;

    width: 100%;

    >svg{
        cursor: pointer;
        position:relative;
        right: ${props => props.isActive && "0.1rem"};
    }

    ::before{
        content: '';
        display: ${props => props.isActive ? 'block' : 'none'};
        width: .3rem;
        height: 200%;
        background-color:${props => props.theme.colors.orange};
        border-radius: 0px 4px 4px 0px;
        ${AppearAnimation}
    }

`