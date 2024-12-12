import { FocusCards } from "./ui/focus-cards";
export function Gallery() {
    const cards = [
        {
            title: "Forest Adventure",
            src: "/img/1.jpg",
        },
        {
            title: "Valley of life",
            src: "/img/2.jpg",
        },
        {
            title: "Sala behta hi jayega",
            src: "/img/3.jpg",
        },
        {
            title: "Camping is for pros",
            src: "/img/4.jpg",
        },
        {
            title: "The road not taken",
            src: "/img/5.jpg",
        },
        {
            title: "The First Rule",
            src: "/img/6.jpg",
        },
    ];

    return <FocusCards cards={cards} />;
}
