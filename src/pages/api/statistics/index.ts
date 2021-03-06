import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { getTopUserStats, getUserDailySummaryStats, getUserMonthlySummaryStats } from '../../../shared/database';

type Data =
    | { message: string }
    | any

export default async function hanlder(req: NextApiRequest, res: NextApiResponse<Data>) {

    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ message: 'Not logged in' });
        return;
    }

    switch (req.method) {
        case 'GET':
            return getStatistics(req, res);
        default:
            return res.status(405).json({ message: 'Method not allowed' });
    }

}

const getStatistics = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const session: any = await getSession({ req });

    const { id: userId = '' } = session.user || {};

    const { topCategoriesList, topProductsList } = await getTopUserStats(userId)

    const { monthlySummary } = await getUserMonthlySummaryStats(userId)

    const { dailySummary } = await getUserDailySummaryStats(userId)

    res.status(200).json({
        topProductsList,
        topCategoriesList,
        monthlySummary,
        dailySummary
    })

}