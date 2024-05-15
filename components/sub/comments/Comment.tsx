"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeartIcon, ReplyIcon } from "lucide-react";
import React, { useState } from "react";
import NewComment from "./NewComment";

interface CommentProps {
  author: {
    name: string;
    img: string;
  };
  date: string;
  content: string;
}

const Comment = ({ author, date, content }: CommentProps) => {
  const [reply, setReply] = useState(false);
  const [like, setLike] = useState(false);

  const handleReply = () => {
    setReply(!reply);
  };

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div>
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage alt={author.name} src={author.img} />
          <AvatarFallback>{author.name}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">{author.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {date}
            </div>
          </div>
          <p>{content}</p>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="ghost" onClick={handleReply}>
              <ReplyIcon className="h-4 w-4" />
              Reply
            </Button>
            <Button size="sm" variant="ghost" onClick={handleLike}>
              <HeartIcon className="h-4 w-4" />
              Like
            </Button>
          </div>
        </div>
      </div>
      {reply && <NewComment />}
    </div>
  );
};

export default Comment;
