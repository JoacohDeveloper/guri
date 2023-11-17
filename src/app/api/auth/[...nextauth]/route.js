import { SESSION_MAX_AGE } from "@/app/constants";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"


const handler =
 NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
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
                const response = await fetch(`${process.env.NEXTAUTH_URL}/api/user/login`, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)
                })
                const data = await response.json()
                if(!response.ok) throw data
                return data
            }
        })
    ],
    pages: {
        signOut: "/",
        signIn: "/account/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
          },
          async session({ session, token }) {
            session.user = token;
            session.expires = SESSION_MAX_AGE
            return session;
          },
    },
    
},
)

export { handler as GET, handler as POST }

