import { Navbar } from "react-bootstrap";
import "../styles/homepage.scss";


export const metadata = {
  title: "My Next.js App",
  description: "Web vytvořený pomocí Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="background">

        {children}

      </body>
    </html>
  );
}