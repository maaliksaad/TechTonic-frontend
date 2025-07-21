"use client";

import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter, useSearchParams } from "next/navigation";
import ReactQuill from "react-quill";
import { useForm, SubmitHandler } from "react-hook-form";
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
import { createBlog, getBlogById } from "@/lib/actions/blogs.actions";
import { useSession } from "next-auth/react";

// Define the form schema using Zod
const formSchema = z.object({
  title: z.string().nonempty("Title is required."),
  content: z.string().nonempty("Content is required."),
  category: z.string().nonempty("Category is required."),
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size > 0, {
      message: "Image is required.",
    }),
});

// Define the type for form inputs
type FormData = z.infer<typeof formSchema>;

const Page: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "", // Initialize content
      category: "",
      image: null as unknown as File, // Initialize image as null
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("category", data.category);
    formData.append("slug", slugify(data.title));
    if (data.image) {
      formData.append("image", data.image);
    }
    console.log("Form data being submitted:", formData); // Debugging: Check form data
    try {
      if (session?.user?.token) {
        await createBlog(formData, session.user.token);
        router.push("/dashboard");
      } else {
        console.error("User token is not available.");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
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
                    id="title"
                    placeholder="Title"
                    required
                    type="text"
                    className="py-12 text-6xl border-none outline-none"
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
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ReactQuill
                    className="w-full mt-10"
                    theme="bubble"
                    value={field.value}
                    onChange={(content) => field.onChange(content)}
                    placeholder="Tell your story..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-5 h-[43.75rem] relative">
            <Button variant="ghost" onClick={() => setOpen(!open)}>
              <PlusCircleIcon size={24} color="black" />
            </Button>

            <div className="flex gap-5 absolute z-50 w-full left-14">
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
                        onChange={(e) => {
                          if (e.target.files) {
                            console.log("File selected:", e.target.files[0]); // Debugging: Check file
                            field.onChange(e.target.files[0]);
                          }
                        }}
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
          </div>
          <Button variant="default" className="mr-4" type="submit">
            Publish
          </Button>
          <Button
            variant="destructive"
            onClick={() => router.push("/dashboard")}
          >
            Cancel
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
