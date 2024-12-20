import Image from "next/image";
import Container from "./Container";

export default function Locations() {
    return (
        <Container>
            <div className=" py-24 sm:py-32" id="locations">
                <Image
                    src={"/img/ornament.png"}
                    width={200}
                    height={200}
                    alt="ornament"
                    className="absolute right-24 z-[9999] top-20 hidden lg:block transform scale-x-[-1]"
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-white">Our Liquor Bars</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Experience the finest collection of liquors at our bars. Each location offers a unique ambiance, world-class service, and exclusive drinks for all tastes.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        <div>
                            <h3 className="border-l border-yellow-400 pl-6 font-semibold text-white">Downtown Spirits</h3>
                            <address className="border-l border-gray-700 pl-6 pt-2 not-italic text-gray-400">
                                <p>123 Main Street</p>
                                <p>Los Angeles, CA 90015</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-yellow-400 pl-6 font-semibold text-white">Gotham Brews</h3>
                            <address className="border-l border-gray-700 pl-6 pt-2 not-italic text-gray-400">
                                <p>456 Elm Avenue</p>
                                <p>New York, NY 10001</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-yellow-400 pl-6 font-semibold text-white">Maple Barrel</h3>
                            <address className="border-l border-gray-700 pl-6 pt-2 not-italic text-gray-400">
                                <p>789 Queen Street</p>
                                <p>Toronto, ON M5V 2T6</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="border-l border-yellow-400 pl-6 font-semibold text-white">London Tavern</h3>
                            <address className="border-l border-gray-700 pl-6 pt-2 not-italic text-gray-400">
                                <p>321 King’s Road</p>
                                <p>London SW3 5EP</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
