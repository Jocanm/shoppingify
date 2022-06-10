import styled from 'styled-components';


export const CartWrapper = styled.div`

    border-radius: 50%;
    padding: 0.6rem;
    cursor: pointer;

    display:flex;
    align-items: center;
    justify-content: center;

    position: relative;

    background-color: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.white};

`

export const NumberOfItems = styled.span`

    border-radius: 4px;
    position: absolute;
    width: 20px;
    height: 20px;
    
    display:flex;
    align-items: center;
    justify-content: center;

    top:-0.4rem;
    right: -0.4rem;

    font-size: 0.8rem;

    background-color: ${props => props.theme.colors.red};

`