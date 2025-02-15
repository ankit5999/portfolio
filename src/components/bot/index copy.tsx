"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
    type: 'user' | 'bot';
    content: string;
    isTyping?: boolean;
}

const TYPING_SPEED = 30;
const INITIAL_RESPONSE_DELAY = 500;

// Knowledge base for the chatbot
const knowledge = {
    skills: {
        programming: ['Python', 'C++', 'JavaScript'],
        technical: ['DSA'],
        management: ['Product Management', 'Team Management', 'Client Management'],
        design: ['UI/UX', 'Product Design']
    },
    projects: [
        {
            title: "Project Alpha",
            description: "A revolutionary AI-powered platform that transforms how we interact with data",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
        },
        {
            title: "Project Beta",
            description: "Innovative blockchain solution for secure and transparent transactions",
            image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490"
        }
    ],
    faq: {
        "who is ankit": "Ankit is a PM with extensive experience in product development.",
        "is ankit a pm": "Yes, Ankit has solid PM skills and experience.",
        "where is ankit from": "Ankit is from California, USA."
    },
    experience: {
        total: "3+ Years",
        product: "1+ year",
        freelancing: "5+ years",
        companies: [
            { name: "Google", role: "Associate Product Manager" },
            { name: "Microsoft", role: "Software Engineer" },
            { name: "Tesla", role: "CTO" }
        ]
    }
};

export default function Bot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [currentTypingLine, setCurrentTypingLine] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isBotTyping, setIsBotTyping] = useState(false);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addBotResponse("Hey 👋, I'm Ankit's virtual assistant. How can I help you today?");
        }
    }, [isOpen]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const typeMessage = async (message: string, callback: () => void) => {
        setIsBotTyping(true);
        await new Promise(resolve => setTimeout(resolve, INITIAL_RESPONSE_DELAY));

        const lines = message.split('\n');
        let fullResponse = '';

        for (let line of lines) {
            setCurrentTypingLine(line);
            let currentText = '';
            for (let char of line) {
                currentText += char;
                fullResponse = [...lines.slice(0, lines.indexOf(line)), currentText].join('\n');
                setMessages(prev => [
                    ...prev.slice(0, -1),
                    { type: 'bot', content: fullResponse, isTyping: true }
                ]);
                await new Promise(resolve => setTimeout(resolve, TYPING_SPEED));
            }
            fullResponse = [...lines.slice(0, lines.indexOf(line) + 1)].join('\n');
        }

        setIsBotTyping(false);
        setCurrentTypingLine('');
        setMessages(prev => [
            ...prev.slice(0, -1),
            { type: 'bot', content: message, isTyping: false }
        ]);
        callback();
    };

    const addBotResponse = (message: string) => {
        setMessages(prev => [...prev, { type: 'bot', content: '', isTyping: true }]);
        typeMessage(message, () => { });
    };

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            setMessages([]);
            setInputValue('');
        }, 300);
    };

    const generateSmartResponse = (input: string) => {
        const lowercaseInput = input.toLowerCase();

        // Check for specific FAQ questions
        for (const [question, answer] of Object.entries(knowledge.faq)) {
            if (lowercaseInput.includes(question)) {
                return answer;
            }
        }

        // Check for programming language inquiries
        for (const lang of knowledge.skills.programming) {
            if (lowercaseInput.includes(lang.toLowerCase())) {
                return `Yes, Ankit is proficient in ${lang}!`;
            }
        }

        // Check for tech stack inquiry
        if (lowercaseInput.includes('tech stack') || lowercaseInput.includes('programming languages')) {
            return `Ankit's technical stack includes: ${knowledge.skills.programming.join(', ')}`;
        }

        // Check for project count
        if (lowercaseInput.includes('how many projects')) {
            return `Ankit has worked on ${knowledge.projects.length} major projects:
${knowledge.projects.map(p => `• ${p.title}`).join('\n')}`;
        }

        // Check for experience at specific companies
        for (const company of knowledge.experience.companies) {
            if (lowercaseInput.includes(company.name.toLowerCase())) {
                return `Yes, Ankit worked at ${company.name} as a ${company.role}.`;
            }
        }

        // General inquiries
        if (lowercaseInput.includes('about')) {
            return "Ankit is a product manager with extensive experience in both technical and management roles.";
        }

        if (lowercaseInput.includes('skill')) {
            const allSkills = [
                ...knowledge.skills.programming,
                ...knowledge.skills.technical,
                ...knowledge.skills.management,
                ...knowledge.skills.design
            ];
            return `Ankit's key skills include:\n${allSkills.map(skill => `• ${skill}`).join('\n')}`;
        }

        if (lowercaseInput.includes('experience') || lowercaseInput.includes('work')) {
            return `Ankit's professional experience:
• Total Experience: ${knowledge.experience.total}
• Product Experience: ${knowledge.experience.product}
• Freelancing: ${knowledge.experience.freelancing}

Companies:
${knowledge.experience.companies.map(c => `• ${c.name} - ${c.role}`).join('\n')}`;
        }

        return "I apologize, but I couldn't understand your question. You can ask me about Ankit's skills, experience, projects, or specific technologies he works with. You can also email ankit@example.com for more specific inquiries.";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isBotTyping) return;

        const userMessage = inputValue.trim();
        setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
        setInputValue('');

        const response = generateSmartResponse(userMessage);
        setMessages(prev => [...prev, { type: 'bot', content: '', isTyping: true }]);
        typeMessage(response, () => { });
    };

    return (
        <>
            <motion.button
                className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full p-4 shadow-lg z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
            >
                <MessageCircle size={24} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed inset-4 sm:inset-auto sm:right-6 sm:bottom-24 sm:w-96 h-[calc(100vh-12rem)] bg-background border rounded-lg shadow-xl flex flex-col z-50"
                    >
                        <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Chat with Ankit's Assistant</h2>
                            <button
                                onClick={handleClose}
                                className="hover:bg-primary-foreground/10 rounded-full p-1 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${message.type === 'user'
                                                ? 'bg-primary text-primary-foreground ml-auto'
                                                : 'bg-muted'
                                            }`}
                                    >
                                        <pre className="whitespace-pre-wrap font-sans">{message.content}</pre>
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSubmit} className="p-4 border-t bg-background">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 p-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    disabled={isBotTyping}
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isBotTyping}
                                    className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}