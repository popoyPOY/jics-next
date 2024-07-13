import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { CreditCard } from "lucide-react";
import Link from "next/link";

type Plan =  {
    price: string,
    description: string,
    speed: string
};

export default function PricingCard(plan: Plan, premium: string | null) {
    return (
        <>
        <Card className="w-[300px] mx-3">
            <CardHeader>
                <CardTitle className="text-xl text-amber-300">₱ {plan.price}</CardTitle>
                <CardDescription>{plan.speed} Mbps plan</CardDescription>
            </CardHeader>
            <CardContent className="items-center flex">
                <p>{plan.description}</p>
            </CardContent>
            <CardFooter>
                <Link 
                    className={buttonVariants({ variant: "default" })}
                    href={"https://web.facebook.com/profile.php?id=100075660739456"}
                >
                    Buy Now
                </Link>
            </CardFooter>   
        </Card>
        </>
    )
}