import { NextResponse } from 'next/server';

// Knowledge base for the chatbot
const knowledge = {
    skills: {
        programming: ['Python', 'Next.js', 'React.js', 'Node.js', 'JavaScript'],
        technical: ['DSA', 'Problem Solving', 'Teaching', 'Database Management System', 'Computer Network', 'Digital Logic', 'Theory of Computation', 'Compiler Design', 'Computer Architecture'],
        management: ['Product Management', 'Team Management', 'Client Management', 'Stackholder Management', ],
        design: ['UI/UX', 'Product Design', 'Wireframe Design', 'Figma', 'Canva', 'Adobe']
    },
    projects: [
        {
            title: "Workforwin",
            description: "A revolutionary AI-powered platform that transforms how we interact with data",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
        },
        {
            title: "Nectar Lyfe",
            description: "Innovative blockchain solution for secure and transparent transactions",
            image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490"
        },
        {
            title: "Mindamigo",
            description: "Innovative blockchain solution for secure and transparent transactions",
            image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490"
        },
        {
            title: "Trunk2Tale",
            description: "Innovative blockchain solution for secure and transparent transactions",
            image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490"
        },
        {
            title: "Yodo",
            description: "Innovative blockchain solution for secure and transparent transactions",
            image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490"
        },
        {
            title: "Portfolio",
            description: "Innovative blockchain solution for secure and transparent transactions",
            image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490"
        }
    ],
    faq: {
        "who is ankit": "Ankit is a PM with extensive experience in product development.",
        "Is ankit a pm": "Yes, Ankit has solid PM skills and experience.",
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

function generateSmartResponse(input: string): string {
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
        return `I'm Ankit Kumar, a results-driven Product Manager dedicated to creating applications that simplify life. 
        Specializing in healthcare, education, and fitness, I thrive on solving real-world challenges. 
        My expertise spans product management, stakeholder relations, and strategic product marketing. 
        Proficient in Python, cloud, AI, and machine learning, I bring a tech-forward approach to every project.`;
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
}

export async function POST(request: Request) {
    try {
        // Add artificial delay to simulate processing
        await new Promise(resolve => setTimeout(resolve, 500));

        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        const response = generateSmartResponse(message);

        return NextResponse.json({ response });
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}