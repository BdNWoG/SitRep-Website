"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const testimonials = [
    {
        name: "Alex",
        avatar: "A",
        title: "Software Engineer",
        description: "This is the BEST application I've ever used for development!"
    }, 
    {
        name: "Benjamin",
        avatar: "B",
        title: "CEO",
        description: "This 4Xed my productivity"
    }, 
    {
        name: "Charlie",
        avatar: "C",
        title: "Content Creator",
        description: "I have been using Sirius for the past 2 months and I can't imagine my life without it!"
    }, 
    {
        name: "David",
        avatar: "D",
        title: "Student",
        description: "Definitely worth the price"
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                About
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}