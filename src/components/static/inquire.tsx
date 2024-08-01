"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { addPlan } from "@/actions/action"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { Textarea } from "@/components/ui/textarea"
import { postInquiry } from "@/actions/action"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Full name is required.",
    }),
    description: z.string().min(5, {
        message: "Description is at least 5 characters."
    }),
    phone: z.string().min(5, {
        message: "Phone number is required."
    }),
    email: z.string().email({
        message: "Email is required."
    }),
})

function ContactForm() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            phone: "",
            email: "",
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await postInquiry(values)

        if(res) {
            toast({
                title: "Inquiry Sucessful",
                description: "Please wait 3-5 business days"
            })
        }
        else {
            toast({
                title: "Inquiry Unsuccessful",
                description: "Something went wrong"
            })
        }
    }
    

    return (
        <>
        <Form {...form} >
            <Toaster/>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField 
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full name</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="Juan Dela Cruz" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Please enter your full name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                        />

                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="juandelacruz@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField 
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="0949471232" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter phone number.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        

                        <FormField 
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                        placeholder="Message Us"
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter plan description.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <Button className="my-2" type="submit">Submit</Button>
                    </form>
        </Form>
        </>
    )
}

function ContactCard() {
    return (
        <>
        <Card className="">
            <CardHeader>
                <CardTitle>Inquire about the services.</CardTitle>
                <CardDescription>Inquire here</CardDescription>
            </CardHeader>
            <CardContent>
                <ContactForm/>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>

        </>
    )
}

export default function InquireForm() {
    return (
        <div className="items-center">
            <ContactCard/>
        </div>
    );
}







