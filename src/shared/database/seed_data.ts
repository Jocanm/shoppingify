import bcrypt from 'bcryptjs';

export const categories = [
    {
        name: "Verduras",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf2797",
    },
    {
        name: "Alcohol",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf2798",
    },
]

export const products = [
    { name: "Tomate", categoryId: "62a9fb0402f33d6b9dcf2797" },
    { name: "Zanahoria", categoryId: "62a9fb0402f33d6b9dcf2797" },
    { name: "Papa", categoryId: "62a9fb0402f33d6b9dcf2797" },
    { name: "Whiskey", categoryId: "62a9fb0402f33d6b9dcf2798" },
    { name: "Buchanas Buchanas", categoryId: "62a9fb0402f33d6b9dcf2798" },
    { name: "Coronita", categoryId: "62a9fb0402f33d6b9dcf2798" },
    { name: "red label", categoryId: "62a9fb0402f33d6b9dcf2798" },
    { name: "sello rojo", categoryId: "62a9fb0402f33d6b9dcf2798" },
    { name: "guaro", categoryId: "62a9fb0402f33d6b9dcf2798" },
    { name: "perro con perro", categoryId: "62a9fb0402f33d6b9dcf2798" },
    { name: "old par", categoryId: "62a9fb0402f33d6b9dcf2798" },
    { name: "otros", categoryId: "62a9fb0402f33d6b9dcf2798" },
]

export const initialData = {
    users: [
        {
            name: "Jose Angarita",
            email: "jose@gmail.com",
            password: bcrypt.hashSync("123456"),
        },
        {
            name: "Demo demo",
            email: "demo@demo.com",
            password: bcrypt.hashSync("123456"),
        },
    ],
    categories,
    products
}
