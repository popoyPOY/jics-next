import HeaderCard from "@/components/static/header-card"
import { Payment, columns, Account, accountcolumns } from "./columns"
import { DataTable } from "./data-table"
import { getUsers, getTotal } from "@/actions/action"
import AddCustomer from "./add-customer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InquiryTable from "./inquiry-table"


export default async function Dashboard() {

    const users = await getUsers();

    const total = await getTotal();

    const headerInformation = [
        {
            title: "Total Users",
            content: total.totalItems
        },
        {
            title: "Active Users",
            content: total.items.filter(user => user.active === true).length
        },
        {
            title: "Inactive Users",
            content: total.items.filter(user => user.active === false).length
        },
    ];

    return (
        <>
        <div className="flex flex-col">
            <section className="flex justify-center mx-48 my-10">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                    Dashboard
                </h1>
            </section>

            {/** dashboard header */}
            <section className="">
                <div className="flex justify-center">
                    {
                        headerInformation.map((values, key) => {
                            return (
                                    <HeaderCard key={key} {...values}/>
                            )
                        })
                    }
                </div>
            </section>
            
            <div className="items-center xl:flex justify-center my-10 sm:flex">
                    <Tabs defaultValue="user" className="">
                        <TabsList className="">
                            <TabsTrigger value="user">Users</TabsTrigger>
                            <TabsTrigger value="inquiry">Inquiry</TabsTrigger>
                        </TabsList>
                        <TabsContent value="user">
                            <div className="items-center">
                                <div>
                                    <div>
                                        <AddCustomer/>
                                    </div>
                                    <DataTable columns={accountcolumns} data={users} filter="email" />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="inquiry">
                            <InquiryTable/>
                        </TabsContent>
                    </Tabs>
            </div>

            
        </div>
        </>
    )
}