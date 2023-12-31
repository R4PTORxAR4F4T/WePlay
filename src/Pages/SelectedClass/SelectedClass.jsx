import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SelectedClass = () => {
    const {user, loading} = useAuth();
    const [cart, setCart] = useState();

    const url = `https://assignment-12-server-jet-iota.vercel.app/carts?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCart(data))

    }, [url,loading]);

    const total = cart ? cart.reduce((sum, cartitem) => sum + parseFloat(cartitem.price), 0) : 0;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-jet-iota.vercel.app/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>WePlay | Selected Class</title>
            </Helmet>
            <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>All Added Class</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Instractor</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {cart && cart.map((cartitem, index) =>

                            <tr key={cartitem._id} className="bg-base-200">
                                <td>{index+1}</td>
                                <td>{cartitem.cName}</td>
                                <td>{cartitem.iName}</td>
                                <td>{cartitem.price} $</td>
                                <td>
                                    <button onClick={() => handleDelete(cartitem.class_id)} className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="divider"></div> 
            <div className='text-right'> 
            <p className='text-right'>Total Price : {total} $</p>
                <Link to="/dashboard/payment">
                    <button className="btn btn-outline btn-sm">Pay</button>
                </Link>
            </div>
        </div>
    )}

    export default SelectedClass