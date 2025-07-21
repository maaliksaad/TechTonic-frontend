import React from "react";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoveHorizontalIcon } from "lucide-react";
import Link from "next/link";
import { Blog } from "@/types";
import { useSession } from "next-auth/react";
import { deleteBlog } from "@/lib/actions/blogs.actions";
import { useRouter } from "next/navigation";

interface BlogPostTableProps {
  userBlogs: Blog[];
  setUserBlogs: React.Dispatch<React.SetStateAction<Blog[]>>; // 🔹 To update state after delete
}

const BlogPostTable = ({ userBlogs, setUserBlogs }: BlogPostTableProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleDelete = async (blogId: string) => {
    if (!session?.user?.token) {
      console.error("User is not authenticated");
      return;
    }

    console.log("Deleting blog with ID:", blogId);

    try {
      const deletedBlog = await deleteBlog(blogId, session.user.token);
      console.log("Deleted blog:", deletedBlog);

      // 🔹 Update UI to remove deleted blog
      setUserBlogs((prev) => prev.filter((b) => b._id !== blogId));
    } catch (error) {
      console.error("Delete error in catch:", error);
    }
  };

  const handleEdit = (blog: Blog) => {
    router.push(`dashboard/newpost?edit=1&id=${blog._id}`);
  };
  return (
    <div className="border shadow-sm rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell">Published</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userBlogs.map((post, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium overflow-hidden">
                {post.title}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {post.user.name}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {post.createdAt}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoveHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEdit(post)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(post._id)} // 🔹 Delete called here
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogPostTable;
