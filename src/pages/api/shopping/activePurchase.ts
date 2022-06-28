import { ActivePurchase } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib';

type Data =
    | { message: string }
    | ActivePurchase | null

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getActivePurchase(req, res)
    }

}

const getActivePurchase = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: 'Not logged in' })
    }

    const { id: userId } = (session?.user as { id: string }) || {}

    try {
        const activePurchase = await prisma.activePurchase.findUnique({
            where: {
                userId
            },
            include: {
                purchase: {
                    include: {
                        products: {
                            include: {
                                product: true
                            }
                        }
                    }
                }
            }
        })

        return res.status(200).json(activePurchase)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal error' })
    }

}