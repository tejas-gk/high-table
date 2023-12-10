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
      {/* <ResponsiveContainer width="100%" height="100%"> */}
                <LineChart
                    width={500}
                    height={300}
                data={data}
                className='
                    w-fit h-fit
                '
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                    <Tooltip formatter={(value) => `$${value}`} />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
      {/* </ResponsiveContainer> */}
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
                title="Sales"
                description="Your sales"
                data={data}
            />
            <AnalyticsCard
                title="Sales"
                description="Your sales"
                data={data}
            /> 
        </div>
    )
}
