"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button} from "../ui/button";

const font = Montserrat({weight:"600", subsets:["latin"]});

export const AboutNavbar = () => {
    const { isSignedIn } = useAuth();  

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative w-8 h-8 mr-4">
                    <Image fill alt="Logo" src="/SitRepLogo.jpg"/> 
                </div>
                <h1 className={cn("text-2xl font-bold text-white ", font.className)}>
                    Sit Rep
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href="/">
                    <h1 className="text-xl font-bold text-white underline">
                        Home
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className="rounded-full">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}