import { Box, PurchasesList, ViewTitle, ViewWrapper } from '../../components';
import { useAppSelector } from '../../config/redux';
import { PrivateLayout } from '../../layout';

const HistoryPage = () => {

    const { purchases } = useAppSelector().shopping

    return (
        <PrivateLayout
            title="Shoppingify | History"
            description="Record page"
        >
            <ViewWrapper>

                <ViewTitle>Shopping history</ViewTitle>

                <PurchasesList
                    purchases={purchases}
                />

            </ViewWrapper>
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