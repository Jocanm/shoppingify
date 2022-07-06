import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib';
import { getSession } from 'next-auth/react';
import { Purchase } from '@prisma/client';

type Data =
    | { message: string }
    | Purchase[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getPurchases(req, res)
        default:
            return res.status(405).json({ message: 'Method Not Allowed' })
    }

}

export const getPurchases = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const { id: userId } = (session?.user as { id: string }) || {}

    try {

        const getPurchases = prisma.purchase.findMany({
            where: {
                AND: [
                    { userId },
                    { state: { not: 'pending' } },
                ]
            },
            orderBy: {
                updatedAt: 'desc'
            }
        })

        const [purchases] = await prisma.$transaction([getPurchases])

        return res.status(200).json(purchases)

    } catch (error) {

        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })

    }

}

