import { Courses } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCourseBySlug(slug: string) {
  // Busca o curso se o slug da URL bater com a versão PT ou EN
  return (
    Courses.find(
      (course) => course.slugs.en === slug || course.slugs.pt === slug
    ) || null
  );
}
