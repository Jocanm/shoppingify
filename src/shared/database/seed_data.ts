import bcrypt from 'bcryptjs';

export const categories = [
    {
        name: "verduras",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf2797",
    },
    {
        name: "alcohol",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf2798",
    },
    {
        name: "carnes",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf2799",
    },
    {
        name: "frutas",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf279a",
    },
    {
        name: "lacteos",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf279b",
    },
    {
        name: "pescados",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf279c",
    },
    {
        name: "cereales",
        userId: "62b1e29142cf75479a2c15ac",
        id: "62a9fb0402f33d6b9dcf279d",
    }
]

export const products = [
    { name: "Tomate", categoryId: "62a9fb0402f33d6b9dcf2797",image:'https://cdn.pixabay.com/photo/2014/04/10/11/06/tomatoes-320860__340.jpg',note:"esto es un tomate de prueba para ver como se ve la descripcion de un producto" },
    { name: "Zanahoria", categoryId: "62a9fb0402f33d6b9dcf2797" },
    { name: "Papa", categoryId: "62a9fb0402f33d6b9dcf2797" },

    { name: "Whiskey", categoryId: "62a9fb0402f33d6b9dcf2798",image:'https://media.istockphoto.com/photos/whisky-picture-id518755773?b=1&k=20&m=518755773&s=170667a&w=0&h=zKPIej52dMzM_RB1JqG519A8RppNk4-sYkbI7m5HWKg=' },
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
