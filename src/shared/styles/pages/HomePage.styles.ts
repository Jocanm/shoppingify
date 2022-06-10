import styled from 'styled-components';


export const HomePageContainer = styled.div`

    display:grid;
    grid-template-columns: 3fr 1.3fr;

    ${props => props.theme.breakpoints.lg} {
        grid-template-columns: 1fr;
    }

`