import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib';

const { user } = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const users = await user.findMany()
    res.status(200).json({ users })

}