"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import HomeData from "@/data/home.json";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SelectedWork() {
    const SectionData = HomeData.selected_work_section;
    return (
        <section className="py-20 bg-appBrown-800" id="selected_work_section">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-[32px] lg:text-[40px] leading-[1.2] font-medium mb-16"
                >
                    {SectionData.h2}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SectionData.works.map((work, index) => (
                        <motion.div
                            key={work.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/60 rounded-3xl p-6 group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative w-full h-[300px] mb-6 overflow-hidden rounded-2xl">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-2">{work.title}</h3>
                            <p className=" text-gray-900 mb-1">{work.subtitle}</p>
                            <p className="text-sm text-gray-500 mb-4">{work.date}</p>
                            <p className=" text-gray-600 mb-2 line-clamp-2">{work.description}</p>
                            <div className="flex justify-between items-center">
                                <Link href={SectionData.link.href} className="-ml-6">
                                    <Button variant="link" className="w-full text-base">
                                        {SectionData.link.title}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}