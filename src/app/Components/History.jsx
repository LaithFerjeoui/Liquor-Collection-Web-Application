import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Container from './Container'
import Image from 'next/image'

export default function History() {
    return (
        (
            <Container>
                <Image
                    src={"/img/ornament.png"}
                    width={200}
                    height={200}
                    alt="ornament"
                    className="absolute -right-0 z-[9999] -top-14 block lg:hidden transform scale-x-[-1]"
                />
                <div className="relative isolate overflow-hidden mt-36 lg:overflow-visible " id='history'>
                    <Image
                        src={"/img/ornament.png"}
                        width={200}
                        height={200}
                        alt="ornament"
                        className="absolute -top-20 -left-10 hidden lg:block"
                    />
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 font-playfair">
                        {/* Text Section */}
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg">
                                    <p className="text-base font-semibold text-amber-500">A Legacy of Craftsmanship</p>
                                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                        The History of Wine &amp; Liquor
                                    </h1>
                                    <p className="mt-6 text-lg text-gray-300">
                                        The origins of wine and liquor span centuries, shaped by culture, innovation, and artistry. These beverages have left an indelible mark on human history, offering a taste of tradition and creativity in every sip.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <img
                                alt="Wine and liquor history"
                                src="/img/history.jpg"
                                className="w-[48rem] max-w-none rounded-xl shadow-lg ring-1 ring-amber-500/20 sm:w-[57rem]"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-xl text-base text-gray-300 lg:max-w-lg">
                                    <p>
                                        Archaeological discoveries trace wine&apos;s roots back over 8,000 years to the ancient vineyards of the Caucasus region. Similarly, early distillation methods appeared in the Middle Ages, giving birth to modern spirits. These innovations were driven by both necessity and curiosity, blending scientific advancement with artistry.
                                    </p>
                                    <ul role="list" className="mt-8 space-y-8">
                                        <li className="flex gap-x-3">
                                            <span>
                                                <strong className="font-semibold text-white">Ancient Innovations.</strong> Early civilizations in Mesopotamia, Egypt, and Greece elevated winemaking to an art form, pairing it with religious and cultural practices.
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <span>
                                                <strong className="font-semibold text-white">The Science of Spirits.</strong> The development of distillation in the Islamic Golden Age paved the way for whiskey, rum, gin, and other beloved liquors.
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <span>
                                                <strong className="font-semibold text-white">Global Traditions.</strong> From the celebrated vineyards of Bordeaux to the distilleries of Scotland, each culture brings its own identity to wine and spirits.
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8">
                                        Over time, wine and liquor evolved from humble beginnings into global icons of culture and celebration. They are a testament to human ingenuity, blending science, art, and tradition into unforgettable experiences.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">A Timeless Craft</h2>
                                    <p className="mt-6">
                                        From aging techniques in oak barrels to cutting-edge fermentation methods, winemakers and distillers continue to innovate. These practices honor age-old traditions while meeting the demands of modern palates.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    )
}
