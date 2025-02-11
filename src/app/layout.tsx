import "../styles/homepage.scss";


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
        {children} 
      </body>
    </html>
  );
}