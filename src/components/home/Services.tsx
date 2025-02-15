"use client";

import { Button } from "@/components/ui/button";
import HomeData from "@/data/home.json";
import { HomeTypes } from "@/types/home";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
    const SectionData = HomeData.services_section;
    return (
        <motion.section
            id="services_section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between md:items-center sm:flex-row gap-4 flex-col mb-12">
                    <h2 className="text-[32px] lg:text-[40px] leading-[1.2] font-medium mb-4">
                        {SectionData.h2}
                    </h2>
                    {/* <Button className="bg-gray-100/90 text-gray-900 hover:bg-gray-200">
                        {SectionData.button}
                    </Button> */}
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {SectionData.serviceItems.map(({ title, description, image, href, button }, index) => (
                        <ServiceCard key={index} title={title} description={description} image={image} href={href} button= {button} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}


// ================================== Helper Component Methods ================================== //

// Service Card component
const ServiceCard: React.FC<HomeTypes.ServiceItemProps> = ({ title, description, image, href, button }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="p-6 bg-gray-50 rounded-2xl cursor-pointer group"
        >
            <div className="aspect-video relative mb-6 overflow-hidden rounded-xl">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-xl leading-[1.2] font-medium mb-3">{title}</h3>
            <p className="text-gray-600 line-clamp-2">{description}</p>
            {/* <div className="flex justify-between items-center">
                <Link href={href} className="-ml-6">
                    <Button variant="link" className="w-full text-base">
                        {button}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                </Link>
            </div> */}
        </motion.div>
    );
}