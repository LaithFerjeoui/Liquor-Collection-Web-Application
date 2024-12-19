import { FocusCards } from "./ui/focus-cards";

export function Gallery() {
    const cards = [
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

    return <FocusCards cards={cards} />;
}
