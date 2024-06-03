"use client";

import * as z from "zod";
import { Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";

const NineteenPage = () => {
    const router = useRouter();

    return (
        <div>
            <Heading
                title="Latest" 
                description="The newest sit rep for today!" 
                icon={Newspaper} 
                iconColor="text-orange-500" 
                bgColor="bg-orange-500/10" 
            />
            <div className="px-4 lg:px-8">
                <div className="text-muted-foreground text-sm">
                    <h2 className="text-xl font-bold text-black pb-10">
                        {`This is your Sit Rep for Sunday, May 19, 2024`}
                    </h2>
                    <div className="flex justify-center">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                width="960"
                                height="540"
                                src="https://www.youtube.com/embed/S28SAhhA4XU"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NineteenPage;