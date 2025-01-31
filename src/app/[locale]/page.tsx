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
//   InlineCode,
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
      className={styles.mobile}
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

      <RevealFx
        translateY="4"
        fillWidth
        justifyContent="flex-start"
        className={styles.mobile}
      >
        <Flex
          fillWidth
          direction="row"
          radius="l-8"
          style={{
            background: `linear-gradient(30deg,  #F4D69C 50%, #C85B36 100%)`,
          }}
          className={styles.mobile}
        >
          <Flex direction="column" fillWidth className={styles.mobile}>
            <Column
              fillWidth
              alignItems="center"
              position="relative"
              style={{ margin: "auto" }}
              className={styles.mobile}
            >
              <Flex
                direction="column"
                height={25}
                width={25}
                gap="20"
                style={{  borderRadius: "100%",
                  background: "#8E6648",
                  margin: "auto",
                  color: "white", 
                  alignItems: "center"}}
                className={styles.mobileCircle}
              >
                <Flex
                  direction="column"
                  height={15}
                  width={17}
                  style={{ margin: "auto" }}
                  className={styles.mobile}
                >
                  <Flex
                    className={styles.mobile}
                  >
                    <Text
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                      }}
                    >
                      WELCOME
                    </Text>
                  </Flex>
                  <Flex
                    className={styles.mobile}
                  >
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur finibus varius semper. Pellentesque rhoncus sed
                      nisl vitae sollicitudin. Nullam dignissim, diam non
                      consectetur gravida, quam justo viverra nibh, ut varius
                      massa elit eget massa. Maecenas blandit enim neque, quis
                      accumsan
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Column>
          </Flex>

          <Flex direction="column" className={styles.hidden}>
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
      <RevealFx translateY="12" delay={0.4} className={styles.mobile}>
        <Flex fillWidth direction="row" radius="l-8" className={styles.mobile}>
          <Flex
            direction="column"
            className={styles.mobile}
            fillWidth
            style={{ margin: "auto" }}
          >
            <Image
              src="/images/banner.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            =
          </Flex>
          <Flex
            direction="column"
            fillWidth
            style={{ margin: "auto" }}
            className={styles.mobile}
          >
            <Text
              style={{ marginBottom: "auto", padding: "20px" ,color: "#624633"}}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              finibus varius semper. Pellentesque rhoncus sed nisl vitae
              sollicitudin. Nullam dignissim, diam non consectetur gravida, quam
              justo viverra nibh, ut varius massa elit eget massa. Maecenas
              blandit enim neque, quis accumsan
            </Text>
          </Flex>
        </Flex>
      </RevealFx>
      <RevealFx translateY="12" delay={0.4} className={styles.mobile}>
        <Flex fillWidth direction="row" radius="l-8" className={styles.mobile}>
          <Flex
            direction="column"
            fillWidth
            style={{ margin: "auto" }}
            className={styles.hidden}
          >
            <Text style={{ margin: "auto", padding: "20px" , color: "#624633"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              finibus varius semper. Pellentesque rhoncus sed nisl vitae
              sollicitudin. Nullam dignissim, diam non consectetur gravida, quam
              justo viverra nibh, ut varius massa elit eget massa. Maecenas
              blandit enim neque, quis accumsan
            </Text>
          </Flex>
          <Flex
            direction="column"
            fillWidth
            style={{ margin: "auto" }}
            className={styles.image}
          >
            <Image
              src="/images/banner.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Flex>
          <Flex
            direction="column"
            fillWidth
            style={{ margin: "auto", paddingTop: "20px" }}
            className={styles.show}
          >
            <Text style={{ margin: "auto", padding: "20px" ,color: "#624633"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              finibus varius semper. Pellentesque rhoncus sed nisl vitae
              sollicitudin. Nullam dignissim, diam non consectetur gravida, quam
              justo viverra nibh, ut varius massa elit eget massa. Maecenas
              blandit enim neque, quis accumsan
            </Text>
          </Flex>
        </Flex>
      </RevealFx>
    </Flex>
  );
  }

