"use client";

import { Button } from "@/components/ui/button";
import HomeData from "@/data/home.json";
import { smoothScroll } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    const SectionData = HomeData.hero_section
    return (
        <section className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image
                                src="/assets/images/team/ankit.svg"
                                alt="Profile"
                                width={100}
                                height={100}
                                className="rounded-full mb-8"
                            />
                            <h1 className="text-5xl md:text-6xl font-bold mb-8">
                                {SectionData.h1}
                            </h1>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full"
                    >
                        <h2 className="text-3xl md:text-4xl font-medium mb-4 leading-[1.2]">
                            {SectionData.h2}
                        </h2>
                        <p className="text-gray-600 mb-8">
                            {SectionData.p}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {SectionData.links.map((items, index) => 
                                <Link href={items.href} key={index} {...(items.ref ? { onClick: smoothScroll(items.ref) } : {})}>
                                    <Button className={items.className}>
                                        {items.title}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
