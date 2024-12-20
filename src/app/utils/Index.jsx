export const navigation = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "#about" },
    { id: 3, title: "Featured", url: "#featured" },
    { id: 4, title: "History", url: "#history" },
    { id: 6, title: "Locations", url: "#locations" },
];

export const cards = [
    {
        title: "Golden Elixir",
        src: "/img/1.jpg",
    },
    {
        title: "Ruby Reserve",
        src: "/img/2.jpg",
    },
    {
        title: "Amber Glow",
        src: "/img/3.jpg",
    },
    {
        title: "Citrus Ember",
        src: "/img/4.jpg",
    },
    {
        title: "Sunlit Spirit",
        src: "/img/5.jpg",
    },
    {
        title: "Crystal Frost",
        src: "/img/6.jpg",
    },
];

export const locations = [
    {
        name: "Downtown Spirits",
        address: ["123 Main Street", "Los Angeles, CA 90015"],
    },
    {
        name: "Gotham Brews",
        address: ["456 Elm Avenue", "New York, NY 10001"],
    },
    {
        name: "Maple Barrel",
        address: ["789 Queen Street", "Toronto, ON M5V 2T6"],
    },
    {
        name: "London Tavern",
        address: ["321 King’s Road", "London SW3 5EP"],
    },
];

export const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 25 },
    },
};

export const textVariants2 = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.2,
        },
    },
};
export const textVariants3 = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.6,
        },
    },
};
export const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100, damping: 25 },
    },
};

export const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
            delayChildren: 0.2,
        },
    },
};