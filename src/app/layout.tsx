import type { Metadata } from "next";
import "./globals.css";
import NavBarComponent from "@/components/NavBarComponent";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "David Monterrosa Dev",
  description: "Portfolio site for California-Based Web Developer and Software Engineer",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased dark:bg-black`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <NavBarComponent/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
