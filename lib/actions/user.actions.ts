"use server";

import { CreateUser, LoginUser, User } from "@/types";

export async function regiterUser(user: CreateUser): Promise<CreateUser> {
  const response = await fetch(`${process.env.BACKEND_URI}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  const createdUser: User = await response.json();
  return createdUser;
}

export async function loginUser(user: LoginUser): Promise<LoginUser> {
  const response = await fetch(`${process.env.BACKEND_URI}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to login user");
  }
  const User: User = await response.json();
  return User;
}
