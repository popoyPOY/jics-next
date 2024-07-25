import { DataTable } from "./data-table"
import { getInquiry } from "@/actions/action"
import { InquiryColumn } from "./columns"

export default async function InquiryTable() {

    const data = await getInquiry();

    return (
        <>
        <DataTable columns={InquiryColumn} data={data} filter="name"/>
        </>
    )
}