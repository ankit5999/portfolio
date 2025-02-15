import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validations/contact";
import { userContactBody } from "@/lib/templates/userContact";
import { AdminContactBody } from "@/lib/templates/adminContact";

// Create reusable transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate the request body
        const result = contactFormSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: "Invalid form data", details: result.error.format() },
                { status: 400 }
            );
        }

        let { name, email, phone, country, subject, message } = result.data;

        message = message.replace(/\n/g, "<br />");

        // Send email to admin
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact Form Submission From: Ankit Kumar Website`,
            html: AdminContactBody(name, email, phone, country, subject, message),
        });

        // Send confirmation email to user
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: email,
            subject: "Message received from Ankit",
            html: userContactBody(name, email, phone, country, subject, message),
        });

        return NextResponse.json(
            { message: "Your message has been sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}