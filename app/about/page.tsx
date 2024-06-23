import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              TechTonic
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Exploring the latest trends and insights in technology, design,
              and entrepreneurship.
            </p>
          </div>
          <div className="flex justify-center">
            <Avatar className="h-32 w-32">
              <AvatarImage src="/authors/avatar2.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About the Author</h2>
            <p className="text-muted-foreground">
              John Doe is a seasoned tech writer and blogger with over a decade
              of experience in the industry. He is passionate about sharing his
              insights and expertise with readers, helping them navigate the
              ever-evolving world of technology.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              At the Acme Blog, our mission is to provide our readers with
              insightful and engaging content that helps them stay ahead of the
              curve in the world of technology, design, and entrepreneurship.
              We're committed to delivering high-quality, well-researched
              articles that inspire and empower our audience.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Connect with Us</h2>
            <p className="text-muted-foreground">
              Follow us on social media to stay up-to-date with the latest
              updates, insights, and discussions from the Acme Blog.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                Instagram
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/blogs/blog-12.jpeg"
              width="400"
              height="400"
              alt="Blog Author"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
