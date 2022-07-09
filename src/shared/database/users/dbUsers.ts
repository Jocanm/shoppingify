import bcrypt from 'bcryptjs';
import { prisma } from '../../../lib/prisma';
import { createCategoriesForUser } from './userCategories';

export const checkUser = async (email: string, password: string) => {

    const user = await prisma.user.findUnique({
        where: { email },
    })

    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) return null;

    const { password: toIgnore, ...rest } = user

    return rest;

}


export const validateOrCreateUser = async (oAuthEmail: string, oAuthName: string) => {

    try {
        const user = await prisma.user.findUnique({
            where: { email: oAuthEmail },
        })

        if (user) {
            const { password, ...rest } = user
            return rest;
        }

        const newUser = await prisma.user.create({
            data: {
                email: oAuthEmail,
                name: oAuthName,
                password: bcrypt.hashSync('@', 10),
                isOauth: true
            },
        })

        await createCategoriesForUser(newUser.id)

        const { password: toIgnore, ...rest } = newUser;
        return rest;


    } catch (error) {
        console.error(error)
        return null
    }
}