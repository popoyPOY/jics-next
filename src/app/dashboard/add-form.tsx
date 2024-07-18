"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getPlan, addCustomer } from "@/actions/action"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useEffect, useState } from "react"


import { phoneRegex } from "@/utils/pb"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name is at least 2 characters.",
    }),
    address: z.string().min(5, {
        message: "Address is at least 5 characters."
    }),
    email: z.string().min(5, {
        message: "Email is at least 5 characters."
    }).email({
        message: "Invalid email address."
    }),
    phone: z.string().regex(phoneRegex, 'Invalid phone number.'),
    plan: z.string(),
    active: z.boolean(),
})

export default function AddForm() {
    const [plan, setPlan] = useState([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            address: "",
            email: "",
            phone: "",
            plan:"",
            active: true
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const add = await addCustomer(values)
    }

    useEffect(() => {
        const plan = async () => {
            const t: any = await getPlan();

            setPlan(t)
        }
        plan()
    },[])

    return (
        <div>
            <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField 
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input type="text" placeholder="Juan Dela Cruz" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    Please enter name of customer.
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                            />


                            <FormField 
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Customer Address</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Cagayan De Oro" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Please enter customer address.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField 
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone number</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="0949841823" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Please enter customer contact number.
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
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Email Address" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Please enter email address.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField 
                                control={form.control}
                                name="plan"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Plan</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a plan for the customer" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    plan.map((content: any, key) => {
                                                        return (
                                                            <SelectItem key={key} value={content?.id}>{content?.plan_name}</SelectItem>
                                                        )
                                                    })
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Please select customer  plan.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="my-2" type="submit">Add</Button>
                        </form>
            </Form>
        </div>
    )
}