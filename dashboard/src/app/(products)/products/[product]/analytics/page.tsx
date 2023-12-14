'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

interface AnalyticsCardProps {
  title: string;
  description: string;
  data: any;
}
const AnalyticsCard = ({ title, description, data }: AnalyticsCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            {title}
                          </span>
                          <span className="font-bold text-muted-foreground">
                            {payload[0].value}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Today
                          </span>
                          <span className="font-bold">
                            {payload[1].value}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                }

                return null
              }}
            />
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="average"
              activeDot={{
                r: 6,
                style: { fill: "white", opacity: 0.25 },
              }}
              style={
                {
                  stroke: "white",
                  opacity: 0.25,
                  // "--theme-primary": `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                  //     })`,
                } as React.CSSProperties
              }
            />
            <Line
              type="monotone"
              dataKey="today"
              strokeWidth={2}
              activeDot={{
                r: 8,
                style: { fill: "white" },
              }}
              style={
                {
                  stroke: "white",
                  // "--theme-primary": `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary
                  //     })`,
                } as React.CSSProperties
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export default function page() {
  return (
    <div className='
        grid gap-4 grid-cols-1 md:grid-cols-3
      '>
      <AnalyticsCard
        title="Sales"
        description="Your sales"
        data={data}
      />
      <AnalyticsCard
        title="Affiliate"
        description="Your sales"
        data={data}
      />
      <AnalyticsCard
        title="Affiliate"
        description="Your sales"
        data={data}
      />
    </div>
  )
}
