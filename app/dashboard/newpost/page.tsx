"use client";

import { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageIcon, PlusCircleIcon, UploadIcon, Video } from "lucide-react";

const formSchema = z.object({
  title: z.string().nonempty({
    message: "Title is required.",
  }),
  category: z.string({
    message: "Category is required.",
  }),
  image: z.string().nonempty({
    message: "Image is required.",
  }),
});

const Page = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // const slugify = (str) =>
  //   str
  //     .toLowerCase()
  //     .trim()
  //     .replace(/[^\w\s-]/g, "")
  //     .replace(/[\s_-]+/g, "-")
  //     .replace(/^-+|-+$/g, "");

  const handleSubmit = () => {};

  // const handleSubmit = async () => {
  //   const res = await fetch("/api/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title,
  //       desc: value,
  //       img: media,
  //       slug: slugify(title),
  //       catSlug: catSlug || "style", //If not selected, choose the general category
  //     }),
  //   });

  //   if (res.status === 200) {
  //     const data = await res.json();
  //     router.push(`/posts/${data.slug}`);
  //   }
  // };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="text"
                    placeholder="Title"
                    required
                    type="text"
                    className="py-12 text-6xl border-none outline-none "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value="coding">coding</SelectItem>
                      <SelectItem value="fashion">fashion</SelectItem>
                      <SelectItem value="food">food</SelectItem>
                      <SelectItem value="travel">travel</SelectItem>
                      <SelectItem value="technology">technology</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-5 h-[43.75rem] relative">
            <Button variant="ghost" onClick={() => setOpen(!open)}>
              <PlusCircleIcon size={24} color="black" />
            </Button>
            {open && (
              <div className=" flex gap-5 absolute z-50 w-full left-14">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Button
                          variant="ghost"
                          className="rounded-full border-2 border-black"
                        >
                          <ImageIcon />
                        </Button>
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="image"
                          type="file"
                          className="relative -top-12 opacity-0 w-14 h-10 cursor-pointer"
                          accept="image/*"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  variant="ghost"
                  className="rounded-full border-2 border-black"
                >
                  <UploadIcon />
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-full border-2 border-black"
                >
                  <Video />
                </Button>
              </div>
            )}
            <ReactQuill
              className="w-full mt-10"
              theme="bubble"
              value={value}
              onChange={setValue}
              placeholder="Tell your story..."
            />
          </div>

          <Button variant="default" className="mr-4" type="submit">
            Publish
          </Button>
          <Button variant="destructive" onClick={handleSubmit}>
            Cancel
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
