import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { InteractionProvider } from "@/components/providers/InteractionProvider";
import "@/styles/globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono-loaded",
});

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
    <html lang="en" className={spaceMono.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <InteractionProvider>{children}</InteractionProvider>
      </body>
    </html>
  );
}
