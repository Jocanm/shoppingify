import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib';

const { user } = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const users = await user.findMany()
    const products = await prisma.product.findMany()
    const categories = await prisma.category.findMany()
    const purchases = await prisma.purchase.findMany()
    const purchasedProducts = await prisma.purchasedProduct.findMany()
    const activePurchases = await prisma.activePurchase.findMany()


    res.status(200).json({
        purchases,
        purchasedProducts,
        activePurchases,
        users,
        products,
        categories,
    })

}