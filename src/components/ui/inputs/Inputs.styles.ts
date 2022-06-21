import styled from 'styled-components';

interface IProps{
    error: boolean;
}

export const CustomInputBox = styled.div<IProps>`

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    gap: .5rem;
    font-weight: 600;

    input,textarea{
        padding:1.3rem 1rem;
        border-radius: .75rem;
        font-size: 1rem;
        resize: vertical;
        border: ${props => props.error ? '1px':'2px'} solid ${props => props.error ? props.theme.colors.red : props.theme.colors.input};

        :focus{
            border: ${props => props.error ? '1px':'2px'} solid ${props => props.error ? props.theme.colors.red : props.theme.colors.orange};
        }
    }

    label{

    }

    span{

        font-size: .8rem;
        position: relative;
        left: .5rem;

        color: ${props => props.theme.colors.red};
    }

`