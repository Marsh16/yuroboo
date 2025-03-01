import { getPosts } from '@/app/utils/utils';
import { Flex } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations } from 'next-intl/server';
import { WorkJsonLd } from '@/components/work/WorkJsonLd';

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
      images: [{ url: ogImage, alt: title }],
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
  const allProjects = getPosts(['src', 'app', 'work', 'projects']);

  return (
    <Flex
      fillWidth 
      maxWidth="m"
      direction="column"
    >
      <WorkJsonLd
        title={work.title}
        description={work.description}
        authorName={person.name}
        projects={allProjects}
      />
      <Projects locale=''/>
    </Flex>
  );
}