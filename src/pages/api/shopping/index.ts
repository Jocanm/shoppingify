import { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib';
import { IPurchasedProduct } from '../../../shared/models';

type Data =
    | { message: string }

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

    console.log(req.body)

    // return res.status(200).json({ message: 'ok!' })

    await prisma.purchase.create({
        data: {
            userId,
            name,
            activePurchase: {
                create: { userId }
            },
            products: {
                //TODO: quitar este @ts-ignore cuando se arregle el bug
                //@ts-ignore
                create: products
            }
        },
    })

    return res.status(200).json({ message: 'ok!' })

}