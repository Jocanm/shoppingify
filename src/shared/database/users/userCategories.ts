import { prisma } from '../../../lib';

export const createCategoriesForUser = async (userId: string) => {

    await prisma.category.create({
        data: {
            name: 'Vegetables',
            userId,
            products: {
                create: [
                    {
                        name: 'Tomatoes',
                        note: 'Tomatoes are good for you',
                        image: 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg'
                    },
                    {
                        name: 'Onions',
                        note: 'Onions are good for you',
                        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/14/onions-1238332__340.jpg'
                    },
                    {
                        name: 'Carrots',
                        note: 'Carrots are orange',
                        image: 'https://cdn.pixabay.com/photo/2017/06/09/16/39/carrots-2387394_960_720.jpg'
                    },
                    {
                        name: 'Potatoes',
                        note: 'Potatoes are good for you',
                        image: 'https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060__340.jpg'
                    }
                ]
            }
        }
    })

    await prisma.category.create({
        data: {
            name: 'Alcohols',
            userId,
            products: {
                create: [
                    {
                        name: 'Corona',
                        note: 'Corona beer',
                        image: 'https://cdn.pixabay.com/photo/2018/04/05/18/12/beer-3293692_960_720.jpg'
                    },
                    {
                        name: 'Pilsner',
                        note: 'Pilsner beer',
                        image: 'https://cdn.pixabay.com/photo/2019/08/10/22/27/beer-4397837__340.png'
                    },
                    {
                        name: 'Whiskey',
                        note: 'This is whiskey',
                        image: 'https://media.istockphoto.com/photos/whisky-picture-id518755773?b=1&k=20&m=518755773&s=170667a&w=0&h=zKPIej52dMzM_RB1JqG519A8RppNk4-sYkbI7m5HWKg='
                    },
                    {
                        name: 'Red label',
                        note: 'This is red label',
                        image: 'https://cdn.pixabay.com/photo/2017/06/01/16/17/red-2363849__340.jpg'
                    }
                ]
            }
        }
    })

}