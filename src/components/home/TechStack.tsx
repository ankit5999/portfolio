"use client";

import { motion } from "framer-motion";

const technologies = [
    {
        id: 1,
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        id: 2,
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        id: 3,
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        id: 4,
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        id: 5,
        name: "Vue",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
        id: 6,
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
        id: 7,
        name: "Swift",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    },
    {
        id: 8,
        name: "Scala",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
    },
    {
        id: 9,
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
    {
        id: 10,
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
        id: 11,
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        id: 12,
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        id: 13,
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
        id: 14,
        name: "Scala",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",
    },
    {
        id: 15,
        name: "Kotlin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    },
];

export default function TechStack () {
    return (
        <section className="py-16 md:py-24 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Our Technology Stack
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        We use cutting-edge technologies to build robust and scalable solutions
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.id}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300
                        flex flex-col items-center justify-center gap-3 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="relative w-12 h-12 md:w-16 md:h-16">
                                <motion.img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-700 text-center">
                                {tech.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};