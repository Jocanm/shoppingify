import bcrypt from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Yup from 'yup';
import { prisma } from '../../../lib';
import { patterns } from '../../../shared';

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

    const userSchema = Yup.object({
        email: Yup
            .string()
            .required("email is required")
            .matches(patterns.email, "Invalid email"),
        password: Yup
            .string()
            .required("password is required")
            .min(6, "Password must be at least 6 characters long"),
        name: Yup
            .string()
            .required("name is required")
            .min(3, "Name must be at least 3 characters long")
    })

    try {
        await userSchema.validate({ email, password, name })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: (error as any)?.message })
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
