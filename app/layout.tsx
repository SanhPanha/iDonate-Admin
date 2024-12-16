import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import SessionWrapper from "@/components/session/SessionWrapper";

const siemreap = localFont({
  src: "/fonts/Siemreap-Regular.ttf",
  variable: "--font-siemreap",
  fallback: ["serif"]
});

const inter = localFont({
  src: "/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter", 
  fallback: ["serif"]
});

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" className="h-full w-full">
      <body className={`${siemreap.variable} ${inter.variable} flex flex-col h-full w-full`}>
      <SessionWrapper>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <section className="w-full h-full flex flex-grow bg-transparent">
              <main className=" w-full h-full">
                {children}
              </main>
            </section>
        </ThemeProvider>
          </SessionWrapper>
      </body>
    </html>
  );
}
