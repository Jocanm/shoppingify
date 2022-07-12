import styled from 'styled-components';
import { ViewWrapper } from './HistoryPage.styles';

export const StatisticsPageWrapper = styled(ViewWrapper)`

    ${props => props.theme.breakpoints.md} {
        gap:2rem;
    }

`

export const LoadersWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    color: ${props => props.theme.colors.orange};
    font-weight: 600;
    font-size: 1.2rem;

`