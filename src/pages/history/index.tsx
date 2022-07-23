import { Box, PurchasesList } from '../../components';
import { RootState, useAppSelector } from '../../config/redux';
import { PrivateLayout } from '../../layout';
import { ViewTitle, ViewWrapper } from '../../shared';
import { ReactElement } from 'react';
import { VanillaLoader } from '../../components/ui/loders';
import { useSelector } from 'react-redux';

const HistoryPage = () => {

    // const { purchases } = useAppSelector().shopping
    // const { isGettingPurchases } = useAppSelector().ui

    const purchases = useSelector((state: RootState) => state.shopping.purchases)
    const isGettingPurchases = useSelector((state: RootState) => state.ui.isGettingPurchases);

    if(isGettingPurchases){
        return <VanillaLoader/>
    }

    return (
        <ViewWrapper>

            <ViewTitle>Shopping history</ViewTitle>

            {
                (purchases.length > 0)
                    ? <PurchasesList purchases={purchases} />
                    : (
                        <Box fontSize='1.2rem'>
                            {"You don't have any shopping history yet."}
                        </Box>
                    )
            }

        </ViewWrapper>
    )
}

HistoryPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrivateLayout
            title="Shoppingify | History"
            description="Record page"
        >
            {page}
        </PrivateLayout>
    )
}

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {

//     const session = await getSession({ req })

//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/auth/login',
//                 permanent: false,
//             }
//         }
//     }

//     const { id: userId } = (session.user as { id: string }) || {}

//     const purchases = await getPurchasesByUserId(userId)

//     return {
//         props: {
//             purchases
//         }
//     }

// }

HistoryPage.auth = true;
export default HistoryPage