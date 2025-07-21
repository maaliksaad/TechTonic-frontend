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

export async function createBlog(
  formData: FormData,
  token: string
): Promise<CreateBlog> {
  const response = await fetch(`${process.env.BACKEND_URI}/api/blogs`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to create blog");
  }
  const createdBlog: CreateBlog = await response.json();
  return createdBlog;
}

export const fetchUserBlogs = async (token: string): Promise<Blog[]> => {
  const response = await fetch(`${process.env.BACKEND_URI}/api/blogs/user`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch user blogs");
  }
  return await response.json();
};

export async function getBlogById(id: string, token: string) {
  const res = await fetch(`${process.env.BACKEND_URI}/api/blogs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}

export async function updateBlog(id: string, data: FormData, token: string) {
  const res = await fetch(`${process.env.BACKEND_URI}/api/blogs/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });
  if (!res.ok) throw new Error("Failed to update blog");
  return res.json();
}

export async function deleteBlog(id: string, token: string): Promise<Blog> {
  const response = await fetch(`${process.env.BACKEND_URI}/api/blogs/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete blog");
  }

  const deletedBlog: Blog = await response.json();
  return deletedBlog;
}
