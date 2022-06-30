import React from 'react'
import { Box, PurchasesList, ViewTitle } from '../../components';
import { PrivateLayout } from '../../layout'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react';
import { prisma } from '../../lib/prisma';
import { getPurchasesByUserId } from '../../shared/database';
import { IPurchase } from '../../shared/models';

interface Props {
    purchases: IPurchase[]
}

const HistoryPage = ({ purchases }: Props) => {
    return (
        <PrivateLayout
            title="Shoppingify | History"
            description="Record page"
        >
            <Box flex flexColumn gap="3rem">

                <ViewTitle>Shopping history</ViewTitle>
                
                <PurchasesList
                    purchases={purchases}
                />

            </Box>
        </PrivateLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    // const session = await getSession({ req })

    // if (!session) {
    //     return {
    //         redirect: {
    //             destination: '/auth/login',
    //             permanent: false,
    //         }
    //     }
    // }

    // const { id: userId } = (session.user as { id: string }) || {}

    // const purchases = await getPurchasesByUserId(userId)
    const purchases = await getPurchasesByUserId('62bb70e3fbda137b170034ef')

    return {
        props: {
            purchases
        }
    }
    
}

HistoryPage.auth = true;
export default HistoryPage