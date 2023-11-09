import { GeistSans } from "geist/font";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog - willyw.dev",
  description: "Read and learn about development!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' supresshydrationwarning='true'>
      <body
        className={`${GeistSans.className} bg-zinc-950 min-h-screen font-light text-lg`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange>
          <Header />
          <main className='flex justify-center mt-8'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
