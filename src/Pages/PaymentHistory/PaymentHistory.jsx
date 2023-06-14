import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const PaymentHistory = () => {
    const {user, loading} = useAuth();
    const [enroll, setEnroll] = useState();

    const url = `https://assignment-12-server-jet-iota.vercel.app/payment?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setEnroll(data))

    }, [url,loading]);

    return (
        <div>
            <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>All Added Class</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        enroll &&
                        enroll
                          .slice()
                          .sort((a, b) => new Date(b.payment.date) - new Date(a.payment.date))
                          .map((enrollItem) => (
                            <tr key={enrollItem._id} className="bg-base-200">
                              <td>{enrollItem.payment.transactionId}</td>
                              <td>{enrollItem.payment.date}</td>
                              <td>{enrollItem.payment.items.length}</td>
                              <td>{enrollItem.payment.price} $</td>
                              <td>{enrollItem.payment.status}</td>
                            </tr>
                          ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;

