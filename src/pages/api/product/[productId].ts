

import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib/prisma';

type Data = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'DELETE':
            return deleteProduct(req, res)
        default:
            return res.status(405).json({ message: "Method not allowed" })
    }

}

async function deleteProduct(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { productId } = req.query as { productId: string }

    const session = getSession({ req })

    if (!session) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    await prisma.product.delete({
        where: {
            id: productId,
        }
    })

    return res.status(200).json({ message: "Product deleted" })

}
