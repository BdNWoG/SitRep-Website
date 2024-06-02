"use client";

import * as z from "zod";
import { Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";

const LatestPage = () => {
    const router = useRouter();

    return (
        <div>
            <Heading
                title="Latest" description="This is the conversation page for the AI." 
                icon={Newspaper} iconColor="text-orange-500" bgColor="bg-orange-500/10"/>
            <div className="px-4 lg:px-8">
                <div className="text-muted-foreground text-sm">
                    This is the conversation page for the AI. 
                </div>
            </div>
        </div>
    )
}

export default LatestPage;