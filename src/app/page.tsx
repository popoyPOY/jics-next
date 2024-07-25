import Image from "next/image";
import NavBar from "@/components/static/NavBar";
import { Circle } from "lucide-react";
import PricingCard from "@/components/static/pricing-card";
import { total } from "@/actions/action";
import Title from "@/components/static/title";
import { getPlan } from "@/actions/action";
import InquireForm from "@/components/static/inquire";
import Footer from "@/components/static/footer";


export default async function Home() {
  const totalUser = await total();
  const plan = await getPlan();
  return (
    <>
    <main className="flex min-h-[100vh] grow flex-col items-center justify-between p-24">
      
      <div>
          <div className="flex justify-center">
            <Title/>
          </div>

          <section className="flex flex-row justify-center">
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-center text-gray-300">
            A Fiber Optic Cable, Point to Point Internet
            </p>
            <Circle className="my-4 fill-amber-400 border-amber-400" size={5} color="amber"/>
          </section>

          <section className="flex justify-center">
          <p className="leading-1 [&:not(:first-child)]:mt-6 text-sm ">
            {totalUser}+ customer 
          </p>
          </section>

          <section className="my-10">
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 flex">
            What's the pricing?
          </h2>
          </section>

          <div className="flex justify-center flex-row flex-wrap ">
            {
              plan.map((values, key) => {
                return (
                    <PricingCard key={key} {...values}/>
                )
              })
            }
          </div>
        
          <section className="my-10">
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 flex">
            Inquire about the service
          </h2>
          </section>

          <section className="flex justify-center">
            <InquireForm/>
          </section>
      </div>

    </main>
    <div className="p-24">
      <Footer/>
    </div>

    </>
  );
}
