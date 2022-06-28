import styled from 'styled-components';
import { AppearAnimation } from '../../../shared';


export const CheckWrapper = styled.div<{ done: boolean }>`

    border-radius:.25rem;
    display:flex;
    align-items:center;
    cursor: pointer;

    width: 1.8rem;
    height: 1.8rem;

    color: ${props => props.theme.colors.orange};
    border: 2px solid ${props => props.theme.colors.orange};

    svg{
        display:${props => props.done ? 'block' : 'none'};
        ${AppearAnimation}
    }

`