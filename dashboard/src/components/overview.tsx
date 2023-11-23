"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function Overview({
    data
}) {
    console.log(data)
    const userData = data.map((order) => ({
        name: order.user.name,
        total: order.OrderItems.reduce((acc, item) => acc + item.amount, 0),
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
                <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}