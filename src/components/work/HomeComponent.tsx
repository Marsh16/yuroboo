"use client";
import React, { useState, useEffect } from "react";
import { Flex, Text, RevealFx, SmartImage } from "@/once-ui/components";
import { Column } from "@/once-ui/components/Column";
import Image from "next/image";
import styles from "./Home.module.scss";

interface HomeProps {
  home: any;
  person: any;
}

export default function HomeComponent({ home, person }: HomeProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              url: `https://${"baseURL"}`,
              image: `${"baseURL"}/og?title=${encodeURIComponent(home.title)}`,
              publisher: {
                "@type": "Person",
                name: person.name,
                image: {
                  "@type": "ImageObject",
                  url: `${"baseURL"}${person.avatar}`,
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
            style={isMobile ? {paddingTop:"30px",textAlign: "center", flexDirection: "column", alignItems: "center", background: `linear-gradient(30deg,  #F4D69C 50%, #C85B36 100%)` } : { background: `linear-gradient(30deg,  #F4D69C 50%, #C85B36 100%)`}}
          >
            {!isMobile && (
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
                    style={{
                      borderRadius: "100%",
                      background: "#8E6648",
                      margin: "auto",
                      color: "white",
                    }}
                  >
                    <Flex
                      direction="column"
                      width={17}
                      style={{ margin: "auto" }}
                    >
                      <Flex>
                        <Text
                          style={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                          }}
                        >
                          WELCOME
                        </Text>
                      </Flex>
                      <Flex>
                        <Text>
                          Handmade with love, just for your little companions.
                          Welcome to our shop filled with charming crochet
                          accessories designed to fit Labubu, Smiski, and Hirono
                          perfectly. Each piece is crafted with care and
                          attention to detail. Our collection includes a variety
                          of styles and colors, ensuring that you will find the
                          perfect accessory to match your toy's personality.
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Column>
              </Flex>
            )}
            {isMobile && (
              <Flex direction="column" className={styles.show}>
                <Column
                  fillWidth
                  alignItems="center"
                  style={isMobile ? { textAlign: "left", background: "none", color: "#624633",
                    display: "flex",
                    gap: "30px",
                    alignItems: "flex-start",
                    margin: "auto"
                  } : {margin: "auto", paddingTop: "60px"}}
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
                  >
                    <Flex direction="column">
                      <Flex>
                        <Text
                          style={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#624633",
                            paddingLeft: "20px",
                          }}
                        >
                          WELCOME
                        </Text>
                      </Flex>
                      <Flex>
                        <Text
                          style={{
                            color: "#624633",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                          }}
                        >
                          Handmade with love, just for your little companions.
                          Welcome to our shop filled with charming crochet
                          accessories designed to fit Labubu, Smiski, and Hirono
                          perfectly. Each piece is crafted with care and
                          attention to detail. Our collection includes a variety
                          of styles and colors, ensuring that you will find the
                          perfect accessory to match your toy's personality.
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Column>
              </Flex>
            )}
            {!isMobile && (
              <Flex direction="column" className={styles.hidden}>
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
            )}
          </Flex>
        </RevealFx>
        <RevealFx translateY="12" delay={0.4} style={isMobile ? {    textAlign: "center", flexDirection: "column", alignItems: "center" } : {}}>
          <Flex
            fillWidth
            direction="row"
            radius="l-8" style={isMobile ? {    textAlign: "center", flexDirection: "column", alignItems: "center" } : {}}
            className={styles.mobile}
          >
            <Flex
              direction="column"
              fillWidth
              style={isMobile ? {    textAlign: "center", flexDirection: "column", alignItems: "center" } : { margin: "auto" }}
            >
              <SmartImage
                tabIndex={0}
                radius="l"
                alt="Picture of the author"
                aspectRatio="4 / 3"
                src="/images/projects/products/Crochet Labubu Alien Costume.jpeg"
                style={{
                  width: 500,
                  height: 500,
                  objectFit: "cover",
                  border: "1px solid var(--neutral-alpha-weak)",
                  cursor: "pointer",
                }}
              />
            </Flex>
            <Flex
              direction="column"
              fillWidth
              style={isMobile ? {    textAlign: "center", flexDirection: "column", alignItems: "center" } : { margin: "auto" }}
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
                className={styles.line}
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
        <RevealFx translateY="12" delay={0.4} style={isMobile ? {    textAlign: "center", flexDirection: "column", alignItems: "center" } : {}}>
          <Flex
            fillWidth
            direction="row"
            radius="l-8"
            style={isMobile ? {    textAlign: "center", flexDirection: "column", alignItems: "center" } : {}}
                      >
          {!isMobile && (
            <Flex
              direction="column"
              fillWidth
              style={isMobile ? {    textAlign: "center", flexDirection: "column", alignItems: "center" } : { margin: "auto" }}
              className={styles.hidden}
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
                className={styles.line}
                style={{
                  margin: "auto",
                  paddingTop: "20px",
                  paddingInline: "20px",
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
          )}
            <Flex
              direction="column"
              fillWidth
              style={isMobile ? {    textAlign: "center", flexDirection: "column", alignItems: "center" } : { margin: "auto" }}
            >
              <SmartImage
                tabIndex={0}
                radius="l"
                alt="Picture of the author"
                aspectRatio="4 / 3"
                src="/images/projects/products/Labubu Cape.jpeg"
                style={{
                  width: 500,
                  height: 500,
                  objectFit: "cover",
                  border: "1px solid var(--neutral-alpha-weak)",
                  cursor: "pointer",
                }}
              />
            </Flex>
            {isMobile && (
            <Flex
              direction="column"
              fillWidth
              style={isMobile ? {    textAlign: "center", flexDirection: "column", alignItems: "center" } : { margin: "auto", paddingTop: "20px"}}
              className={styles.show}
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
                className={styles.line}
                style={{
                  margin: "auto",
                  padding: "20px",
                  color: "#624633",
                  textAlign: "end",
                  marginBottom: "20px",
                }}
              ></Flex>
              <Text
                style={isMobile ? {    textAlign: "center", flexDirection: "column", alignItems: "center",
                  margin: "auto",
                  paddingTop: "20px",
                  paddingInline: "20px",
                  color: "#624633",
                } : { 
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
            )}
          </Flex>
        </RevealFx>
      </Flex>
    </Flex>
  );
}
