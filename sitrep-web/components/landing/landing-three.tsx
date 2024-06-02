"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

export const LandingThree = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white pt-20 pb-10 font-bold text-center space-y-5">
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
        </div>
        
    )
}
