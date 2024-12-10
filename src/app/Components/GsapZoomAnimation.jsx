"use client"
import React, { useEffect, useRef } from 'react'
import { LampDemo } from './ui/lamp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GsapZoomAnimation = () => {
    const bg1 = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: bg1.current,
                pin: bg1.current,
                start: "top top",
                pinSpacing: false,
                end: "bottom bottom",
                endTrigger: ".last"
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className='relative'>
            <div className='bg-[#0d0d0d] absolute h-screen w-screen z-[-1]' ref={bg1} />
            <div className='img-container flex items-center justify-center md:h-screen relative'>
                <div className='absolute flex flex-col items-center justify-center z-50 gap-7'>
                    <h1 className='lg:text-[170px] md:text-[120px] sm:text-[90px] text-6xl font-playfair text-neutral-300'>
                        <span className='text-stroke'>
                            Outlook
                        </span>
                        {" "}above
                    </h1>
                    <p className='text-neutral-300 font-italianno md:text-3xl text-2xl opacity-80 w-[35%] text-center'>A Showcase of the best pictures in our gallery </p>
                </div>
                <div className='relative'>
                    <img src="/img/gallery.jpg" alt="" className='image ' />
                    <div className='bg-[#0d0d0d] w-[40%] absolute inset-0 rounded-full aspect-square m-auto' />
                </div>
            </div>
            <LampDemo />
        </div>
    )
}

export default GsapZoomAnimation
