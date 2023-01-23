import "./styles/globals.css";
import "../public/fontawesome/css/all.css";
import { Inter } from "@next/font/google";

const font = Inter({
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={font.className}>{children}</body>
    </html>
  );
}
