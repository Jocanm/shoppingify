import React from 'react'
import { Box, PurchasesList, ViewTitle } from '../../components';
import { PrivateLayout } from '../../layout'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react';
import { prisma } from '../../lib/prisma';
import { getPurchasesByUserId } from '../../shared/database';

interface Props {
    purchases: any[]
}

const HistoryPage = ({ purchases }: Props) => {
    return (
        <PrivateLayout
            title="Shoppingify | History"
            description="Record page"
        >
            <Box flex flexColumn gap="2rem">
                <ViewTitle>Shopping history</ViewTitle>
                <PurchasesList />
                <pre>
                    {JSON.stringify(purchases, null, 2)}
                </pre>
            </Box>
        </PrivateLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            }
        }
    }

    const { id: userId } = (session.user as { id: string }) || {}

    const purchases = await getPurchasesByUserId(userId)

    return {
        props: {
            purchases
        }
    }
}

HistoryPage.auth = true;
export default HistoryPage