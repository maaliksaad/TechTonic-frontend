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

interface BlogPostTableProps {
  userBlogs: Blog[];
}
const BlogPostTable = ({ userBlogs }: BlogPostTableProps) => {
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
                    <DropdownMenuItem>
                      <Link href="#">Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#">Delete</Link>
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
