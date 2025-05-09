import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'antialiased'}
        style={{
          margin: 0,
          padding: 0,
          width: '100%',
          height: "100%",
          fontFamily: '"Inter", sans-serif', 
        }}
      >
        {children}
      </body>
    </html>
  );
}
