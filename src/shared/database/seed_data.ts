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
    {
        name: "Carnes",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf2799",
    },
    {
        name: "Frutas",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf279a",
    },
    {
        name: "Lacteos",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf279b",
    },
    {
        name: "Pescados",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf279c",
    },
    {
        name: "Cereales",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf279d",
    }
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

    { name: "Pollo", categoryId: "62a9fb0402f33d6b9dcf2799" },
    { name: "Pescado", categoryId: "62a9fb0402f33d6b9dcf2799" },
    { name: "Carne", categoryId: "62a9fb0402f33d6b9dcf2799" },
    { name: "Cerdo", categoryId: "62a9fb0402f33d6b9dcf2799" },

    { name: "Manzana", categoryId: "62a9fb0402f33d6b9dcf279a" },
    { name: "Naranja", categoryId: "62a9fb0402f33d6b9dcf279a" },
    { name: "Sandia", categoryId: "62a9fb0402f33d6b9dcf279a" },
    { name: "Melon", categoryId: "62a9fb0402f33d6b9dcf279a" },

    { name: "Leche", categoryId: "62a9fb0402f33d6b9dcf279b" },
    { name: "Queso", categoryId: "62a9fb0402f33d6b9dcf279b" },
    { name: "Yogurt", categoryId: "62a9fb0402f33d6b9dcf279b" },
    { name: "Crema", categoryId: "62a9fb0402f33d6b9dcf279b" },
    { name: "Mantequilla", categoryId: "62a9fb0402f33d6b9dcf279b" },
    { name: "Chocolate", categoryId: "62a9fb0402f33d6b9dcf279b" },
    { name: "Queso crema", categoryId: "62a9fb0402f33d6b9dcf279b" },

    { name: "Salmon", categoryId: "62a9fb0402f33d6b9dcf279c" },
    { name: "Pescado", categoryId: "62a9fb0402f33d6b9dcf279c" },
    { name: "Trucha", categoryId: "62a9fb0402f33d6b9dcf279c" },
    { name: "Calamar", categoryId: "62a9fb0402f33d6b9dcf279c" },
    { name: "Atun", categoryId: "62a9fb0402f33d6b9dcf279c" },
    { name: "Pulpo", categoryId: "62a9fb0402f33d6b9dcf279c" },
    { name: "Cangrejo", categoryId: "62a9fb0402f33d6b9dcf279c" },
    { name: "Caviar", categoryId: "62a9fb0402f33d6b9dcf279c" },

    { name: "Arroz", categoryId: "62a9fb0402f33d6b9dcf279d" },
    { name: "Avena", categoryId: "62a9fb0402f33d6b9dcf279d" },
    { name: "Trigo", categoryId: "62a9fb0402f33d6b9dcf279d" },
    { name: "Cebada", categoryId: "62a9fb0402f33d6b9dcf279d" },
    { name: "Cereal", categoryId: "62a9fb0402f33d6b9dcf279d" },
    { name: "Otros", categoryId: "62a9fb0402f33d6b9dcf279d" },
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
