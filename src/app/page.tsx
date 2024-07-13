import Image from "next/image";
import NavBar from "@/components/static/NavBar";
import { Circle } from "lucide-react";
import PricingCard from "@/components/static/pricing-card";

const plan = [
  {
    price: "999",
    description: "A great plan for streaming, video calling, school, and gaming!",
    speed: "40"
  },
  {
    price: "1199",
    description: "Great for gaming and long binge-streaming shows in HD.",
    speed: "60"
  },
  {
    price: "1499",
    description: "Design for the great, for families, social media streaming.",
    speed: "100"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-[100vh] grow flex-col items-center justify-between p-24">

      <div>

          <div className="flex">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl transition-opacity">
            JS1/JICS Wireless Internet Provider
            </h1>
            <Circle className="my-6 fill-amber-400 border-amber-400" size={19} color="amber"/>
          </div>

          <section className="flex flex-row justify-center">
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-center text-gray-300">
            A Fiber Optic Cable, Point to Point Internet
            </p>
            <Circle className="my-4 fill-amber-400 border-amber-400" size={5} color="amber"/>
          </section>

          <section className="my-10">
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 flex">
            What's the pricing?
          </h2>
          </section>

          <div className="flex">
            {
              plan.map((values, key) => {
                return (
                  <>
                  <PricingCard price={values.price} speed={values.speed} description={values.description}/>
                  </>
                )
              })
            }
          </div>

      </div>

    </main>
  );
}
