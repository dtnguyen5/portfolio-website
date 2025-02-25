import { ReactNode } from "react";
import Head from "next/head";
import { MetadataProvider as MetadataProviderModule } from "@/providers/MetadataProvider";

interface MetadataProviderProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function MetadataProvider({
  children,
  title = "Nguyen Duy Tiep - Portfolio",
  description = "Jsem frontend developer specializující se na React a Next.js.",
}: MetadataProviderProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="image-url" />
        <meta property="og:type" content="website" />
      </Head>
      {children}
    </>
  );
}
