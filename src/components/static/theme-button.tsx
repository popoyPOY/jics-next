"use client"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useTheme } from "next-themes"
import { useState } from "react"

export default function ThemeButton() {

    const [check, setCheck] = useState(false);

    const { setTheme, theme } = useTheme()
    

    return (
        <div className="flex mx-5 items-center text-center space-x-1">
            <Switch id="xxx" checked={check} onCheckedChange={() => {
                if(!check) {
                    setTheme("dark")
                    setCheck(true)
                }
                else {
                    setTheme("light")
                    setCheck(false)
                }
            }} />
        </div>
    )
}