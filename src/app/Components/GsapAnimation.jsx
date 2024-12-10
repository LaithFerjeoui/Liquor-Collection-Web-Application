"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Forward the ref to the actual div in the GSAP component
const GsapAnimation = React.forwardRef((props, ref) => {
    // Destructure the refs from props to avoid passing the entire props object
    const { img_container, img } = props;

    useEffect(() => {

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ref.current,
                pin: ref.current,
                start: "top top",
                pinSpacing: false,
                end: "bottom bottom",
                endTrigger: ".last",
            });
            gsap.timeline({
                scrollTrigger: {
                    trigger: props.img_container.current,
                    pin: props.img_container.current,
                    scrub: 1,
                    start: "0% 0%",
                }
            }).to(props.img.current, { transform: "translateZ(2200px)" });
        });

        return () => ctx.revert();
    }, []);

    return <div ref={ref} />;
});

export default GsapAnimation;
