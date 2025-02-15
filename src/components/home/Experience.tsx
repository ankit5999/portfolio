"use client";

import HomeData from "@/data/home.json";
import { HomeTypes } from "@/types/home";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Ribbon, Trophy } from "lucide-react";
import Image from "next/image";

// Define icon mapping with explicit type annotation
const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = { Ribbon, Award, Trophy };


export default function Experience() {
    const SectionData = HomeData.experience_section;
    return (
        <motion.section
            id="experience_section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }} className="py-20 bg-appBrown-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl leading-[1.2] font-medium mb-8">{SectionData.experienceItems.h3}</h3> 
                        <div className="space-y-8">
                            {SectionData.experienceItems.items.map(({ company, role, date, icon }, index) => (
                                <ExperienceItem key={index} company={company} role={role} date={date} icon={icon} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl leading-[1.2] font-medium mb-8">{SectionData.awardItems.h3}</h3>
                        <div className="space-y-8">
                            {SectionData.awardItems.items.map(({ award, description, date, icon }, index) => (
                                <AwardItem key={award} award={award} description={description} date={date} icon={iconMap[icon]} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>

    );
}


// ================================== Helper Component Methods ================================== //

// Experience items componet
const ExperienceItem: React.FC<HomeTypes.ExperienceItemProps> = ({ company, role, date, icon }) => {
    return (
        <motion.div
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 group cursor-pointer"
        >
            <Image
                src={icon}
                alt={company}
                width={40}
                height={40}
                className="rounded-full bg-white p-1"
            />
            <div>
                <div className="flex items-center gap-2">
                    <p>{role} <span className="font-bold">{company}</span></p>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-gray-600">{date}</p>
            </div>
        </motion.div>
    );
}


// Award items componet
const AwardItem: React.FC<HomeTypes.AwardItemProps> = ({ award, date, icon: IconComponent }) => {
    return (
        <motion.div
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 group cursor-pointer"
        >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                {IconComponent && <IconComponent className="w-4 h-4" />}
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <p className="font-medium">{award}</p>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-gray-600">{date}</p>
            </div>
        </motion.div>
    );
}