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
import { Calendar, CalendarPlus } from "lucide-react"
import AddForm from "./add-form"

export default function AddPlan() {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button variant={"default"} className="text-sm">
                <CalendarPlus className="mx-1"/>
                Add new plan
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Plan Information</DialogTitle>
            <DialogDescription>
                Add your new plan
            </DialogDescription>
            </DialogHeader>
            <Card>
            <CardHeader>
                <CardTitle>Add</CardTitle>
                <CardDescription></CardDescription>
                <CardDescription>
                    Adding new plan here
                </CardDescription>
            </CardHeader>
            <CardContent>
                <AddForm/>
            </CardContent>
            <CardFooter className="flex flex-col">
                <CardDescription>You can create your new plan using this feature</CardDescription>
                <CardDescription>This then reflected to your index website</CardDescription>
            </CardFooter>
            </Card>
        </DialogContent>
        </Dialog>
    )
}