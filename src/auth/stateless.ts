'use server'

import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { exp, pb } from '@/utils/pb'
import { PB_URL } from '@/utils/pb'


export const createSession = async (token: string) => {

    cookies().set({
        name: 'session',
        value: token,
        httpOnly: true,
        sameSite: 'lax',
        expires: exp
    })

    redirect("/dashboard")
}

export const verifySession = async () => {
        const token: any = cookies().get("session")?.value

        const res = await fetch(`${PB_URL}/api/collections/customer/records`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })


        if (!res.ok) {
            redirect('/login')
        }

        return true
}

export const isAuth = async () => {
    const token: any = cookies().get("session")?.value

    const res = await fetch(`${PB_URL}/api/collections/customer/records`, {
        cache: "no-store",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })


    if (!res.ok) {
        return false
    }

    return true
}

export const destroySession = async () => {
    try {
        cookies().delete('session');

        redirect('/login');
    } catch (error) {
        throw error;
    }
}