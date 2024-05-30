"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>The Best AI Tool for </h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
                    Personalized Financial Information
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-stone-400">
                The Sit Rep you Deserve while you have your Morning Coffee
            </div>
            <div className="text-sm md:text-xl font-light text-stone-400">
                You are on a Mission, and We are Reporting for Duty
            </div>
            <div>
                <Link href={isSignedIn? "/dashboard" : "/sign-up"}>
                    <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                        Get Your Personalized Financial Video
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md :text-sm font-normal">
                Free Tier and Waitlist Available Now
            </div>
        </div>
    )
}