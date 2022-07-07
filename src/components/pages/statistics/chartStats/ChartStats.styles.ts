import styled from 'styled-components';
import { GlobalSecondTitle } from '../../../../shared';


export const ChartContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    width: calc(100% + 3.5rem);
    height: 100%;

    .recharts-responsive-container{
        position: relative;
        right: 3.5rem;
    }

    ${props => props.theme.breakpoints.md}{

        width: calc(100% + 4rem);

        .recharts-responsive-container{
            right: 4rem;
        }
    }
    ${props => props.theme.breakpoints.xxs}{

        width: calc(100% + 4rem);

        .recharts-responsive-container{
            right: 4rem;
        }
    }

    >h2{
        ${GlobalSecondTitle}
    }


`