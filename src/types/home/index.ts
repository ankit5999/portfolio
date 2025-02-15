export namespace HomeTypes {
    export interface ExperienceItemProps {
        company: string;
        role: string;
        date: string;
        icon: string;
    }

    export interface AwardItemProps {
        award: string;
        description: string;
        date: string;
        icon: any;
    }

    export interface ServiceItemProps {
        title: string;
        description: string;
        image: string;
        href: string;
        button: string;
    }
}