"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

export const LandingThree = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white pt-10 pb-20 font-bold text-center space-y-5">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
                <h1>At Sit Rep, we Understand that</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
                    Your Time is Money
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-amber-400">
                Keep yourself informed and capitalize on the latest trends! <br/>
                Start each day with a Bang!
            </div>
            <div className="text-lg text-amber-500 font-bold items-center">
                Simply import your portfolio and configure your interest settings and <br/>
                save hours of work on looking up and researching different sources
            </div>
            <h2 className="text-center pt-10 text-3xl text-yellow-300 font-bold mb-10">
                Have your Personal News Media Working for You!
            </h2>
        </div>
        
    )
}
