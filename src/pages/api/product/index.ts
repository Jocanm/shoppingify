import { Category, Product } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { ProductFormProps, ProductFormShape } from '../../../components/materials';
import { prisma } from '../../../lib';

type response =
    | { message: string }
    | Product

export default function handler(req: NextApiRequest, res: NextApiResponse<response>) {

    switch (req.method) {
        case 'POST':
            return createProduct(req, res)
        default:
            return res.status(405).json({ message: "Method not allowed" })
    }
}

export const createProduct = async (req: NextApiRequest, res: NextApiResponse<response>) => {

    const session = await getSession({ req })

    if (!session) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const { id } = (session?.user as { id: string }) || {}

    try {
        await ProductFormShape.validate(req.body || {})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: (error as any)?.message })
    }

    // Si hay sesión y los datos son válidos, ahora se verifica si la categoría existe. todos los nombres se manejan en minúsculas

    const { category, name, image, note } = req.body as ProductFormProps

    let myCategory: Category;

    const categoryFound = await prisma.category.findFirst({
        where: {
            AND: [
                { name: category.toLowerCase() },
                { user: { id } }
            ]
        }
    })

    if (!categoryFound) {
        const newCategory = await prisma.category.create({
            data: {
                name: category.toLowerCase(),
                userId: id,
            }
        })
        myCategory = newCategory
    } else {
        myCategory = categoryFound
    }

    // ya tenemos la categoría, ahora se crea el producto para esa categoria

    const newProduct = await prisma.product.create({
        data: {
            name,
            categoryId: myCategory.id,
            image: image || null,
            note: note || null,
        },
        include: {
            category: {
                include: { products: true }
            }
        },
    })

    return res.status(200).json(newProduct)

}