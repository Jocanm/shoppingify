import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';

type Data = { name: string } | any

export default async function hanlder(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { productId, purchaseId } = req.body as {
        purchaseId: string,
        productId: string,
    }

    try {

        const purchasedProduct = await prisma.purchasedProduct.create({
            data: {
                quantity: 0,
                productId,
                purchaseId,
            }
        })

        return res.status(200).json(purchasedProduct)

    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }

}