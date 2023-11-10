'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  { day: 'Monday', customers: 10 },
  { day: 'Tuesday', customers: 15 },
  { day: 'Wednesday', customers: 20 },
  { day: 'Thursday', customers: 25 },
  { day: 'Friday', customers: 30 },
  { day: 'Saturday', customers: 35 },
  { day: 'Sunday', customers: 40 },
];

export default function page() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="customers" fill="#adfa1d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
