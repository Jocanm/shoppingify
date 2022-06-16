import styled from 'styled-components';
import { AppearAnimation } from '../../shared/styles/animations.styles';


export const SidebarContainer = styled.aside`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 0;
    width: 6rem;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;

    background-color: ${props => props.theme.colors.white};
    
    img{
        cursor: pointer;
    }

`

export const RouteItemBox = styled.li<{ isActive?: boolean }>`

    color:${props => props.theme.colors.darkGray};
    position: relative;

    display: flex;
    align-items: center;
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