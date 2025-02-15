"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import HomeData from "@/data/home.json";
import Link from "next/link";
import { Target, Code2, Blocks } from "lucide-react"; // Import the actual icons

// Define icon mapping with explicit type annotation
const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Target,
    Code2,
    Blocks
};

export default function Expert() {
    const SectionData = HomeData.expert_section;
    return (
        <section className="py-20 -md:mt-0 -mt-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[32px] lg:text-[40px] leading-[1.2] font-medium mb-4">
                                {SectionData.h2}
                            </h2>
                            <p className=" text-gray-600 mb-8 max-w-[480px]">
                                {SectionData.p}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                {SectionData.links.map((items, index) =>
                                    <Link href={items.href} key={index}>
                                        <Button className={items.className}>
                                            {items.title}
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Stats Grid */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                        >
                            {/* Stat Items */}
                            {SectionData.statItems.map(({ icon, number, label }, index) => {
                                const IconComponent = icon ? iconMap[icon] : null;
                                return (
                                    <StatItem
                                        key={index}
                                        icon={IconComponent ? <IconComponent className="w-6 h-6" /> : null}
                                        number={number}
                                        label={label}
                                    />
                                );
                            })}

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}


// ================================== Helper Component Methods ================================== //

// Stat Items component
function StatItem({ icon, number, label }: { icon?: React.ReactNode, number: string, label: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-appBrown-800/70 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
        >
            {icon && <div className="mb-3">{icon}</div>}
            <div className="text-xl font-medium mb-1">{number}</div>
            <div className="text-sm text-gray-600">{label}</div>
        </motion.div>
    );
}