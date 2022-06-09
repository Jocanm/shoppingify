import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcryptjs';


export const checkUser = async (email: string, password: string) => {

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) return null;

    const { password: toIgnore, ...rest } = user

    return rest;

}