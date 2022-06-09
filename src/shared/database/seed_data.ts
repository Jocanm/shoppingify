import bcrypt from 'bcryptjs';


export const initialData = {
    users: [
        {
            name:"Jose Angarita",
            email:"jose@gmail.com",
            password:bcrypt.hashSync("123456"),
        },
        {
            name:"David sarmiento",
            email:"david@gmail.com",
            password:bcrypt.hashSync("123456"),
        },
    ]
}