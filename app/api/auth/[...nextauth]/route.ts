import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const res = await fetch(`${process.env.BACKEND_URI}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) {
            console.error(
              `Error: Received status ${res.status} from ${process.env.BACKEND_URI}/api/auth/login`
            );
            throw new Error("Invalid credentials");
          }

          const user = await res.json();
          console.log("Backend response user:", user);

          if (!user || !user.token) {
            throw new Error("Invalid credentials");
          }

          return user;
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token._id = user._id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
        token.token = user.token; // <-- include token from backend
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      session.user = {
        _id: token._id,
        email: token.email,
        name: token.name,
        image: token.image,
        token: token.token, // <-- make token available in session
      };
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
