import styled from 'styled-components';

export const MenuWrapper = styled.section`

    display: flex;
    flex-direction: column;
    gap: .2rem;
    border-radius: 0.5rem;

    position:fixed;
    top:4rem;
    left:4rem;
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