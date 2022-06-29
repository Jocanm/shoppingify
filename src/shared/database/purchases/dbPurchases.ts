import { Purchase } from '@prisma/client';
import dayjs from 'dayjs';
import { prisma } from '../../../lib';


export const getPurchasesByUserId = async (userId: string): Promise<Purchase[]> => {

    const purchases = await prisma.purchase.findMany({
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

    return JSON.parse(JSON.stringify(purchases));
}