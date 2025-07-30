import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/locales/i18-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elamani Drawing - Portfolio",
  description: "A portfolio showcasing my skills and projects as a software developer.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  }
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full max-w-[1200px] mx-auto mt-10">
          <I18nProvider locale={locale}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </I18nProvider>
        </div>
      </body>
    </html>
  );
}
