"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ContactForm } from "@/forms/Contact";
import { useState } from "react";
import Image from "next/image";
import HomeData from "@/data/home.json";

export default function Testimonial() {
    const SectionData = HomeData.testimonials_section;
    const [isOpen, setIsOpen] = useState(false);

    const handleNewEntry = (entry: any) => {
        setIsOpen(false);
    };
    return (
        <div className="md:pt-20 mx-auto px-4 flex items-center justify-center ">
            <div className="max-w-7xl mx-auto w-full relative min-h-[600px] md:min-h-[700px]">
                {/* Testimonial Images */}
                {SectionData.testimonials.map((testimonial) => (
                    <motion.div
                        key={testimonial.id}
                        className="absolute"
                        style={testimonial.position}
                        initial={{ opacity: 0, scale: 0.5 }}
                        // animate={{ opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: testimonial.id * 0.2,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <Image
                            src={testimonial.image}
                            alt={`Testimonial ${testimonial.id}`}
                            width={100}
                            height={100}
                            className="w-16 h-16 md:w-28 md:h-28 rounded-2xl object-cover shadow-lg"
                        />
                    </motion.div>
                ))}

                {/* Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-2xl px-4">
                    <motion.h2
                        className="text-[32px] lg:text-[50px] leading-[1.2] font-medium mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.7 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {SectionData.h2}
                    </motion.h2>

                    <motion.h3
                        className="text-[32px] leading-[1.2] text-gray-500 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.9 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {SectionData.h3}
                    </motion.h3>

                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button>
                                {SectionData.button}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] md:h-[90vh] h-[calc(100vh-3.5rem)] px-0">
                            <DialogTitle className="px-4 text-[22px] leading-[1.2] font-medium z-20">{SectionData.dialog_title}</DialogTitle>
                            <div className="overflow-hidden rounded-tl absolute">
                                <div className="relative overflow-hidden top-0 left-0 w-32 h-32 z-10 bg-appBrown-800 rounded-full -translate-y-16 -translate-x-16"></div>
                            </div>
                            <ContactForm onSubmit={handleNewEntry} />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}