import styled from 'styled-components';
import { GlobalSecondTitle } from '../../../../shared';


export const ChartContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    width: calc(100% + 2.5rem);
    height: 100%;

    >h2{
        ${GlobalSecondTitle}
    }

    .recharts-responsive-container{
        position: relative;
        right: 2.5rem;
    }


`