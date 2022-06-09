import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from "next-auth/providers/github"
import { checkUser } from '../../../shared/database'

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        Credentials({
            name: "Custom login",
            credentials: {
                email: { label: "Correo", type: "email", placeholder: "correo@xxxxx.com" },
                password: { label: "Contraseña", type: "password", placeholder: "************" },
            },
            authorize: async (credentials) => {
                const { email = "", password = "" } = credentials || {}
                return await checkUser(email, password)
            }
        }),
    ],

    session: {
        maxAge: 60 * 60 * 24 * 7, // 1 week,
        strategy: "jwt",
        updateAge: 86400, // 1 week,
    },

    pages: {
        signIn: "auth/login",
        newUser: "auth/register",
        error: "auth/login",
    },

    callbacks: {

        jwt: async ({ token, account, user }) => {

            if (account) {

                token.accessToken = account.access_token

                switch (account.type) {
                    case "credentials":
                        token.user = user
                        break;
                }
            }

            return token

        },

        session: async ({ session, token, user }) => {

            session.accessToken = token.accessToken;
            session.user = token.user as any;

            return session

        },

    },

    secret: process.env.NEXTAUTH_SECRET,
}) 