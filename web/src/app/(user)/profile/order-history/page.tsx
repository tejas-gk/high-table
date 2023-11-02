'use client'
import React, { useState } from 'react';
import OrderHistory from './order-history';

const OrderHistoryPage = () => {
    const [orders, setOrders] = useState([
        {
            id: '123456',
            date: '2022-10-25',
            total: 75.99,
            status: 'Delivered',
            items: [
                { id: '1', name: 'Product A', price: 25.99, quantity: 2 },
                { id: '2', name: 'Product B', price: 12.99, quantity: 1 },
            ],
        },
        {
            id: '123457',
            date: '2022-10-26',
            total: 39.99,
            status: 'Cancelled',
            items: [
                { id: '3', name: 'Product C', price: 15.99, quantity: 1 },
            ],
        }
    ]);


    return (
        <OrderHistory/>
    );
};

export default OrderHistoryPage;
