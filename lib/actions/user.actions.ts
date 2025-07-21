"use server";

import { Blog, CreateUser, LoginUser, User } from "@/types";
import { fetchUserBlogs } from "./blogs.actions";
import { getSession } from "next-auth/react";

import { GetServerSidePropsContext } from "next";

export async function registerUser(user: CreateUser): Promise<CreateUser> {
  const response = await fetch(`${process.env.BACKEND_URI}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Register API Error:", errorData);
    throw new Error(errorData.message || "Failed to create user");
  }

  const createdUser: User = await response.json();
  return createdUser;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const userId = session?.user?._id;

  console.log("session::::", session);
  console.log("user ID::::", userId);

  let userBlogs: Blog[] = [];
  if (userId) {
    try {
      userBlogs = await fetchUserBlogs(userId.toString());
      // If you want to limit the number of blogs, you can slice here
      // userBlogs = userBlogs.slice(0, 5);
    } catch (error) {
      console.error("Error fetching user blogs:", error);
    }
  }

  // Return the fetched data as props
  return {
    props: {
      userBlogs,
    },
  };
}
