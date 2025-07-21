import NextAuth from "next-auth";

export declare type CreateUserParams = {
  email: string;
  username: string;
  password: string;
  photo: string;
};

export declare type UpdateUserParams = {
  email: string;
  username: string;
  password: string;
  photo: string;
};

// User Interface
export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  token?: string; // <-- add this line
}

// Blog Interface
export interface Blog {
  _id: string;
  title: string;
  content: string;
  category: string;
  slug: string;
  image: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBlog {
  title: string;
  content: string;
  category: string;
  slug: string;
  image: any;
  user: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
  image?: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface CommentType {
  _id: string;
  content: string;
  user: User;
  blog: string;
  createdAt: string;
  updatedAt: string;
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
