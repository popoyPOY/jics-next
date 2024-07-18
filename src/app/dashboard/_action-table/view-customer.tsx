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
import AccountAction from "./action-formt"
import { Account } from "./action-formt"
import { Badge } from "@/components/ui/badge"

  
export default function ViewCustomer(account: Account) {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button variant={"ghost"} className="text-sm">View customer</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Account Information</DialogTitle>
            <DialogDescription>
                Edit your customer account information and subscriptions
            </DialogDescription>
            </DialogHeader>
            <Card>
            <CardHeader>
                <CardTitle>{account.name}</CardTitle>
                <CardDescription>{account.address}</CardDescription>
                <CardDescription>
                    Account Status: 
                    <Badge  variant={account.active ? "default" : "destructive"} className="mx-2">{account.active ? "Active" : "Deactivated"}</Badge>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <AccountAction {...account}/>
            </CardContent>
            <CardFooter>
                <CardDescription>You can update your customer using this feature</CardDescription>
            </CardFooter>
            </Card>
        </DialogContent>
        </Dialog>
    )
}