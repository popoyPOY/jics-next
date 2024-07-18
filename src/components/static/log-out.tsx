"use client"
import { Button } from "../ui/button"
import { destroySession } from "@/auth/stateless";
import { LogOut } from "lucide-react";

export default function Logout() {
    return (
        <>
        <Button 
            className="flex hover:text-amber-400 mx-4 " 
            variant={"ghost"}
            onClick={async () => (await destroySession())}
        >
            <LogOut className="mx-1 hover:animate-pulse"/>
            Logout
        </Button>
        </>
    );
}