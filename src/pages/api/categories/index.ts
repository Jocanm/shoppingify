import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib';
import { getSession } from 'next-auth/react';

type Data =
    | { message: string }
    | any

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getCategories(req, res)

        default:
            return res.status(405).json({ message: "Method not allowed" })
    }

}

async function getCategories(req: NextApiRequest, res: NextApiResponse<Data>) {

    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const { id } = (session?.user as { id: string }) || {}

    const categories = await prisma.category.findMany({
        where: { userId: id },
        include: { products: true },
    })

    res.status(200).json(categories)

}
