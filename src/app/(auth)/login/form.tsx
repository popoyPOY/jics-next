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

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { SignIn } from "@/auth/auth"

const formSchema = z.object({
    email: z.string().min(10, {
        message: 'Email is at least 10 characters.'
    }).email({
        message: 'Invalid email address.'
    }),
    password: z.string().min(5, {
        message: 'Password is at least 5 characters.'
    })
})

export default function LoginForm() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const authData = await SignIn({...values})

        if(authData === "Failed to authenticate.") {
            toast({
                title:"Something went wrong",
                description: authData
            })
        }
    }

    return(
        <>
        <div className="flex justify-center items-center m-[10vh]">
            <Toaster/>
            <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                    Sign In
                </CardTitle>
                <CardDescription>Please sign in to your account.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
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
                                        Please enter your email address.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="******" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter your password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="my-2" type="submit">Login</Button>
                    </form>
                </Form>
            </CardContent>
            </Card>
        </div>
        </>
    )
}