import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib';
import { initialData } from '../../../shared/database';

type Data =
    | { message: string }
    | any

const { user, category, product } = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === "production") {
        return res.status(401).json({ message: "not allowed" })
    };

    try {
        // await user.deleteMany()
        await category.deleteMany()
        await product.deleteMany()

        // await user.createMany({ data: initialData.users })
        await category.createMany({ data: initialData.categories })
        await product.createMany({ data: initialData.products })

        res.status(200).json({ message: "ok!" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal error" })
    }

}