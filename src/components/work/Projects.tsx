'use client'; 
import React, { useState, useEffect } from 'react';
import { getPosts } from '@/app/utils/utils';
import { Flex } from '@/once-ui/components';
import { ProjectCard } from '@/components';
import { Filter } from './Filter';
import styles from "./Projects.module.scss";

interface ProjectsProps {
    range?: [number, number?];
}

const categories = ['All', 'Labubu', 'Hirono', 'Smiski', 'Accessories'];

export function Projects({ range }: ProjectsProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All'); // Default to 'all'
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let allProjects = getPosts(['src', 'app', '[locale]', 'work', 'projects']);

    const sortedProjects = allProjects.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const filteredProjects = sortedProjects.filter((project) => {
        if (selectedCategory === "All") {
            return true; // Include all projects when 'all' is selected
        } else {
            return project.metadata.tag === selectedCategory.toLowerCase(); // Filter by tag otherwise
        }
    });

    const displayedProjects = range
        ? filteredProjects.slice(range[0] - 1, range[1] ?? filteredProjects.length)
        : filteredProjects;

    return (
        <>
            <Filter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />
            <Flex fillWidth marginBottom="40" justifyContent={isMobile ? 'center' : 'flex-start'}>
                <Flex className={styles.projectsContainer} justifyContent={isMobile ? 'center' : 'flex-start'}>
                    {displayedProjects.map((post) => (
                        <Flex className={styles.projectCard} key={post.slug} justifyContent="center">
                            <ProjectCard
                                href={post.metadata.publishedAt}
                                images={post.metadata.images}
                                title={post.metadata.title}
                                description={post.metadata.summary}
                                content={post.content}
                                avatars={
                                    post.metadata.team?.map((member) => ({ src: member.avatar })) || []
                                }
                            />
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </>
    );
}