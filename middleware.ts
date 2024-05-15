import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  try {
    const path = req.nextUrl.pathname;

    // Retrieve token from the request
    const token = await getToken({
      req: req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    console.log("token", token);

    const protectedPaths = [
      "/dashboard",
      "/dashboard/newpost",
      "/dashboard/editpost",
      "/dashboard/deletepost",
      "/dashboard/blogposts",
      "/dashboard/profile",
    ];

    // Redirect to login if accessing protected paths without a valid token
    if (protectedPaths.some((p) => path.startsWith(p)) && !token) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  } catch (error) {
    console.error("Error in authentication middleware:", error);
  }
}

export const config = {
  // Define paths to be matched by this middleware
  matcher: [
    "/login",
    "/dashboard",
    "/dashboard/newpost",
    "/dashboard/editpost",
    "/dashboard/deletepost",
    "/dashboard/blogposts",
    "/dashboard/profile",
  ],
};
