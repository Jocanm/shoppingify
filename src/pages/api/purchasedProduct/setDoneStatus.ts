import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib';

type Data = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'PUT':
            return setProductDone(req, res)
        default:
            res.status(405).json({ message: 'Method not allowed' })
    }

}

async function setProductDone(req: NextApiRequest, res: NextApiResponse<Data>) {

    const session = await getSession({ req })

    if (!session) {
        res.status(401).json({ message: 'Unauthorized' })
        return
    }

    const { productId, purchaseId } = req.query as { purchaseId: string, productId: string }
    const { done, quantity } = req.body as { done: boolean, quantity: number }

    if (!productId || !purchaseId || !quantity) {
        res.status(400).json({ message: 'Missing fields' })
        return
    }

    if (done !== true && done !== false) {
        res.status(400).json({ message: 'Invalid value for done property' })
        return
    }

    const purchasedProducts = await prisma.purchasedProduct.findMany({
        where: { purchaseId }
    })

    const product = purchasedProducts.find(product => product.productId === productId)

    if (!product) {
        await prisma.purchasedProduct.create({
            data: {
                productId,
                purchaseId,
                quantity,
                done
            }
        })
    }else{
        await prisma.purchasedProduct.update({
            where: { id: product.id },
            data: {
                quantity,
                done
            }
        })
    }

    res.status(200).json({ message: 'Done status updated' })

}
