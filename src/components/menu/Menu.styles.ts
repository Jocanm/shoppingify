import styled from 'styled-components';

interface IProps {
    showMenu: boolean;
}

export const MenuWrapper = styled.section<IProps>`

    transition: all 0.3s ease-in-out;
    display: ${props => props.showMenu ? 'flex' : 'none'};
    flex-direction: column;
    gap: .2rem;
    border-radius: 0.5rem;

    position:absolute;
    top:0;
    left:3rem;
    padding: 1rem;

    color: ${props => props.theme.colors.darkGray};

    border: 1px solid ${props => props.theme.colors.lightGray};
    background-color: ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.globals.shadow};

    >div{
        display: flex;
        align-items: center;
        gap:.6rem;
        font-size: .8rem;
        border-radius: 0.5rem;
        padding: .7rem 1rem;
        transition: all 0.2s ease;
        cursor: pointer;

        :hover{
            background-color: #ebebeb;
        }
    }

    .logout{
        color: ${props => props.theme.colors.red};
    }

    span{
        border-top: 1px solid ${props => props.theme.colors.lightGray};
    }

`