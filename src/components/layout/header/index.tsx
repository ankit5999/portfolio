"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Menu, ScanFace } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ClockTime from "../clock";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BusinessCard } from "@/components/ui/business-card";
import HeaderData from "@/data/header.json";
import { smoothScroll } from "@/lib/utils";
// import { NavContext } from "@/context/navContext";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    // const { activeNav, setActiveNav } = useContext(NavContext);
    const SectionData = HeaderData;

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-[72px]">
                    <div className="flex gap-12">
                        <div className="flex items-center w-12 h-12">
                            <Link aria-label="logo" href="/">
                                <Image
                                    src={SectionData.logo}
                                    alt={SectionData.logo_alt}
                                    width={50}
                                    height={50}
                                    priority
                                    className="w-auto h-auto"
                                />
                            </Link>
                        </div>

                        <nav className="hidden md:flex items-center gap-12">
                            {SectionData.navLinks.map(({ href, label, ref }, index) => (
                                <Link key={index} href={href} onClick={smoothScroll(ref)} className="hover:text-gray-600 transition-colors">
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center gap-8">
                        <ClockTime />
                        {/* <div className="text-right">
                            <div className="text-[13px] text-gray-900">{SectionData.address}</div>
                            <div className="text-[13px] text-gray-900 font-bold"><ClockTime /></div>
                        </div> */}
                        <Link href={SectionData.calander_link} target="blank" className="hidden md:block">
                            <Button className=" hidden md:flex justify-between items-center gap-2 bg-gray-100/80 text-gray-900 hover:bg-gray-200 text-sm"><Calendar className="w-4 h-4" />{SectionData.calander_btn}</Button>
                        </Link>

                        {/* Business Card */}
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <DialogTrigger asChild>
                                <Button className="hidden md:block p-2" aria-label="Business">
                                    <ScanFace className="w-4 h-4" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="p-0 bg-transparent border-none outline-none shadow-none" hidden={true}>
                                <DialogTitle></DialogTitle>
                                <div className="p-4 flex flex-col items-center justify-center gap-8">
                                    <BusinessCard data={SectionData.cardData} />
                                </div>
                            </DialogContent>
                        </Dialog>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <Button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2"
                                aria-label="Toggle"
                            >
                                <Menu className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden py-4 border-t bg-white border-gray-100"
                    >
                        <nav className="flex flex-col space-y-4">
                            {SectionData.navLinks.map(({ href, label }, index) => (
                                <Link key={index} href={href} className="hover:text-gray-600 transition-colors">
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Link href={SectionData.calander_link}>
                                <Button className="w-full gap-4" aria-label="Card">
                                    <Calendar className="w-4 h-4" />
                                    {SectionData.calander_btn}
                                </Button>
                            </Link>
                            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                <DialogTrigger asChild>
                                    <Button className="w-full gap-4 bg-gray-100/80 text-gray-900 hover:bg-gray-200">
                                        <ScanFace className="w-4 h-4" />
                                        {SectionData.business_card_btn}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="p-0 bg-transparent border-none outline-none shadow-none" hidden={true}>
                                    <DialogTitle></DialogTitle>
                                    <div className="p-4 flex flex-col items-center justify-center gap-8">
                                        <BusinessCard data={SectionData.cardData} />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
}