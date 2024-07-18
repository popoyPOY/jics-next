import SettingTab from "./setting-tabs"

export default function SettingPage() {
    return (
        <>
        <div>
        <section className="flex justify-first mx-48 my-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
                Settings
            </h1>
            </section>

            <section>
                <div className="flex justify-first  my-10">
                        <SettingTab/>
                </div>

            </section>
        </div>
        </>
    )
}