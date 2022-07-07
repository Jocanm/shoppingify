import { Progress } from '@nextui-org/react';
import dayjs from 'dayjs';
import { ReactElement } from 'react';
import { PrivateLayout } from '../../layout';
import { ViewTitle, ViewWrapper } from '../../shared';
import { getActualDate,getFirstDay } from '../../shared/helpers';

const StatisticsPage = () => {

    const actualYear = getActualDate('YYYY');

    return (
        <ViewWrapper>

            <ViewTitle>Statistics for {actualYear}</ViewTitle>

            <Progress
                value={50}
                size='sm'
            />

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