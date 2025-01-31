import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Marsha Alexis',
        lastName:  'Likorawung',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
    }

    const social = [
        // Links are automatically displayed.
        // Import new icons in /once-ui/icons.ts
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/Marsh16',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/marsha-alexis-likorawung-16b13a267/',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:marshaalexis16@gmail.com',
        },
    ]

    const home = {
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
            link: 'https://cal.com'
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true, // set to false to hide this section
            title: t("about.work.title"),
            experiences: [
                {
                    company: 'Apple Developer Academy @ UC',
                    timeframe: t("about.work.experiences.Apple Developer Academy @ UC.timeframe"),
                    role: t("about.work.experiences.Apple Developer Academy @ UC.role"),
                    achievements: t("about.work.experiences.Apple Developer Academy @ UC.achievements").split(";"),
                    images: [ // optional: leave the array empty if you don't want to display images
                        {
                            src: '/images/projects/project-01/certificate-apple.jpeg',
                            alt: 'Project',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/projects/project-01/swift.png',
                            alt: 'Swift Project',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/projects/project-01/grad.jpeg',
                            alt: 'Project',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/projects/project-01/billbro.jpeg',
                            alt: 'Project',
                            width: 16,
                            height: 9
                        }
                    ]
                },
                {
                    company: 'Teaching & Learning Innovation Center',
                    timeframe: t("about.work.experiences.Teaching & Learning Innovation Center.timeframe"),
                    role: t("about.work.experiences.Teaching & Learning Innovation Center.role"),
                    achievements: t("about.work.experiences.Teaching & Learning Innovation Center.achievements").split(";"),
                    images: [ ]
                },
                {
                    company: 'Statistics and Probability Textbooks Using the Python Programming Language',
                    timeframe: t("about.work.experiences.Statistics and Probability Textbooks Using the Python Programming Language.timeframe"),
                    role: t("about.work.experiences.Statistics and Probability Textbooks Using the Python Programming Language.role"),
                    achievements: t("about.work.experiences.Statistics and Probability Textbooks Using the Python Programming Language.achievements").split(";"),
                    images: [ ]
                },  
                {
                    company: 'Teacher Innovative Behavior Model Research',
                    timeframe: t("about.work.experiences.Teacher Innovative Behavior Model Research.timeframe"),
                    role: t("about.work.experiences.Teacher Innovative Behavior Model Research.role"),
                    achievements: t("about.work.experiences.Teacher Innovative Behavior Model Research.achievements").split(";"),
                    images: [ ]
                },    
                {
                    company: 'Biro Bebras UC',
                    timeframe: t("about.work.experiences.Biro Bebras UC.timeframe"),
                    role: t("about.work.experiences.Biro Bebras UC.role"),
                    achievements: t("about.work.experiences.Biro Bebras UC.achievements").split(";"),
                    images: [ 
                        {
                            src: '/images/projects/project-01/experiences/bebras.png',
                            alt: 'Project',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    company: 'Universitas Ciputra Surabaya',
                    timeframe: t("about.work.experiences.Universitas Ciputra Surabaya.timeframe"),
                    role: t("about.work.experiences.Universitas Ciputra Surabaya.role"),
                    achievements: t("about.work.experiences.Universitas Ciputra Surabaya.achievements").split(";"),
                    images: [ ]
                }
            ]
        },
        studies: {
            display: true, // set to false to hide this section
            title: 'Studies',
            institutions: [
                {
                    name: 'Universitas Ciputra Surabaya',
                    description: <>{t(`about.studies.institutions.Universitas Ciputra Surabaya.description`)}</>,
                }
            ]
        },
        technical: {
            display: true, // set to false to hide this section
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Python',
                    description: <>{t("about.technical.skills.Python.description")}</>,
                    images: [
                        {
                            src: '/images/projects/project-01/python.png',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: 'Swift',
                    description: <>{t("about.technical.skills.Swift.description")}</>, // "." not accepted in next-intl namespace
                    images: [
                        {
                            src: '/images/projects/project-01/swift.png',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },
            ]
        }
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }
    return {
        person,
        social,
        home,
        about,
        work,
    }
};

export { createI18nContent };