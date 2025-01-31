"use client";

import { useParams } from "next/navigation";

import { Flex, Logo, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";

import { usePathname, useRouter } from "@/i18n/routing";
import { renderContent } from "@/app/resources";
import { useTranslations } from "next-intl";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname() ?? "";
  const params = useParams();
  const t = useTranslations();
  const { home, work } = renderContent(t);

  return (
    <>
      <Flex
        className={styles.mask}
        position="fixed"
        zIndex={9}
        fillWidth
        minHeight="80"
        justifyContent="center"
      ></Flex>
      <Flex
        style={{ height: "fit-content" }}
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        justifyContent="center"
      >
        <Flex
          paddingLeft="12"
          fillWidth
          alignItems="center"
          textVariant="body-default-s"
        >
          {display.location && (
            <Flex hide="s">
              <Logo size="xl" wordmarkSrc="/images/logo.png" href="/" />
            </Flex>
          )}
        </Flex>
        <Flex fillWidth justifyContent="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            justifyContent="center"
          >
            <Flex gap="4" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href={`/${params?.locale}`}
                  selected={pathname === "/"}
                >
                  <Flex paddingX="2" hide="s">
                    {home.label}
                  </Flex>
                </ToggleButton>
              )}
              {routes["/work"] && (
                <ToggleButton
                  prefixIcon="grid"
                  href={`/${params?.locale}/work`}
                  selected={pathname.startsWith("/work")}
                >
                  <Flex paddingX="2" hide="s">
                    {work.label}
                  </Flex>
                </ToggleButton>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth justifyContent="flex-end" alignItems="center">
          <Flex
            paddingRight="12"
            justifyContent="flex-end"
            alignItems="center"
            textVariant="body-default-s"
            gap="20"
          ></Flex>
        </Flex>
      </Flex>
    </>
  );
};
