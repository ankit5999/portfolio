"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Youtube, Linkedin, Globe, Download, Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

function StyleOne() {
    const [showToast, setShowToast] = useState(false);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    // const handleShare = async () => {
    //     if (navigator.share) {
    //         try {
    //             await navigator.share({
    //                 title: document.title,
    //                 text: "Check this out!",
    //                 url: window.location.href,
    //             });
    //         } catch (error) {
    //             console.error("Error sharing:", error);
    //         }
    //     } else if (navigator.clipboard && navigator.clipboard.writeText) {
    //         try {
    //             await navigator.clipboard.writeText(window.location.href);
    //             setShowToast(true);
    //             setTimeout(() => setShowToast(false), 3000);
    //         } catch (err) {
    //             console.error("Failed to copy:", err);
    //         }
    //     } else {
    //         // console.warn("Share not supported");
    //         alert("Share not supported");
    //     }
    // };


    const handleDownload = () => {
        window.print();
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto p-8 bg-white min-h-screen"
            >
                {/* Header Section */}
                <header className="text-center mb-8">
                    <motion.h1
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Ankit Kumar
                    </motion.h1>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                        <a href="tel:8396836615" className="flex items-center gap-1">
                            <Phone size={16} /> 8396836615
                        </a>
                        <a href="mailto:yadavankit5999@gmail.com" className="flex items-center gap-1">
                            <Mail size={16} /> Email
                        </a>
                        <a href="https://www.youtube.com/workforwin" className="flex items-center gap-1">
                            <Youtube size={16} /> Youtube
                        </a>
                        <a href="https://www.linkedin.com/in/ankit5999/" className="flex items-center gap-1">
                            <Linkedin size={16} /> LinkedIn
                        </a>
                        <a href="/" className="flex items-center gap-1">
                            <Globe size={16} /> Portfolio
                        </a>
                    </div>
                </header>

                {/* Summary Section */}
                <section className="mb-8">
                    <motion.h2
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        className="text-xl font-bold mb-2"
                    >
                        SUMMARY
                    </motion.h2>
                    <p className="text-gray-700">
                        Strategic and results-driven Associate Product Manager with over 3 years of experience launching and managing innovative digital products. Proven track record in leading cross-functional teams, driving user-centric solutions, and achieving measurable business outcomes. Passionate about building impactful products that improve user experience and drive growth.
                    </p>
                </section>

                {/* Skills Section */}
                <section className="mb-8">
                    <motion.h2
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        className="text-xl font-bold mb-4"
                    >
                        SKILLS
                    </motion.h2>
                    <div className="space-y-2 text-gray-700">
                        <div>
                            <span className="font-semibold">Leadership Skills:</span> Project Management, Problem Solving, Stakeholder Management, Product Design, Agile, Wireframing
                        </div>
                        <div>
                            <span className="font-semibold">Technical Skills:</span> Python, JavaScript (React.js, Node.js), MongoDB (No SQL), REST API, Figma, Jira, UI/UX, SCRUM
                        </div>
                        <div>
                            <span className="font-semibold">Project Portfolio:</span> Workforwin Webapp, Workforwin Figma Design and Wireframe, Nectar, Mindamigo
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-8">
                    <motion.h2
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        className="text-xl font-bold mb-4"
                    >
                        EXPERIENCE
                    </motion.h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex flex-wrap justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-bold">Solitera Software</h3>
                                    <div className="italic">Associate Product Manager</div>
                                </div>
                                <div className="text-gray-600">Jan. 2022 - Present</div>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Launched a mental health product targeting over millions of potential users suffering from depression worldwide</li>
                                <li>Engineered a highly reliable and scalable back-end system, achieving 99.9% uptime. Implemented robust architecture and proactive maintenance strategies for seamless support of growing user base</li>
                                <li>Onboarded 7+ B2B customers in the first month via the admin system, increasing product reach and success</li>
                                <li>Achieved a 70% increase in user retention through pre-loading the product with the University of Nottingham, resulting in positive user feedback, high engagement metrics, and drive long-term retention</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-8">
                    <motion.h2
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        className="text-xl font-bold mb-4"
                    >
                        PROJECTS
                    </motion.h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold mb-2">Workforwin</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Launched Workforwin, a collaborative learning platform, serving millions of students and aspiring engineers globally ensuring alignment with the product roadmap and market analysis insights</li>
                                <li>Increased user retention by 30% through optimized platform stability and accessibility, utilizing advanced SEO techniques and performance upgrades, and leveraging data-driven decision making</li>
                                <li>Optimized the web app's performance score to 98%, ensuring a seamless user experience across all devices</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section>
                    <motion.h2
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        className="text-xl font-bold mb-4"
                    >
                        EDUCATION
                    </motion.h2>
                    <div>
                        <div className="flex flex-wrap justify-between items-start mb-2">
                            <div>
                                <h3 className="font-bold">Indira Gandhi University</h3>
                                <div className="italic">Bachelor of Technology in Computer Science and Engineering</div>
                            </div>
                            <div className="text-gray-600">Aug. 2017 - May 2021</div>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><span className="font-semibold">Coursework:</span> Data Structures, Algorithms, Databases, Distributed Systems, Machine Learning, Web Development</li>
                            <li><span className="font-semibold">Achievement:</span> Awarded a letter of appreciation for excellence in technical prowess and leadership, organizing a successful online coding event for students</li>
                        </ul>
                    </div>
                </section>
            </motion.div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-8 right-8 flex flex-col gap-4 print:hidden">
                <Button
                    onClick={handleShare}
                    variant="secondary"
                    className="p-3 rounded-full shadow-lg"
                >
                    <Share2 size={24} />
                </Button>
                <Button
                    onClick={handleDownload}
                    className="p-3 bg-gray-900 rounded-full shadow-lg"
                >
                    <Download size={24} />
                </Button>
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-24 right-8 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
                    >
                        <Check size={20} className="text-green-400" />
                        Link copied to clipboard!
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default StyleOne;