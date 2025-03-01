import React from "react";
import {
  Flex,
  Text,
  RevealFx,
} from "@/once-ui/components";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations } from "next-intl/server";
import { Column } from "@/once-ui/components/Column";
import Image from "next/image";
import homeStyles from "./Home.module.scss";

type PageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

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

export default async function Home() {
  const t = await getTranslations();
  const { home, person } = renderContent(t);

  return (
    <Flex style={{ overflow: "hidden" }}>
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
            className={homeStyles.mobile}
          >
            <Flex direction="column" fillWidth className={homeStyles.hidden}>
              <Column
                fillWidth
                alignItems="center"
                position="relative"
                style={{ margin: "auto" }}
                className={homeStyles.hidden}
              >
                <Flex
                  direction="column"
                  height={25}
                  width={25}
                  gap="20"
                  style={{
                    borderRadius: "100%",
                    background: "#8E6648",
                    margin: "auto",
                    color: "white",
                  }}
                  className={homeStyles.hidden}
                >
                  <Flex
                    direction="column"
                    height={15}
                    width={17}
                    style={{ margin: "auto" }}
                    className={homeStyles.hidden}
                  >
                    <Flex>
                      <Text
                        style={{
                          fontSize: "2rem",
                          fontWeight: "bold",
                        }}
                        className={homeStyles.hidden}
                      >
                        WELCOME
                      </Text>
                    </Flex>
                    <Flex>
                      <Text className={homeStyles.hidden}>
                        Handmade with love, just for your little companions.
                        Welcome to our shop filled with charming crochet
                        accessories designed to fit Labubu, Smiski, and Hirono
                        perfectly. Each piece is crafted with care and attention
                        to detail. Our collection includes a variety of styles
                        and colors, ensuring that you will find the perfect
                        accessory to match your toy's personality.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Column>
            </Flex>
            <Flex direction="column" className={homeStyles.show}>
              <Column
                fillWidth
                alignItems="center"
                style={{ margin: "auto" }}
                className={homeStyles.mobileCircle}
              >
                <Flex
                  direction="column"
                  height={25}
                  width={25}
                  gap="20"
                  style={{
                    margin: "auto",
                    color: "white",
                  }}
                  className={homeStyles.mobileCircle}
                >
                  <Flex
                    direction="column"
                    height={15}
                    width={17}
                    style={{ margin: "auto" }}
                    className={homeStyles.mobileCircle}
                  >
                    <Flex>
                      <Text
                        style={{
                          fontSize: "2rem",
                          fontWeight: "bold",
                          color: "#624633",
                        }}
                      >
                        WELCOME
                      </Text>
                    </Flex>
                    <Flex className={homeStyles.mobileCircle}>
                      <Text style={{ color: "#624633" }}>
                        Handmade with love, just for your little companions.
                        Welcome to our shop filled with charming crochet
                        accessories designed to fit Labubu, Smiski, and Hirono
                        perfectly. Each piece is crafted with care and attention
                        to detail. Our collection includes a variety of styles
                        and colors, ensuring that you will find the perfect
                        accessory to match your toy's personality.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Column>
            </Flex>

            <Flex direction="column" className={homeStyles.hidden}>
              <Column
                fillWidth
                alignItems="center"
                gap="32"
                position="relative"
              >
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
        <RevealFx translateY="12" delay={0.4} className={homeStyles.mobile}>
          <Flex
            fillWidth
            direction="row"
            radius="l-8"
            className={homeStyles.mobile}
          >
            <Flex
              direction="column"
              className={homeStyles.mobile}
              fillWidth
              style={{ margin: "auto" }}
            >
              <Image
                src="/images/projects/products/Crochet Labubu Alien Costume.jpeg"
                width={500}
                height={500}
                alt="Picture of the author"
                style={{ borderRadius: "20px" }}
              />
            </Flex>
            <Flex
              direction="column"
              fillWidth
              style={{ margin: "auto" }}
              className={homeStyles.mobile}
            >
              <Text
                style={{
                  marginBottom: "auto",
                  padding: "20px",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#624633",
                }}
              >
                Dress Up Your Crew
              </Text>
              <Flex
                className={homeStyles.line}
                style={{
                  margin: "auto",
                  padding: "20px",
                  color: "#624633",
                }}
              ></Flex>
              <Text
                style={{
                  marginBottom: "auto",
                  padding: "20px",
                  color: "#624633",
                }}
              >
                Is your Labubu feeling a little bare? Does your Smiski need a
                touch of flair? Or maybe your Hirono is craving a pop of color?
                Look no further! Our extensive collection of crochet accessories
                offers endless possibilities for dressing up your favorite vinyl
                toys. Explore a rainbow of colors, textures, and designs, from
                cozy beanies and stylish scarves to elegant dresses and playful
                capes. Each piece is lovingly handcrafted with high-quality yarn
                and designed for a perfect fit.{" "}
              </Text>
            </Flex>
          </Flex>
        </RevealFx>
        <RevealFx translateY="12" delay={0.4} className={homeStyles.mobile}>
          <Flex
            fillWidth
            direction="row"
            radius="l-8"
            className={homeStyles.mobile}
          >
            <Flex
              direction="column"
              fillWidth
              style={{ margin: "auto"}}
              className={homeStyles.hidden}
            >
              <Text
                style={{
                  marginBottom: "auto",
                  padding: "20px",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#624633",
                  textAlign: "end",
                }}
              >
                Unleash Your Creativity
              </Text>
              <Flex
                className={homeStyles.line}
                style={{
                  margin: "auto",
                  padding: "20px",
                  color: "#624633",
                  textAlign: "end",
                }}
              ></Flex>
              <Text
                style={{
                  margin: "auto",
                  padding: "20px",
                  color: "#624633",
                  textAlign: "end",
                }}
              >
                Have a specific color in mind? Dreaming of a unique design? We
                love bringing your crochet accessory ideas to life! Our custom
                crochet service allows you to create the perfect pieces for your
                Labubu, Smiski, or Hirono. Whether you want to match your own
                style, create a themed outfit, or simply add a personal touch,
                we'll work with you every step of the way.{" "}
              </Text>
            </Flex>
            <Flex
              direction="column"
              fillWidth
              style={{ margin: "auto" }}
              className={homeStyles.image}
            >
              <Image
                src="/images/projects/products/Labubu Cape.jpeg"
                width={500}
                height={500}
                alt="Picture of the author"
                style={{ borderRadius: "20px" }}
              />
            </Flex>
            <Flex
              direction="column"
              fillWidth
              style={{ margin: "auto", paddingTop: "20px" }}
              className={homeStyles.show}
            >
              <Text
                style={{
                  marginBottom: "auto",
                  padding: "20px",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#624633",
                  textAlign: "end",
                }}
              >
                Unleash Your Creativity
              </Text>
              <Flex
                className={homeStyles.line}
                style={{
                  margin: "auto",
                  padding: "20px",
                  color: "#624633",
                  textAlign: "end",
                }}
              ></Flex>
              <Text
                style={{
                  margin: "auto",
                  padding: "20px",
                  color: "#624633",
                  textAlign: "end",
                  paddingTop: "20px",
                }}
              >
                Have a specific color in mind? Dreaming of a unique design? We
                love bringing your crochet accessory ideas to life! Our custom
                crochet service allows you to create the perfect pieces for your
                Labubu, Smiski, or Hirono. Whether you want to match your own
                style, create a themed outfit, or simply add a personal touch,
                we'll work with you every step of the way.{" "}
              </Text>
            </Flex>
          </Flex>
        </RevealFx>
      </Flex>
    </Flex>
  );
}