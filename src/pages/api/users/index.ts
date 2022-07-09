import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib';

const { user } = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const getUsers = user.findMany()
    const getProducts = prisma.product.findMany()
    const getCategories = prisma.category.findMany()
    const getPurchases = prisma.purchase.findMany()
    const getPurchasedProducts = prisma.purchasedProduct.findMany()
    const getActivePurchases = prisma.activePurchase.findMany()

    const [users,products,categories,purchases,purchasedProducts,activePurchases] = await prisma.$transaction([
        getUsers,
        getProducts,
        getCategories,
        getPurchases,
        getPurchasedProducts,
        getActivePurchases
    ])

    res.status(200).json({
        purchases,
        purchasedProducts,
        activePurchases,
        users,
        products,
        categories,
    })

}