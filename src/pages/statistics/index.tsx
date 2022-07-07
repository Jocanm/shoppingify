import { ReactElement } from 'react';
import { TopSection } from '../../components/pages';
import { PrivateLayout } from '../../layout';
import { ViewTitle, ViewWrapper } from '../../shared';
import { getActualDate } from '../../shared/helpers';

const StatisticsPage = () => {

    const actualYear = getActualDate('YYYY');

    return (
        <ViewWrapper>

            <ViewTitle>Statistics for {actualYear}</ViewTitle>

            <TopSection/>

        </ViewWrapper>
    )
}

StatisticsPage.auth = true;

StatisticsPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrivateLayout
            title="Shoppingify | Statistics"
            description="Statistics page"
        >
            {page}
        </PrivateLayout>
    )
}

export default StatisticsPage