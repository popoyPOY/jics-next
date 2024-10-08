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

import { Textarea } from "@/components/ui/textarea"
import { editPlan } from "@/actions/action"


const formSchema = z.object({
    plan_name: z.string().min(2, {
        message: "Plan name is at least 2 characters.",
    }),
    description: z.string().min(5, {
        message: "Description is at least 5 characters."
    }),
    price: z.coerce.number(),
    speed: z.string()
})

import { Plan } from "../../columns"

export default function PlanForm(plan: Plan) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            plan_name: plan.plan_name,
            description: plan.description,
            price: plan.price,
            speed: plan.speed
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const edit = await editPlan(values, plan.id)
        console.log(edit)
    }

    return (
        <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField 
                                    control={form.control}
                                    name="plan_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Plan name</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="Fiber 999" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Please enter new plan name.
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
                                    <FormLabel>Plan description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                        placeholder="Description of what this fiber plan is about"
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

                        <FormField 
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Plan price</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="1500" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter plan price.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField 
                            control={form.control}
                            name="speed"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Plan speed</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="40" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter plan speed.
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