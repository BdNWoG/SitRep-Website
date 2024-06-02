"use client"

import { useEffect, useRef } from "react";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingNavbar } from "@/components/landing/landing-navbar";
import { LandingContent } from "@/components/landing/landing-content";
import { LandingTwo } from "@/components/landing/landing-two";
import "../styles.css"; // Ensure this path is correct

const LandingPage = () => {
    const sectionsRef = useRef([]);

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

        sectionsRef.current.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            if (sectionsRef.current) {
                sectionsRef.current.forEach((section) => {
                    if (section) {
                        observer.unobserve(section);
                    }
                });
            }
        };
    }, []);

    return (
        <div className="h-full">
            <div ref={(el) => sectionsRef.current[0] = el} className="fade-in">
                <LandingNavbar />
            </div>
            <div ref={(el) => sectionsRef.current[1] = el} className="fade-in">
                <LandingHero />
            </div>
            <div ref={(el) => sectionsRef.current[2] = el} className="fade-in">
                <LandingContent />
            </div>
            <div ref={(el) => sectionsRef.current[3] = el} className="fade-in">
                <LandingTwo />
            </div>
        </div>
    );
}

export default LandingPage;
