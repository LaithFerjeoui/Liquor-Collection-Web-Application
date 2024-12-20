import { cards } from "../utils/Index";
import { FocusCards } from "./ui/focus-cards";

export function Gallery() {
    return <FocusCards cards={cards} />;
}
