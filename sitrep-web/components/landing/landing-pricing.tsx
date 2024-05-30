"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const testimonials = [
    {
        name: "Private",
        title: "Free Plan for All!",
        description: "Covers all markets and world news with 2 minutes of daily general financial information!"
    },
    {
        name: "Sergeant",
        title: "$25 per month.",
        description: "This plan goes in depth with 10 minutes of daily specific market information based on the portfolio companies you care about and regions you monitor."
    }, 
    {
        name: "General",
        title: "$80 per month.",
        description: "This plan provides 25 minutes of daily financial information, containing everything in Sergeant. It goes into the details of your portfolio with the addition of personalized analysis and recommendation. General tracks users financial tendencies and provides specific information for each user, guaranteeing that your report would be unique."
    }
]

export const LandingPricing = () => {
    return (
        <div className="px-10 pb-10">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Sit Rep Ranks
            </h2>
            <div className="grid grid-cols-1 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#15223c] border-none text-white font-bold">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-xl">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
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