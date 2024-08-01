import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { updateCustomer } from "@/actions/action"

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
    })
})

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export type Account = {
    id: string,
    email: string,
    address: string,
    name: string
    active: boolean
}


export default function AccountAction(account: Account) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ...account
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const update = await updateCustomer(values, account.id)
    }

    return (
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

                        <Button className="my-2" type="submit">Update</Button>
                    </form>
        </Form>
    )
}