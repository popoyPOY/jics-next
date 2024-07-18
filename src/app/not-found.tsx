
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <>
        <div className="items-center text-center">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                404 Not found
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 my-5">
            Could not find requested resource
            </p>
            <Button variant={"secondary"} asChild>
                <Link href={"/"} className="">Return</Link>
            </Button>
        </div>
        </>
    )
}