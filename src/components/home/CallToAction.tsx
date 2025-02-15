"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ContactForm } from "@/forms/Contact";

export default function CallToAction() {
    const [isOpen, setIsOpen] = useState(false);
    const { toast } = useToast();

    const handleNewEntry = (entry: any) => {
        setIsOpen(false);
        toast({
            title: "Success!",
            description: "We got you, our team will connect soon!",
        });
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-7xl py-20 mx-auto px-4 flex flex-col">

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-medium mb-4"
                >
                    Have a project?
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-4xl md:text-5xl font-medium mb-8"
                >
                    Let's talk with me
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-center"
                >

                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button>
                                Let's talk now
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] md:h-[90vh] max-h-screen px-0">
                            <DialogTitle className="px-4 text-xl font-semibold">Let's Connect 👋</DialogTitle>
                            {/* <DialogTitle className="px-4 text-xl font-semibold">Create New Journal Entry</DialogTitle> */}
                            <ContactForm onSubmit={handleNewEntry} />
                        </DialogContent>
                    </Dialog>
                </motion.div>
            </div>
        </motion.div>
    );
}