
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

import AddForm from "./add-form"

import { Button } from "@/components/ui/button"
import { UserPlus, UserRoundPlus } from "lucide-react"
  
export default function AddCustomer() {
    return (
        <>
        <Dialog>
        <DialogTrigger asChild>
            <Button>
                <UserPlus className="mr-1" />
                    Add customer
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Add new Customer</DialogTitle>
            <DialogDescription>
                You can add your new customer here
            </DialogDescription>
            </DialogHeader>
            
            <div>
                <Card>
                    <CardHeader>
                        <CardDescription>Add new customer</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AddForm/>
                    </CardContent>
                </Card>
            </div>
        </DialogContent>
        </Dialog>
        </>
    )
}