"use server"
import { createSession } from "./stateless"
import { pb } from "@/utils/pb"
import { redirect } from "next/navigation"

export const SignIn = async ({email, password}: {email: string, password: string}) => {
    try {
        const authData = await pb.admins.authWithPassword(email, password)
        
        return createSession(authData.token);

    } catch (error: any) {
        return error.message
    }


}