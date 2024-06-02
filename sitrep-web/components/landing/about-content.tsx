"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

export const AboutContent = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white pt-10 pb-20 font-bold text-center space-y-5">
            <div className="text-lg text-white font-bold items-center">
                Simply import your portfolio and configure your interest settings and <br/>
                save hours of work on looking up and researching different sources
            </div>
            <h2 className="text-center pt-10 text-3xl text-yellow-300 font-bold mb-10">
                Have your Personal News Media Working for You!
            </h2>
        </div>
        
    )
}
