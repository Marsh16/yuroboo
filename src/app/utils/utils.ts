type Team = {
    name: string;
    role: string;
    avatar: string;
    linkedIn: string;
};

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    images: string[];
    tag?: string;
    team: Team[];
};

type Post = {
    metadata: Metadata;
    slug: string;
    content: string;
};

// Static data to replace filesystem operations
const posts: Post[] = [
    {
        metadata: {
            title: "Rp26.080 - Rp35.800",
            publishedAt: "https://s.shopee.co.id/BEuCTamfe",
            summary: "Crochet Hirono Bucket Hat",
            images: ["/images/projects/products/Crochet Hirono Bucket Hat.jpeg"],
            tag: "hirono",
            team: []
        },
        slug: "crochet-hirono-bucket-hat",
        content: "Product details content here"
    },
    {
        metadata: {
            title: "Rp. 27.200 - Rp. 38.100",
            publishedAt: "https://s.shopee.co.id/4VNtMNzqPb",
            summary: "Crochet Hirono Hats",
            images: ["/images/projects/products/Crochet hirono hats.jpeg"],
            tag: "hirono",
            team: []
        },
        slug: "crochet-hirono-hats",
        content: ""
    },
    {
        metadata: {
            title: "Rp. 81.550",
            publishedAt: "https://s.shopee.co.id/AA2G6v1m1y",
            summary: "Crochet Labubu Alien",
            images: ["/images/projects/products/Crochet Labubu Alien Costume.jpeg"],
            tag: "labubu",
            team: []
        },
        slug: "crochet-labubu-alien",
        content: ""
    },
    {
        metadata: {
            title: "Rp. 103.400",
            publishedAt: "https://s.shopee.co.id/4q0jlHvqEb",
            summary: "Crochet Labubu Red Dress",
            images: ["/images/projects/products/Crochet Labubu Red Dress.jpeg"],
            tag: "labubu",
            team: []
        },
        slug: "crochet-labubu-red-dress",
        content: ""
    },
    {
        metadata: {
            title: "Rp. 27.200",
            publishedAt: "https://s.shopee.co.id/50K9xg62i7",
            summary: "Crochet Mini Monster Pouch",
            images: ["/images/projects/products/Crochet Mino Monster Pouch.jpeg"],
            tag: "accessories",
            team: []
        },
        slug: "crochet-mini-monster-pouch",
        content: ""
    },
    {
        metadata: {
            title: "Rp. 16.400",
            publishedAt: "https://s.shopee.co.id/50K9xUxHqz",
            summary: "Crochet Pudding Keychain",
            images: ["/images/projects/products/Crochet Pudding Keychain.jpeg"],
            tag: "accessories",
            team: []
        },
        slug: "crochet-pudding-keychain",
        content: ""
    },
    {
        metadata: {
            title: "Rp. 27.200",
            publishedAt: "https://s.shopee.co.id/5Kx0MA7f58",
            summary: "Crochet Rose Headband",
            images: ["/images/projects/products/Crochet rose headband.jpeg"],
            tag: "accessories",
            team: []
        },
        slug: "crochet-rose-headband",
        content: ""
    },
    {
        metadata: {
            title: "Rp. 16.400",
            publishedAt: "https://s.shopee.co.id/5Ada9Udecb",
            summary: "Crochet Smiski Hat",
            images: ["/images/projects/products/Crochet Smiski Hat.jpeg"],
            tag: "smiski",
            team: []
        },
        slug: "crochet-smiski-hat",
        content: ""
    },
    {
        metadata: {
            title: "Rp. 54.500",
            publishedAt: "https://s.shopee.co.id/9KT9KX63Fv",
            summary: "Crochet Labubu Cape",
            images: ["/images/projects/products/Labubu Cape.jpeg"],
            tag: "labubu",
            team: []
        },
        slug: "crochet-labubu-cape",
        content: ""
    }
    // Add more posts as needed
];

export function getPosts(customPath: string[] = ['', '', '', '']): Post[] {
    return posts;
}