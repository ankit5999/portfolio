"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { contactFormSchema } from "@/lib/validations/contact";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ContactData from "@/data/contact.json";

export function ContactForm({ onSubmit }: { onSubmit: (values: any) => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const FormData = ContactData.form;
    const ButtonData = ContactData.button;
    const ErrorData = ContactData.error;

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            country: "",
            subject: "",
            message: "",
        },
    });
    const { toast } = useToast();

    async function handleSubmit(values: z.infer<typeof contactFormSchema>) {
        try {
            setIsSubmitting(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || ErrorData.failure);
            }

            toast({
                title: ErrorData.success,
                description: ErrorData.success_message,
            });
        } catch (error) {
            toast({
                title: ErrorData.failure,
                description: ErrorData.failure_message,
            });
        } 
        finally {
            form.reset();
            setIsSubmitting(false);
            onSubmit({ ...values });
        }
    }

    return (
        <ScrollArea className="h-full">
            <div className="px-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>{FormData.name.label}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={FormData.name.placeholder} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>{FormData.email.label}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={FormData.email.placeholder} type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>{FormData.phone.label}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={FormData.phone.placeholder} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>{FormData.country.label}</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder={FormData.country.placeholder} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent position="popper">
                                            {FormData.country.Countries.map((country) => 
                                            <SelectItem key={country} value={country}>
                                                {country}
                                            </SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>{FormData.subject.label}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={FormData.subject.placeholder} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>{FormData.message.label}</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder={FormData.message.placeholder}
                                            className="h-[150px] resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                       
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <div className="flex items-center gap-3">
                                    <Loader2 className="h-4 w-4 loader-spin" />
                                    {ButtonData.sending}
                                </div>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <Send className="h-4 w-4" />
                                    {ButtonData.message}
                                </div>
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </ScrollArea>
    );
}