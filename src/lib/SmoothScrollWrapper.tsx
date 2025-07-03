import React, { useEffect, useRef } from "react";
import type { PropsWithChildren } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// @ts-ignore
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScrollWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id="smooth-wrapper" className="overflow-hidden">
            <div id="smooth-content" ref={contentRef}>
                {children}
            </div>
        </div>
    );
};

export default SmoothScrollWrapper;
