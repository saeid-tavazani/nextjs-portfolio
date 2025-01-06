import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import clsx from "clsx";
import { ThemeProvider } from "@/components/theme/themeProvider";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "سعید توازانی",
  description:
    "یک توسعه‌دهنده فرانت‌اند خلاق و متعهد که با اشتیاقی بی‌پایان در جهت بهبود تجربه‌های کاربری فعالیت می‌کند.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={clsx(vazirmatn.variable, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
