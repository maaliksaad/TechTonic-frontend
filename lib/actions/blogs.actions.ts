"use server";

import { Blog, CreateBlog } from "@/types";

export async function fetchBlogs(): Promise<Blog[]> {
  const response = await fetch(`${process.env.BACKEND_URI}/api/blogs`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const blogs: Blog[] = await response.json();
  return blogs;
}

export async function fetchBlog(id: string): Promise<Blog> {
  const response = await fetch(`${process.env.BACKEND_URI}/api/blogs/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }
  const blog: Blog = await response.json();
  console.log(blog);
  return blog;
}

export async function createBlog(blog: CreateBlog): Promise<CreateBlog> {
  const response = await fetch(`${process.env.BACKEND_URI}/api/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  if (!response.ok) {
    throw new Error("Failed to create blog");
  }
  const createdBlog: CreateBlog = await response.json();
  return createdBlog;
}

export const fetchUserBlogs = async (userId: string): Promise<Blog[]> => {
  const response = await fetch(
    `${process.env.BACKEND_URI}/api/blogs/user/${userId}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user blogs");
  }
  const blogs: Blog[] = await response.json();
  return blogs;
};
