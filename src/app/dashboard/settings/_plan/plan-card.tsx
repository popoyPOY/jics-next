import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { DataTable } from "../../data-table"
import { planColumns, Plan } from "../../columns"
import { Button } from "@/components/ui/button"
import { CalendarPlus } from "lucide-react"
import { getPlan } from "@/actions/action"
import AddPlan from "./add-plan"


export default async function PlanCard() {
    const plan = await getPlan();

    return (
        <>
        <div className="border flex rounded-lg flex-col">
            <div className="mx-5 my-2">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Plans
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-400">
                    You can edit your Plan list here
                </p>
            </div>

            <Card className="m-5">
                <CardHeader>
                    <CardTitle>Plan</CardTitle>
                    <CardDescription>This is the plan list. You can add, edit or delete the plans.</CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable columns={planColumns} data={plan} filter="plan_name" />
                </CardContent>
                <CardFooter>
                    <div className="flex justify-start">
                        <AddPlan/>
                    </div>
                </CardFooter>
            </Card>
        </div>
        </>
    )
}