"use client";

import { useEffect, useRef } from "react";
import "@/app/styles.css";

import { LandingThree } from "@/components/landing/landing-three";
import { LandingPricing } from "@/components/landing/landing-pricing";
import { AboutNavbar } from "@/components/landing/about-navbar";

const AboutPage = () => {
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        const currentSections = sectionsRef.current;
        currentSections.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            currentSections.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
        <div className="h-full">
            <div ref={(el) => { sectionsRef.current[0] = el; }} className="fade-in">
                <AboutNavbar />
            </div>
            <div ref={(el) => { sectionsRef.current[1] = el; }} className="fade-in">
                <LandingThree />
            </div>
            <div ref={(el) => { sectionsRef.current[2] = el; }} className="fade-in">
                <LandingPricing />
            </div>
        </div>
    );
}

export default AboutPage;
