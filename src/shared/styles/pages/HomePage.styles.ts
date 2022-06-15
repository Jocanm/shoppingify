import styled from 'styled-components';


export const HomePageContainer = styled.div`

    display:flex;
    flex-direction:column;
    gap:3rem;

    ${props => props.theme.breakpoints.md} {
        gap:0;
    }

`