"use client"

import { Button } from "@/components/ui/button"
export default function Error({ error, reset}: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
    return (
        <>
        <div className="items-center text-center">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Something went wrong
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Error message : {error.message}
            </p>
            <Button variant={"secondary"} onClick={() => reset()}>Reload</Button>
        </div>
        </>
    )
}