"use server"
import { cookies } from "next/headers";
import { Account, Plan } from "@/app/dashboard/columns";
import { PB_URL } from "@/utils/pb";
import { redirect } from "next/navigation";


type Total = {
    totalItems: number
    items: [
        {
            active: boolean,
            address: string
        }
    ]
}

type Customer = {
    name: string,
    address: string,
    email: string,
    phone: string,
    plan: string,
    active: boolean,
}

type Deactivate = {
    id: string,
    active: boolean
}

type AddPlan = {
    plan_name: string,
    price: number,
    description: string,
    speed: string
}


const session = cookies().get("session")?.value
export async function getUsers(): Promise<Account[]> {

    const response = await (await fetch(`${PB_URL}/api/collections/customer/records?expand=plan`, {
        cache: "no-store",
        headers: {
            'Authorization': `Bearer ${session}`
        }
    })).json()
    

    return await response.items
}

export async function getPlan(): Promise<Plan[]> {

    const response = await (await fetch(`${PB_URL}/api/collections/plan/records`, {
        cache: "no-store",
        headers: {
            'Authorization': `Bearer ${session}`
        }
    })).json()


    return await response.items
}

export async function removePlan(id: string) {

    const res = await fetch(`${PB_URL}/api/collections/plan/records/${id}`,
        {
            method: "DELETE",
            cache:"no-store",
            headers: {
                'Authorization': `Bearer ${session}`,
                'Content-Type': 'application/json'
            },
        }
    )

    if (!res.ok) {
        return false
    }
    else {
        redirect("/dashboard/settings")
    }
}

export async function addPlan(data: AddPlan) {

    const res = await fetch(`${PB_URL}/api/collections/plan/records`,
        {
            method: "POST",
            cache:"no-store",
            headers: {
                'Authorization': `Bearer ${session}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    if (!res.ok) {
        return false
    }
    else {
        redirect("/dashboard/settings")
    }
}

export async function getTotal() {
    const res = await fetch(`${PB_URL}/api/collections/customer/records?expand=plan`,
        {
            cache:"reload",
            headers: {
                'Authorization': `Bearer ${session}`
            }
        }
    )

    const total: Total = await res.json()

    return total
}


export async function addCustomer(data : Customer) {


    const res = await fetch(`${PB_URL}/api/collections/customer/records`,
        {
            method: "POST",
            cache:"no-store",
            headers: {
                'Authorization': `Bearer ${session}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    
    console.log(await res.json())

    if (!res.ok) {
        return false
    }
    else {
        redirect("dashboard")
    }
}


export async function deactivateCustomer(data : Deactivate) {


    const res = await fetch(`${PB_URL}/api/collections/customer/records/${data.id}`,
        {
            method: "PATCH",
            cache:"no-store",
            headers: {
                'Authorization': `Bearer ${session}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    
    console.log(await res.json())

    if (!res.ok) {
        return false
    }
    else {
        redirect("dashboard")
    }
}