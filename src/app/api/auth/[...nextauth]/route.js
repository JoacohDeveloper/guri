import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
const handler =
 NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "username"
                },
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials, req) {
                    const user = credentials;
                    
                return user
            }
        })
    ],
    pages: {
        signOut: "/",
        signIn: "/"
    }
},
)

export { handler as GET, handler as POST }

