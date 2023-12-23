"use client"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Order } from "@prisma/client"
type OrderItem = {
    amount: number;
};

type OrderProps = Order & {
    OrderItems: OrderItem[];
    user: {
        name: string;
    };
};

type OverviewProps = {
    data: OrderProps[];
};

export function Overview({
    data
}: OverviewProps
) {
    console.log(data)
    const userData = data.map((order) => ({
        name: order.user?.name,
        total: order.OrderItems.reduce((acc, item) => acc + item.amount, 0),
    }));
    return (
        <>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={userData}>
                    <XAxis
                        dataKey="z"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip formatter={(value) => `₹${value}`} />
                    <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}