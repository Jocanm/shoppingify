import { Category, Product } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
import { prisma } from '../../../lib/prisma';
import { getFirstDay } from '../../../shared/helpers';

type Data =
    | { message: string }
    | any

export default async function hanlder(req: NextApiRequest, res: NextApiResponse<Data>) {

    // const session = await getSession({ req });

    // if (!session) {
    //     res.status(401).json({ message: 'Not logged in' });
    //     return;
    // }

    switch (req.method) {
        case 'GET':
            return getStatistics(req, res);
        default:
            return res.status(405).json({ message: 'Method not allowed' });
    }

}

const getStatistics = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    // const session: any = await getSession({ req });

    // const { id: userId = '' } = session.user || {};

    //Obtenemos todos los productos que cumplan con el filtro
    const products = await prisma.purchasedProduct.findMany({
        where: {
            AND: [
                {
                    purchase: {
                        AND: [
                            { userId: '62c6fcbbe19e467b74728cb2' },
                            { state: { equals: 'completed' } },
                        ]
                    }
                },
                { done: true },
                {
                    createdAt: {
                        gte: getFirstDay('year')
                    }
                }
            ]
        },
        include: {
            product: {
                include: {
                    category: true,
                }
            }
        }
    })

    //Creamos un objeto para contar el numero de productos comprados
    const topProducts: {
        [key: string]: { count: number, product: Product, percentage?: number }
    } = {}

    //Creamos un objeto para contar el numero de veces que aparece cada categoria
    const topCategorys: {
        [key: string]: { count: number, category: Category, percentage?: number }
    } = {}

    // Total para calcular el porcentaje que aparece cada categoria
    const totalForCategoriesPercentage = products.length;

    // Total para calcular el porcentaje de cada producto comprado
    let totalForProductsPercentage = 0;

    products.forEach(({ product, quantity }) => {

        // por cada quantity sumamos al total de productos que han sido comprados
        totalForProductsPercentage += quantity;

        const { id: productId, category: { id: categoryId } } = product;
        const { [productId]: productFound } = topProducts

        if (productFound) {
            productFound.count += quantity
        } else {
            topProducts[productId] = { count: quantity, product }
        }

        const { [categoryId]: categoryFound } = topCategorys

        if (categoryFound) {
            categoryFound.count++
        } else {
            topCategorys[categoryId] = { count: 1, category: product.category }
        }

    })

    const topProductsList = Object.values(topProducts)
        .sort((a, b) => b.count - a.count)
        .slice(0, 3)
        .map(product => {
            const percentage = (product.count * 100) / totalForProductsPercentage;
            return {
                ...product,
                percentage
            }
        })

    const topCategorysList = Object.values(topCategorys)
        .sort((a, b) => b.count - a.count)
        .slice(0, 3)
        .map(category => {
            const percentage = (category.count * 100) / totalForCategoriesPercentage;
            return {
                ...category,
                percentage
            }
        })

    res.status(200).json({
        topProductsList,
        topCategorysList,
    })

}