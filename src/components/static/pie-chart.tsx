"use client"


import { useState, useEffect } from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

type Data = {
  plan : string,
  subscribers : number,
  fill: string
};



const chartConfig = {
  subscriber: {
    label: "Subscribers",
  },
  999: {
    label: "999",
    color: "hsl(var(--chart-1))",
  },
  1299: {
    label: "1299",
    color: "hsl(var(--chart-2))",
  },
  1499: {
    label: "1499",
    color: "hsl(var(--chart-3))",
  }
} satisfies ChartConfig


export function Chart(config: ChartConfig, data: Data[]) {

  const totalSubscribers = 100;

  const chartData = [
    { plan: "999", subscribers: 50, fill: "var(--color-999)" },
    { plan: "1299", subscribers: 2, fill: "var(--color-1299)" },
    { plan: "1499", subscribers: 40, fill: "var(--color-1499)" },
  ]

  return (  
    <Card className="flex flex-col w-[400px] mx-5">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Subscribers</CardTitle>
        <CardDescription>Your total internet subscribers</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="subscribers"
              nameKey="plan"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalSubscribers}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Subscribers
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total subscribers for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
