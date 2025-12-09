import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "...",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
