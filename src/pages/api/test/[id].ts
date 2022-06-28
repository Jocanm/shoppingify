import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';

type Data =
    | { message: string }
    | any

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query as { id: string };

    try {
        const product = await prisma.product.findUnique({
            where: { id },
            include: {
                purchasedProduct: true
            }
        })
    
        return res.status(200).json(product)
    } catch (error) {
        
        console.log(error)
        return res.status(500).json(error)

    }

}