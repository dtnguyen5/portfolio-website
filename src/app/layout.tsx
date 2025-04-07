import "../styles/homepage.scss";
import "../styles/navbar.scss"
import Navbar from "@/components/Navbar";
import { MetadataProvider } from "@/providers/MetadataProvider";

export const metadata = {
  title: "Nguyen Duy Tiep - Portfolio",
  description: "Jsem frontend developer specializující se na React a Next.js.",
  keywords: ["Portfolio", "Nguyen Duy Tiep", "Next.js", "React", "Web Developer"],
  authors: [{ name: "Nguyen Duy Tiep", url: "" }],
  openGraph: {
    title: "Nguyen Duy Tiep - Portfolio",
    description: "Jsem frontend developer specializující se na React a Next.js.",
    url: "",
    siteName: "Nguyen Duy Tiep Portfolio",
    images: [
      {
        url: "https://tvujweb.cz/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Nguyen Duy Tiep - Portfolio",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="background">

        <MetadataProvider>

          <div className="main-content">

            <div className="nav-content">

              <Navbar />

            </div>
              
              {children} 

          </div>
        
        </MetadataProvider>

      </body>
    </html>
  );
}
