import { ActivePurchase, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib';
import { IPurchasedProduct } from '../../../shared/models';

type Data =
    | { message: string }
    | ActivePurchase | null

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'POST':
            return newPurchase(req, res)
        default:
            return res.status(405).json({ message: 'Method Not Allowed' })
    }

}

const newPurchase = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const session = await getSession({ req })
    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const { id: userId } = (session?.user as { id: string }) || {}

    const { products, name } = req.body as {
        products: IPurchasedProduct[],
        name: string,
    }

    const newPurchase = await prisma.purchase.create({
        data: {
            userId,
            name,
            activePurchase: {
                create: { userId }
            },
            products: {
                create: products
            }
        },
    })

    const newActivePurchase = await prisma.activePurchase.findUnique({
        where: {
            purchaseId: newPurchase.id
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

    return res.status(200).json(newActivePurchase)

}