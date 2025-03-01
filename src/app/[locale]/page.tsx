import { baseURL, renderContent } from "@/app/resources";
import HomeComponent from "@/components/work/HomeComponent";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations();
  const { home } = renderContent(t);
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page() {
  const t = await getTranslations();
  const { home, person } = renderContent(t);

  return (
    <>
      <HomeComponent home={home} person={person} />
    </>
  );
}