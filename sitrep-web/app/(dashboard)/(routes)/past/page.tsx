"use client";

import * as React from "react";
import { useState } from "react";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/heading";

// Function to generate an array of days for a given month and year
const generateCalendarDays = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let day = 1; day <= daysInMonth; day++) {
        days.push(new Date(year, month, day));
    }

    return days;
};

const PastPage = () => {
    const router = useRouter();
    const today = new Date();
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());

    const days = generateCalendarDays(currentYear, currentMonth);

    const handleDayClick = (day: Date) => {
        const formattedDate = day.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        router.push(`/date/${formattedDate}`);
    };

    const handlePreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const isDateDisabled = (day: Date) => {
        const may15th = new Date(2024, 4, 15); // Year 2024, Month 4 (May), Day 15
        return day < may15th || day > today;
    };

    return (
        <div>
            <Heading
                title="Past" 
                description="The following are the past Sit Reps generated." 
                icon={Calendar} 
                iconColor="text-purple-700" 
                bgColor="bg-purple-700/10"
            />
            <div className="px-4 lg:px-8">
                <div className="text-muted-foreground text-sm">
                    <div className="flex justify-between items-center mb-4">
                        <button onClick={handlePreviousMonth} className="p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                            Previous
                        </button>
                        <h2 className="text-lg font-semibold">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
                        <button onClick={handleNextMonth} className="p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                            Next
                        </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 mb-2">
                        {daysOfWeek.map((day) => (
                            <div key={day} className="text-center font-semibold">{day}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                        {days.map((day) => (
                            <button
                                key={day.toISOString()}
                                onClick={() => handleDayClick(day)}
                                className={`p-2 border rounded ${isDateDisabled(day) ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-purple-100'}`}
                                disabled={isDateDisabled(day)}
                            >
                                {day.getDate()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PastPage;
