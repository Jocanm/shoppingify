import type { NextApiRequest, NextApiResponse } from 'next'
import { patterns } from '../../../shared'
import { prisma } from '../../../lib';
import bcrypt from 'bcryptjs';

type Data =
    | { message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case "POST":
            return registerUser(req, res)

        default:
            return res.status(405).json({ message: "Method not allowed" })
    }

}

async function registerUser(req: NextApiRequest, res: NextApiResponse<{ message: string }>) {

    const { email, password, name } = req.body as { email: string, password: string, name: string }

    if (!email || !password || !name) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' })
    }

    if (name.length < 3) {
        return res.status(400).json({ message: 'Name must be at least 3 characters' })
    }

    if (!(patterns.email.test(email))) {
        return res.status(400).json({ message: 'Email is invalid' })
    }

    const user = await prisma.user.findUnique({
        where: { email },
    })

    if (user) {
        return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = bcrypt.hashSync(password)

    try {

        await prisma.user.create({
            data: {
                email: email.toLowerCase(),
                password: hashedPassword,
                name,
            },
        })

        return res.status(200).json({ message: 'User created successfully' })

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' })
    }
}
