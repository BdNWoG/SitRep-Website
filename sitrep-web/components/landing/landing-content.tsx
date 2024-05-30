"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const testimonials = [
    {
        name: "Scours Internet for Daily Financial News",
        description: "Sit Rep: We check all available information, including news, social media, and more! Saving you time, so you can finally decipher your boss’s latest email!"
    }, 
    {
        name: "Generates Personalized Financial Insights",
        description: "Sit Rep understands your personal financial situation and reports to you the information you need! So accurate, it’s like it has insider trading tips (but legal)!"
    }, 
    {
        name: "Produces Video & Report",
        description: "Sit Rep produces its report as a video, allowing you to get the latest news on your way to work or while you have your morning coffee. Because sipping coffee and reading is just too much effort!"
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-10">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                What Does Sit Rep Do?
            </h2>
            <div className="grid grid-cols-3 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#15223c] border-none text-white font-bold">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-xl">{item.name}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0 text-amber-500 text-md flex justify-between items-center">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}