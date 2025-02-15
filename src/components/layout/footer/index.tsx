"use client";

import { motion } from "framer-motion";
import { Clock, Copyright } from "lucide-react";
import ClockTime from "../clock";
import FooterData from "@/data/footer.json";
import { GoogleFonts } from "@/fonts";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const SectionData = FooterData;
    return (
        <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            id="footer"
            className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center py-6"
        >
            <div className="flex flex-wrap items-center space-x-2">
                <span className={`font-medium text-2xl ${GoogleFonts.caveat.className}`}>{SectionData.name}</span>
                <span className="text-gray-500 text-sm pt-1">{SectionData.role}</span>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center space-x-2 mt-2 font-medium text-gray-900"
            >
                <Clock className="w-4 h-4" />
                <ClockTime />
                <p>{SectionData.separator}</p>
                <Copyright className="w-4 h-4" />
                <p suppressHydrationWarning>{currentYear}</p>
            </motion.div>
        </motion.nav>
    );
}