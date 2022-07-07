import { Product, Category } from '@prisma/client';
import { prisma } from '../../../lib/prisma';
import { getFirstDay } from '../../helpers';


export const getTopUserStats = async (userId: string) => {

    //Obtenemos todos los productos que cumplan con el filtro
    const products = await prisma.purchasedProduct.findMany({
        where: {
            AND: [
                {
                    purchase: {
                        AND: [
                            { userId },
                            { state: { equals: 'completed' } },
                        ]
                    }
                },
                { done: true },
                {
                    updatedAt: {
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
                percentage: percentage.toFixed(1)
            }
        })

    const topCategoriesList = Object.values(topCategorys)
        .sort((a, b) => b.count - a.count)
        .slice(0, 3)
        .map(category => {
            const percentage = (category.count * 100) / totalForCategoriesPercentage;
            return {
                ...category,
                percentage: percentage.toFixed(1)
            }
        })

    return {
        topProductsList,
        topCategoriesList
    }

}