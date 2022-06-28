import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib';
import { getSession } from 'next-auth/react';

type Data = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    console.log(req.method)

    if(req.method === 'PUT'){
        updatePurchaseData(req,res)
    }else{
        res.status(405).json({message:'Method not allowed!'})
    }

}

const updatePurchaseData = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const session = await getSession({ req })

    if (!session) {
        res.status(401).json({ message: 'Unauthorized' })
        return
    }

    const { purchaseId } = req.query as { purchaseId: string }

    const { name, products } = req.body as {
        name: string,
        products: [
            {
                productId: string,
                quantity: number
            }
        ]
    }

    if (!purchaseId) {
        res.status(400).json({ message: 'Missing purchaseId' })
        return
    }

    if (!name) {
        res.status(400).json({ message: 'Missing name' })
        return
    }

    if (!products) {
        res.status(400).json({ message: 'Missing products' })
        return
    }

    try {

        //method one (custom upsertMany)
        console.time()

        const newPurchasedProducts = products.map(product => ({
            ...product,
            purchaseId
        }))

        await prisma.$transaction([
            prisma.purchase.update({
                where: { id: purchaseId },
                data: { name }
            }),
            prisma.purchasedProduct.deleteMany({
                where: { purchaseId }
            }),
            prisma.purchasedProduct.createMany({
                data: newPurchasedProducts
            })
        ])

        console.timeEnd()

        return res.status(200).json({ message: 'Purchase updated' })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Something went wrong' })
    }

}