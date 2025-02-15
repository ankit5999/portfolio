"use client";

import { useEffect, useState } from "react";

export default function ClockTime() {
    // Get current time in 12-hour format with AM/PM
    const getCurrentTime = () => {
        return new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <span suppressHydrationWarning>{time}</span>
    );
}