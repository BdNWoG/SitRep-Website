"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

export const LandingTwo = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white pb-20 font-bold text-center space-y-5">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5 font-bold">
                <h1>Sit Rep: Your Personal Financial Assistant</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
                    It's Finance Made Easy
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-amber-400">
                You are on a Mission, and We are Reporting for Duty
            </div>
            <div>
                <Link href={isSignedIn? "/dashboard" : "/sign-up"}>
                    <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                        Get Your First Sit Rep Now!
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md :text-sm font-normal">
                For Free!
            </div>
        </div>
    )
}