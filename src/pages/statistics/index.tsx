import { ReactElement } from 'react';
import { DailyStats, MonthlyStats, TopSection } from '../../components/pages';
import { PrivateLayout } from '../../layout';
import { colors, LoadersWrapper, StatisticsPageWrapper, ViewTitle, ViewWrapper } from '../../shared';
import { getActualDate } from '../../shared/helpers';
import dayjs from 'dayjs';
import { useGetTopStatisticsQuery } from '../../config/redux';
import { VanillaLoader } from '../../components/ui/loders';
import { Box } from '../../components';

const StatisticsPage = () => {

    const actualYear = getActualDate('YYYY');

    const { data, isLoading } = useGetTopStatisticsQuery(true,{
        // refetchOnMountOrArgChange:true,
    })

    if (isLoading) {
        return (
            <LoadersWrapper>
                <VanillaLoader message='please wait...' />
            </LoadersWrapper>
        )
    }

    return (
        <StatisticsPageWrapper>

            <ViewTitle>Statistics for {actualYear}</ViewTitle>

            <TopSection />

            <MonthlyStats
                monthlySummary={data?.monthlySummary || []}
            />

            <DailyStats
                dailySummary={data?.dailySummary || []}
            />

        </StatisticsPageWrapper>
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