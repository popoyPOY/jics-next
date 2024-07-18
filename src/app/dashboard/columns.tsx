"use client";

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Cable } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Badge } from "@/components/ui/badge";

import ViewCustomer from "./_action-table/view-customer";
import ViewPlan from "./settings/_action-table/view-plan";
import { deactivateCustomer,removePlan } from "@/actions/action";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export type Plan = {
  collectionId: string,
  collectionName: string,
  create: string,
  id: string,
  plan_name: string,
  price: number,
  updated: string,
  description: string,
  speed: string
}

export type Account = {
    address: string,
    collectionId: string,
    created: string,
    email: string,
    expand: {
        plan : {
            collectionId: string,
            collectionName: string,
            created: string,
            id: string,
            plan_name: string,
            price: number,
            updated: string
        }
    },
    id: string,
    name: string,
    plan: string,
    updated: string,
    active: boolean
}

export const planColumns: ColumnDef<Plan>[]= [
  {
    accessorKey: "id",
    header: "Plan Id"
  },
  {
    accessorKey: "plan_name",
    header: "Plan"
  },
  {
    accessorKey: "price",
    header: "Price"
  },
  {
    accessorKey: "speed",
    header:"Speed"
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: ({ row } ) => {
      const column = row.original;


      return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={async () => {await removePlan(column.id)}}>
            Remove plan
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <ViewPlan {...column}/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      )
    }
  }
];

export const accountcolumns: ColumnDef<Account>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "address",
        header: "Address"
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "expand.plan.price",
        header: "Plan"
    },
    {
        accessorKey: "active",
        header: "Active",
        cell: ({ row }) => {
          const status = row.original.active
          return (
            <>
              <Badge variant={status ? "default" : "destructive"}>{status ? "Active" : "Deactivated"}</Badge>
            </>
          )
        }
    },
    {
        accessorKey: "actions",
        header: "Action",
        cell: ({ row }) => {
            const account = row.original
            return (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={async () => {await deactivateCustomer({
                id: account.id,
                active: !account.active ? true : false
              })}}>
                {account.active ? "Deactivate account" : "Activate account"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                  <ViewCustomer {...account}/>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            )
        }
    }
]


 
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div>hello</div>,
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
   
        return <div className="font-medium">{formatted}</div>
      },
  },
  {
    accessorKey: "actions",
    cell: ({ row }) => {
        const payment = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => alert(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
  }
]

