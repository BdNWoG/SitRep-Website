"use client";

import * as z from "zod";
import { Calendar, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";

const PastPage = () => {
    const router = useRouter();

    return (
        <div>
            <Heading
                title="Past" description="This is the conversation page for the AI." 
                icon={Calendar} iconColor="text-purple-700" bgColor="bg-purple-700/10"/>
            <div className="px-4 lg:px-8">
                <div className="text-muted-foreground text-sm">
                    This is the conversation page for the AI. 
                </div>
            </div>
        </div>
    )
}

export default PastPage;