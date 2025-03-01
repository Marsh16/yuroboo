import { getPosts } from '@/app/utils/utils';
import { Flex } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations } from 'next-intl/server';

type PageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata() {
  const t = await getTranslations();
  const { work } = renderContent(t);

  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/work/`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Work() {
  const t = await getTranslations();
  const { person, work } = renderContent(t);
  let allProjects = getPosts(['src', 'app', 'work', 'projects']);

  return (
    <Flex
      fillWidth 
      maxWidth="m"
      direction="column"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            headline: work.title,
            description: work.description,
            url: `https://${baseURL}/projects`,
            image: `${baseURL}/og?title=Design%20Projects`,
            author: {
              '@type': 'Person',
              name: person.name,
            },
            hasPart: allProjects.map(project => ({
              '@type': 'CreativeWork',
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
              image: `${baseURL}/${project.metadata.image}`,
            })),
          }),
        }}
      />
      <Projects locale="" />
    </Flex>
  );
}