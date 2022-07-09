import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib';
import bcrypt from 'bcryptjs';
import { createCategoriesForUser } from '../../../shared/database';

type Data =
    | { message: string }
    | any

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === "production") {
        return res.status(401).json({ message: "not allowed" })
    };

    try {
        const deleteActivePurchases = prisma.activePurchase.deleteMany()
        const deletePurchasedProducts = prisma.purchasedProduct.deleteMany()
        const deletePurchases = prisma.purchase.deleteMany()
        const deleteCategories = prisma.category.deleteMany()
        const deleteUsers = prisma.user.deleteMany()
        const deleteProducts = prisma.product.deleteMany()

        const createUser = prisma.user.create({
            data: {
                name: 'test test',
                email: 'test@test.test',
                password: bcrypt.hashSync('test1234'),
            }
        })

        const { 6: user } = await prisma.$transaction([
            deleteActivePurchases,
            deletePurchasedProducts,
            deletePurchases,
            deleteCategories,
            deleteUsers,
            deleteProducts,
            createUser,
        ])

        await createCategoriesForUser(user.id)

        res.status(200).json({ message: "Success", user })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal error" })
    }

}