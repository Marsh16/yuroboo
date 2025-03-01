const createContent = (t) => {
    const person = {
        name: 'Yuroboo',
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
    }

    const social = [
        // Links are automatically displayed.
        // Import new icons in /once-ui/icons.ts
        {
            name: 'Line',
            icon: 'line',
            link: 'https://line.me/ti/p/7KuOuTib5B',
        },
        {
            name: 'Instagram',
            icon: 'instagram',
            link: 'https://www.instagram.com/yuro.boo/',
        },
        {
            name: 'Shopee',
            icon: 'shopee',
            link: 'https://shopee.co.id/yuro_boo',
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
            ]
        },
        studies: {
            display: true, // set to false to hide this section
            title: 'Studies',
            institutions: [

            ]
        },
        technical: {
            display: true, // set to false to hide this section
            title: t("about.technical.title"),
            skills: [
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

export { createContent };