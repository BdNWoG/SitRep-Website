"use client";

import * as z from "zod";
import { Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";

const LatestPage = () => {
    const router = useRouter();
    const { dayOfWeek, month, date } = getCurrentDateInfo();

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
                        {`This is your latest Sit Rep for today, ${dayOfWeek}, ${month} ${date}, 2024`}
                    </h2>
                    <div className="flex justify-center">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                width="960"
                                height="540"
                                src="https://www.youtube.com/embed/-XvvXWwBKXM"
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

export default LatestPage;

const getCurrentDateInfo = () => {
    const currentDate = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];
    const date = currentDate.getDate();

    return { dayOfWeek, month, date };
};