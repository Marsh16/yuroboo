import React, { useState, useEffect } from 'react';
import styles from './Filter.module.scss';

interface FilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

export function Filter({ categories, selectedCategory, onSelectCategory }: FilterProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filterButtons = categories.map((category) => (
        <button
            key={category}
            className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => onSelectCategory(category)}
        >
            {category}
        </button>
    ));

    if (isMobile) {
        return (
            <div className={styles.filterContainer}>
                <select
                    className={styles.filterSelect}
                    value={selectedCategory}
                    onChange={(e) => onSelectCategory(e.target.value)}
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div className={styles.filterContainer}>
            {filterButtons}
        </div>
    );
}