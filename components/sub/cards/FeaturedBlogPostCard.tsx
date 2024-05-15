import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FeaturedBlogPostCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  author: { name: string; img: string };
  date: string;
}

export function FeaturedBlogPostCard({
  img,
  tag,
  title,
  desc,
  author,
  date,
}: FeaturedBlogPostCardProps) {
  return (
    <Card className="max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <CardHeader>
        <div className=" aspect-w-16 aspect-h-9 rounded-lg">
          <Image
            width={768}
            height={432}
            src={img}
            alt={title}
            className="object-cover rounded-lg shadow-xl scale-110 transform -translate-y-8"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <span className="text-blue mb-2 font-medium block">{tag}</span>
        <Link
          href="#"
          className="text-blue-gray mb-2 normal-case transition-colors hover:text-gray-900 text-lg font-bold"
        >
          {title}
        </Link>
        <p className="mb-4 text-gray-500 line-clamp-3">{desc}</p>
        <Button size="sm" className="m-2 mt-0">
          <Link href="#" className="text-blue font-medium hover:underline">
            Read More
          </Link>
        </Button>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={author.img} />
              <AvatarFallback>{author.name}</AvatarFallback>
            </Avatar>
            <div>
              <span className="text-blue-gray mb-0.5 font-medium">
                {author.name}
              </span>
              <span className="text-gray text-xs font-normal block">
                {date}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FeaturedBlogPostCard;
