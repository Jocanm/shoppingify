import { prisma } from '../../../lib';
import dayjs from 'dayjs';
import { PrismaPromise, Purchase } from '@prisma/client';


export const getUserMonthlySummaryStats = async (userId: string) => {

    const response: {
        month: string,
        quantity: number,
    }[] = []

    for (let i = 0; i < 12; i++) {

        const month = dayjs().month(i);

        const startOfMonth = month.startOf('month').toISOString();
        const endOfMonth = month.endOf('month').subtract(1, 'day').toISOString();

        //Buscamos todas las purchases de un usuario especifico, estas deben tener el "state" en completed y por lo menos alguno de los productos debe tener el estado "done" en true
        const getPurchases = prisma.purchase.findMany({
            where: {
                AND: [
                    { userId },
                    { state: { equals: 'completed' } },
                    {
                        products: {
                            some: {
                                done: { equals: true },
                            }
                        }
                    },
                    {
                        updatedAt: {
                            gte: startOfMonth,
                            lte: endOfMonth
                        }
                    }
                ]
            }
        })

        const [purchases] = await prisma.$transaction([getPurchases]);

        response.push({
            month: month.format('MMMM'),
            quantity: purchases.length,
        })

    }

    return {
        monthlySummary: response,
    }

}

export const getUserDailySummaryStats = async (userId: string) => {

    const daysInMonth = dayjs().daysInMonth();

    const response: {
        day: string,
        quantity: number,
    }[] = []


    for (let i = 1; i < daysInMonth + 1; i++) {

        const actualDay = dayjs().date(i);

        const startOfDay = actualDay.startOf('day').toISOString();
        const endOfDay = actualDay.endOf('day').toISOString();

        const getPurchases = prisma.purchase.findMany({
            where: {
                AND: [
                    { userId },
                    { state: { equals: 'completed' } },
                    {
                        products: {
                            some: {
                                done: { equals: true },
                            }
                        }
                    },
                    {
                        updatedAt: {
                            gte: startOfDay,
                            lte: endOfDay
                        }
                    }
                ]
            }
        })

        const [purchases] = await prisma.$transaction([getPurchases]);

        response.push({
            day: i.toString(),
            quantity: purchases.length,
        })

    }

    return {
        dailySummary: response,
    }

}