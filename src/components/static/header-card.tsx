import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { MailCheck } from "lucide-react"

type Header =  {
    title: string,
    content: number
}

export default function HeaderCard(header: Header) {
    return (
        <>
        <Card className="w-[300px] mx-3">
            <CardHeader className="">
                <p>{header.title}</p>
            </CardHeader>
            <CardContent>
                <CardTitle className="text-2xl">{header.content}</CardTitle>
            </CardContent>
        </Card>

        </>
    )
}