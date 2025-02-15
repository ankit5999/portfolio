"use client";

import SocialData from "@/data/social.json";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dribbble, Linkedin, Twitter, Youtube } from "lucide-react";

// Map icon names from JSON to actual Lucide React components
const iconMap: Record<string, any> = {
    Linkedin: Linkedin,
    Youtube: Youtube,
    Dribbble: Dribbble,
    Twitter: Twitter
};

export default function Social() {
    return (
        <motion.header
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed right-4 top-1/3 transform -translate-y-1/2 flex flex-col gap-4"
        >
            {SocialData.socialLinks.map(({ href, icon, label }, index) => {
                const IconComponent = iconMap[icon]; // Get the actual component
                return (
                    <Link
                        key={index}
                        href={href}
                        aria-label={label}
                        className="w-10 h-10 bg-gray-100 group hover:bg-appBrown-800 transition-colors rounded-full flex items-center justify-center"
                    >
                        {IconComponent && (
                            <IconComponent className="w-5 h-5 group-hover:text-gray-800 group-hover:animate-spin" />
                        )}
                    </Link>
                );
            })}
        </motion.header>
    );
}
