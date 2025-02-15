import { NextResponse } from 'next/server';

interface KnowledgeBase {
    skills: {
        programming: string[];
        technical: string[];
        management: string[];
        design: string[];
        soft: string[];
    };
    projects: { title: string; description: string; image: string }[];
    faq: Record<string, string>;
    experience: {
        total: string;
        product: string;
        freelancing: string;
        companies: { name: string; role: string }[];
    };
    personal: {
        name: string;
        location: string;
        favorites: {
            food: string[];
            places: string[];
            tech: string[];
            hobbies: string[];
        };
    };
}

// Define `knowledge` first before using it inside `faq`
const knowledge: KnowledgeBase = {
    skills: {
        programming: ['Python', 'Next.js', 'React.js', 'Node.js', 'JavaScript', 'TypeScript'],
        technical: ['DSA', 'Problem Solving', 'Teaching', 'Database Management System', 'Computer Network', 'Digital Logic', 'Theory of Computation', 'Compiler Design', 'Computer Architecture'],
        management: ['Product Management', 'Team Management', 'Client Management', 'Stakeholder Management'],
        design: ['UI/UX', 'Product Design', 'Wireframe Design', 'Figma', 'Canva', 'Adobe'],
        soft: ['Leadership', 'Communication', 'Critical Thinking', 'Time Management']
    },
    projects: [
        { title: "Workforwin", description: "AI-powered platform that transforms how we interact with data", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97" },
        { title: "Nectar Lyfe", description: "Blockchain solution for secure and transparent transactions", image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490" },
        { title: "Mindamigo", description: "Mental wellness AI assistant", image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490" },
    ],
    experience: {
        total: "3+ Years",
        product: "1+ year",
        freelancing: "5+ years",
        companies: [
            { name: "Google", role: "Associate Product Manager" },
            { name: "Microsoft", role: "Software Engineer" },
            { name: "Tesla", role: "CTO" }
        ]
    },
    personal: {
        name: "Ankit Kumar",
        location: "California, USA",
        favorites: {
            food: ["Sushi", "Pizza", "Pasta"],
            places: ["San Francisco", "New York", "Tokyo"],
            tech: ["AI", "Blockchain", "Cloud Computing"],
            hobbies: ["Coding", "Traveling", "Photography"]
        }
    },
    faq: {} // Temporarily empty, will be filled after knowledge is initialized
};

// Now populate `faq` after `knowledge` is fully defined
knowledge.faq = {
    "who is ankit": `Ankit is a Product Manager with extensive experience in product development and software engineering.`,
    "is ankit a pm": "Yes, Ankit has solid PM skills and experience.",
    "where is ankit from": `Ankit is from ${knowledge.personal.location}.`,
    "does ankit know python": "Yes, Ankit is proficient in Python!",
    "how many companies has ankit worked at": `Ankit has worked at ${knowledge.experience.companies.length} major companies: ${knowledge.experience.companies.map(c => c.name).join(', ')}.`,
    "what is ankit's experience": `Ankit has ${knowledge.experience.total} years of experience, including ${knowledge.experience.product} in product management and ${knowledge.experience.freelancing} in freelancing.`
};

// Function to process user queries
function generateSmartResponse(input: string): string {
    const lowercaseInput = input.toLowerCase();

    // Define restricted keywords
    const restrictedKeywords = ['personal interests', 'experience', 'skills', 'ankit', 'hobbies'];

    // Check if the input contains any restricted keywords
    if (restrictedKeywords.some(keyword => lowercaseInput.includes(keyword))) {
        return "Apologies, but I can't provide that information.";
    }

    for (const [question, answer] of Object.entries(knowledge.faq)) {
        if (lowercaseInput.includes(question)) {
            return answer;
        }
    }

    for (const lang of knowledge.skills.programming) {
        if (lowercaseInput.includes(lang.toLowerCase())) {
            return `Yes, Ankit is proficient in ${lang}!`;
        }
    }

    return "I couldn't understand your question. Try asking about Ankit's skills, experience, projects, or personal interests.";
}

export async function POST(request: Request) {
    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const { message } = await request.json();
        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }
        const response = generateSmartResponse(message);
        return NextResponse.json({ response });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
    }
}
