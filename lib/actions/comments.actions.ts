"use server";

export async function fetchComments(blogId: string) {
  const res = await fetch(`${process.env.BACKEND_URI}/api/comments/${blogId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  const comments = await res.json();
  return comments;
}
