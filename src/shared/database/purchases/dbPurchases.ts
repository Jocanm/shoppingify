import { Purchase } from '@prisma/client';
import dayjs from 'dayjs';
import { prisma } from '../../../lib';


export const getPurchasesByUserId = async (userId: string): Promise<Purchase[]> => {

    const getPurchases = prisma.purchase.findMany({
        where: {
            AND: [
                { userId },
                { state: { not: 'pending' } }
            ]
        },
        orderBy: {
            updatedAt: 'desc'
        }
    })

    const [purchases] = await prisma.$transaction([getPurchases])

    return JSON.parse(JSON.stringify(purchases));
}