import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
  Background,
  InlineCode,
  SmartImage,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes, renderContent } from "@/app/resources";
// import { Mailchimp } from '@/components';
// import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Column } from "@/once-ui/components/Column";
import Image from "next/image";
import styles from "./Home.module.scss";
import { Span } from "next/dist/trace";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
      url: `https://${baseURL}/${locale}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { home, about, person } = renderContent(t);
  return (
    <Flex
      maxWidth="m"
      fillWidth
      gap="xl"
      direction="column"
      alignItems="center"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />

      <RevealFx translateY="4" fillWidth justifyContent="flex-start">
        <Flex
          fillWidth
          direction="row"
          radius="l-8"
          style={{
            background: `linear-gradient(30deg,  #F4D69C 50%, #C85B36 100%)`,
          }}
        >
          <Flex direction="column" fillWidth>
            <Column
              fillWidth
              alignItems="center"
              position="relative"
              style={{ margin: "auto" }}
            >
              <Flex
                direction="column"
                height={25}
                width={25}
				gap="20"
                style={{ borderRadius: "100%", background: "#8E6648" }}
              >
				<Flex
                direction="column"
                height={15}
                width={17}
                style={{margin: "auto"  }}
              >
                <Flex style={{ margin: "auto", color: "white" }}>
                  <Text
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    WELCOME
                  </Text>
                </Flex>
				<Flex style={{ margin: "auto", color: "white" }}>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur finibus varius semper. Pellentesque rhoncus sed nisl
                  vitae sollicitudin. Nullam dignissim, diam non consectetur
                  gravida, quam justo viverra nibh, ut varius massa elit eget
                  massa. Maecenas blandit enim neque, quis accumsan
                </Text>
				</Flex>
				</Flex>
              </Flex>
            </Column>
          </Flex>

          <Flex direction="column">
            <Column fillWidth alignItems="center" gap="32" position="relative">
              <Image
                src="/images/banner.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Column>
          </Flex>
        </Flex>
      </RevealFx>
      <RevealFx translateY="12" delay={0.4}>
        <Flex fillWidth direction="row" radius="l-8">
          <Flex direction="column" fillWidth style={{ margin: "auto" }}>
            <Image
              src="/images/banner.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            =
          </Flex>
          <Flex direction="column" fillWidth style={{ margin: "auto" }}>
            <Text style={{ marginBottom: "auto", color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              finibus varius semper. Pellentesque rhoncus sed nisl vitae
              sollicitudin. Nullam dignissim, diam non consectetur gravida, quam
              justo viverra nibh, ut varius massa elit eget massa. Maecenas
              blandit enim neque, quis accumsan{" "}
            </Text>
          </Flex>
        </Flex>
      </RevealFx>
      <RevealFx translateY="12" delay={0.4}>
        <Flex fillWidth direction="row" radius="l-8">
          <Flex direction="column" fillWidth style={{ margin: "auto" }}>
            <Text style={{ margin: "auto", color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              finibus varius semper. Pellentesque rhoncus sed nisl vitae
              sollicitudin. Nullam dignissim, diam non consectetur gravida, quam
              justo viverra nibh, ut varius massa elit eget massa. Maecenas
              blandit enim neque, quis accumsan{" "}
            </Text>
          </Flex>
          <Flex direction="column" fillWidth style={{ margin: "auto" }}>
            <Image
              src="/images/banner.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Flex>
        </Flex>
      </RevealFx>
    </Flex>
  );
}
