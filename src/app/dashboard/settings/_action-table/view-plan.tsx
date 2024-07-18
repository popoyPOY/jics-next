import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PlanForm from "./plan-form"

  
export default function ViewPlan() {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button variant={"ghost"} className="text-sm">View plan</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Plan Information</DialogTitle>
            <DialogDescription>
                Edit your plan information
            </DialogDescription>
            </DialogHeader>
            <Card>
            <CardHeader>
                <CardTitle>999 Plan</CardTitle>
                <CardDescription></CardDescription>
                <CardDescription>
                    Plan Price: 999
                </CardDescription>
            </CardHeader>
            <CardContent>
                <PlanForm/>
            </CardContent>
            <CardFooter className="flex flex-col">
                <CardDescription>You can update your customer using this feature</CardDescription>
                <CardDescription>This then reflected to your index website</CardDescription>
            </CardFooter>
            </Card>
        </DialogContent>
        </Dialog>
    )
}