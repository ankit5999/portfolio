"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Group, Palette, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { smoothScroll } from "@/lib/utils";
import HomeData from "@/data/home.json";


// Define icon mapping with explicit type annotation
const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = { Code2, Palette, PenTool, Group };

export default function Skills() {
    const SectionData = HomeData.skills_section;
    return (
        <main className="py-20 px-4" id="skills_section">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h2 className="text-[32px] lg:text-[40px] leading-[1.2] font-medium mb-4">{SectionData.h2}</h2>
                </motion.div>

                {/* Skills Grid */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column */}
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {SectionData.skills.map((skillSet, index) => {
                                const Icon = skillSet.icon;
                                const IconComponent = Icon ? iconMap[Icon] : null;
                                return (
                                    <motion.div
                                        key={skillSet.category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        // whileHover={{ y: -10 }}
                                        viewport={{ once: true }}
                                        className="relative group"
                                    >
                                        <div className={`absolute inset-0 bg-gray-50 group-hover:bg-appBrown-800 rounded-2xl`} />
                                        <div className="relative p-6 rounded-2xl border border-white/10 backdrop-blur-sm
                                            hover:border-white/20 transition-all duration-300">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className={`p-3 rounded-xl bg-white`}>
                                                    {IconComponent ? <IconComponent className="w-6 h-6" /> : null}
                                                </div>
                                                <h3 className="text-xl font-semibold">{skillSet.category}</h3>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {skillSet.skills.map((skill) => (
                                                    <motion.span
                                                        key={skill}
                                                        className="px-3 py-1 bg-gray-100 rounded-full text-sm
                                                        hover:bg-white/20 transition-colors duration-300"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column - Stats Grid */}
                    <div className="w-full lg:w-1/3">
                        <motion.div
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6 bg-gray-50 rounded-2xl h-full cursor-pointer group"
                        >
                            <div className="relative mb-6 overflow-hidden rounded-xl">
                                <Image
                                    src={SectionData.img.path}
                                    alt={SectionData.img.alt}
                                    width={350}
                                    height={350}
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h4 className="text-xl leading-[1.2] font-medium mb-2">{SectionData.h4}</h4>
                            <p className="text-gray-600">{SectionData.p}</p>
                            <div className="flex justify-between items-center">
                                <Link href={SectionData.link.href} className="-ml-6" onClick={smoothScroll(SectionData.link.ref)}>
                                    <Button variant="link" className="w-full text-base underline-offset-4 underline">
                                        {SectionData.link.title}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}