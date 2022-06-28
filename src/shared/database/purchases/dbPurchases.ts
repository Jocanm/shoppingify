import { Purchase } from '@prisma/client';
import { prisma } from '../../../lib';


export const getPurchasesByUserId = async (userId: string):Promise<Purchase[]> => {

    const purchases = await prisma.purchase.findMany({
        where: {
            AND: [
                { userId },
                { state: { not: 'pending' } }
            ]
        }
    })

    return JSON.parse(JSON.stringify(purchases));
}