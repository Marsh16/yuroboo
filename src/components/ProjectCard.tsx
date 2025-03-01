"use client";

import { AvatarGroup, Flex, Heading, SmartImage, SmartLink, Text } from "@/once-ui/components";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
    href: string;
    images: string[];
    title: string;
    content: string;
    description: string;
    avatars: { src: string }[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    href,
    images = [],
    title,
    content,
    description,
    avatars
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const t = useTranslations();

    const handleImageClick = () => {
        if (images.length > 1) {
            const nextIndex = (activeIndex + 1) % images.length;
            handleControlClick(nextIndex);
        }
    };

    const handleControlClick = (index: number) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    return (
        <SmartLink href={href} style={{ textDecoration: 'none' }}>
            <Flex
                fillWidth
                gap="m"
                direction="column"
                style={{ cursor: 'pointer' }}
            >
                {images[activeIndex] && (
                    <Flex onClick={handleImageClick}>
                        <SmartImage
                            tabIndex={0}
                            radius="l"
                            alt={title}
                            aspectRatio="4 / 3"
                            src={images[activeIndex]}
                            style={{
                                width: '100%',
                                height: '220px',
                                objectFit: 'cover',
                                border: '1px solid var(--neutral-alpha-weak)',
                                ...(images.length > 1 && {
                                    cursor: 'pointer',
                                }),
                            }}
                        />
                    </Flex>
                )}
                {images.length > 1 && (
                    <Flex
                        gap="4"
                        paddingX="s"
                        fillWidth
                        justifyContent="center"
                    >
                        {images.map((_, index) => (
                            <Flex
                                key={index}
                                onClick={() => handleControlClick(index)}
                                style={{
                                    background: activeIndex === index
                                        ? 'var(--neutral-on-background-strong)'
                                        : 'var(--neutral-alpha-medium)',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s ease',
                                }}
                                fillWidth
                                height="2"
                            />
                        ))}
                    </Flex>
                )}
                <Flex
                    direction="column"
                    fillWidth
                    paddingX="s"
                    paddingTop="8"
                    paddingBottom="16"
                    gap="s"
                    className={styles.cardContent}
                >
                    {description?.trim() && (
                        <Flex style={{ margin: "auto", marginBottom: "8px" }}>
                            <Text
                                wrap="balance"
                                variant="body-default-xl"
                                onBackground="neutral-weak"
                                style={{ color: "#624633" }}
                            >
                                {description}
                            </Text>
                        </Flex>
                    )}
                    {title && (
                        <Flex style={{ margin: "auto", marginBottom: "8px" }}>
                            <Heading
                                as="h2"
                                wrap="balance"
                                variant="heading-strong-xl"
                                style={{ color: "#624633" }}
                            >
                                {title}
                            </Heading>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </SmartLink>
    );
};