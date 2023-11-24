"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function Overview({
    data
}:any) {
    console.log(data)
    const userData = data.map((order:any) => ({
        name: order.user.name,
        total: order.OrderItems.reduce((acc:any, item:any) => acc + item.amount, 0),
    }));
    return (
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
                <Bar dataKey="total" fill="bg-white" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}