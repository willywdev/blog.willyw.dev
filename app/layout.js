import { GeistSans } from "geist/font";
import "./globals.css";

export const metadata = {
  title: "Blog - willyw.dev",
  description: "Come read and learn about web development and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={GeistSans.className}>
      <body className=' text-zinc-100 bg-zinc-950'>{children}</body>
    </html>
  );
}
