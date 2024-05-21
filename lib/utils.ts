import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const date = (createdAt: string) =>
  new Date(createdAt).toLocaleDateString("fr-BE");
