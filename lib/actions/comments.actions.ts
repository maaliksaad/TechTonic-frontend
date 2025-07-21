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

export async function createComment(
  blogId: string,
  formData: FormData,
  token: string
) {
  const res = await fetch(`${process.env.BACKEND_URI}/api/comments/${blogId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to create comment");
  }

  const comment = await res.json();
  return comment;
}
