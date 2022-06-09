import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib';
import { initialData } from '../../../shared/database';

type Data =
    | { message: string }
    | any

const { user } = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === "production") {
        return res.status(401).json({ message: "not allowed" })
    };

    await user.deleteMany()
    await user.createMany({ data: initialData.users })

    res.status(200).json({ message: "ok" })

}