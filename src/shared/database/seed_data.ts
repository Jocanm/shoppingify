import bcrypt from 'bcryptjs';

export const categories = [
    {
        name: "Verdurass",
        userId: "62a9fc2102f33d6b9dcf27a1",
        id: "62a9fb0402f33d6b9dcf2797",
    },
    {
        name: "Alcohol",
        userId: "62a9fc2102f33d6b9dcf27a2",
        id: "62a9fb0402f33d6b9dcf2798",
    },
]

export const products = [
    { name: "Tomate", categoryId: "62a9fb0402f33d6b9dcf2797" },
    { name: "Zanahoria", categoryId: "62a9fb0402f33d6b9dcf2797" },
    { name: "Papa", categoryId: "62a9fb0402f33d6b9dcf2797" },
    { name: "Whiskey", categoryId: "62a9fb0402f33d6b9dcf2798" },
    { name: "Buchanas", categoryId: "62a9fb0402f33d6b9dcf2798" },
    { name: "Coronita", categoryId: "62a9fb0402f33d6b9dcf2798" },
]

export const initialData = {
    users: [
        {
            name: "Jose Angarita",
            email: "jose@gmail.com",
            password: bcrypt.hashSync("123456"),
        },
        {
            name: "David sarmiento",
            email: "david@gmail.com",
            password: bcrypt.hashSync("123456"),
        },
    ],
    categories,
    products
}
