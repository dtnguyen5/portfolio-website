import "../styles/homepage.scss";
import Navbar from "@/components/navbar";


export const metadata = {
  title: "Nguyen Duy Tiep",
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

        <div className="main-content">

          <div className="nav-content">

            <Navbar />

          </div>
            
            {children} 

        </div>

      </body>
    </html>
  );
}