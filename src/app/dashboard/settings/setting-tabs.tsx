import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PlanCard from "./_plan/plan-card"

export default function  SettingTab() {
    return (
        <>
        <Tabs defaultValue="subscription" className="">
            <TabsList>
                <TabsTrigger value="subscription">Subscription  </TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="subscription">
                <PlanCard/>
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        </>
    )
}