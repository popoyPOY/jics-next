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

function getSession() {
    const session = cookies().get("session")?.value
    return session
} 


export async function getUsers(): Promise<Account[]> {

    const response = await (await fetch(`${PB_URL}/api/collections/customer/records?expand=plan`, {
        cache: "no-cache",
        headers: {
            'Authorization': `Bearer ${getSession()}`
        }
    })).json()
    

    return await response.items
}

export async function getPlan(): Promise<Plan[]> {

    const response = await (await fetch(`${PB_URL}/api/collections/plan/records`, {
        cache: "no-store",
        headers: {
            'Authorization': `Bearer ${getSession()}`
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
                'Authorization': `Bearer ${getSession()}`,
                'Content-Type': 'application/json'
            },
        }
    )

    if (!res.ok) {
        return false
    }
    else {
        redirect("settings")
    }
}

export async function addPlan(data: AddPlan) {

    const res = await fetch(`${PB_URL}/api/collections/plan/records`,
        {
            method: "POST",
            cache:"no-store",
            headers: {
                'Authorization': `Bearer ${getSession()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    if (!res.ok) {
        return false
    }
    else {
        redirect("settings")
    }
}

export async function editPlan(data: AddPlan, id: string) {

    const res = await fetch(`${PB_URL}/api/collections/plan/records/${id}`,
        {
            method: "PATCH",
            cache:"no-store",
            headers: {
                'Authorization': `Bearer ${getSession()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    if (!res.ok) {
        return false
    }
    else {
        redirect("settings")
    }
}


export async function getTotal() {
    const res = await fetch(`${PB_URL}/api/collections/customer/records?expand=plan`,
        {
            cache:"reload",
            headers: {
                'Authorization': `Bearer ${getSession()}`
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
                'Authorization': `Bearer ${getSession()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )



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
                'Authorization': `Bearer ${getSession()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    if (!res.ok) {
        return false
    }
    else {
        redirect("dashboard")
    }
}