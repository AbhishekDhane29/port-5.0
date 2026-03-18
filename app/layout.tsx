import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Abhishek Dhane — Product Designer",
  description:
    "Portfolio of Abhishek Dhane. Product Designer crafting thoughtful interaction systems for complex products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
