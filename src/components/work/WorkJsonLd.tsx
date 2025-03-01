import { baseURL } from '@/app/resources';

interface WorkJsonLdProps {
  title: string;
  description: string;
  authorName: string;
  projects: any[];
}

export function WorkJsonLd({ title, description, authorName, projects }: WorkJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          headline: title,
          description: description,
          url: `https://${baseURL}/projects`,
          image: `${baseURL}/og?title=Design%20Projects`,
          author: {
            '@type': 'Person',
            name: authorName,
          },
          hasPart: projects.map(project => ({
            '@type': 'CreativeWork',
            headline: project.metadata.title,
            description: project.metadata.summary,
            url: `https://${baseURL}/projects/${project.slug}`,
            image: `${baseURL}/${project.metadata.image}`,
          })),
        }),
      }}
    />
  );
}