import * as z from "zod";
import ContactData from "@/data/contact.json";

const ValidationData = ContactData.validations;

export const contactFormSchema = z.object({
    name: z.string().min(2, ValidationData.name),
    email: z.string().email(ValidationData.email),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, ValidationData.phone),
    country: z.string().min(1, ValidationData.country),
    subject: z.string().min(5, ValidationData.subject),
    message: z.string().min(10, ValidationData.message),
});