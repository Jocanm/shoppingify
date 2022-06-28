import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
import { PurchaseStatus } from '../../../../shared/models/interfaces/pruchase.interface';
import { prisma } from '../../../../lib/prisma';
import { Purchase } from '@prisma/client';

type Data =
    | { message: string }
    | Purchase

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'PUT':
            return updatePurchaseState(req, res)
        default:
            res.status(405).json({ message: 'Method not allowed!' })
    }

}

async function updatePurchaseState(req: NextApiRequest, res: NextApiResponse<Data>) {

    const session = await getSession({ req })

    const { purchaseId } = req.query as { purchaseId: string }

    const { state } = req.body as {
        state: PurchaseStatus,
    }

    if (!session) {
        res.status(401).json({ message: 'Unauthorized' })
        return
    }

    if (!state) {
        res.status(400).json({ message: 'Missing state' })
        return
    }

    if (!purchaseId) {
        res.status(400).json({ message: 'Missing purchaseId' })
        return
    }

    try {

        const [newPurchase] = await prisma.$transaction([
            prisma.purchase.update({
                where: { id: purchaseId },
                data: {
                    state,
                    activePurchase: {
                        delete: true
                    }
                }
            })
        ])

        res.status(200).json(newPurchase)

    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Something went wrong' })
    }

}
