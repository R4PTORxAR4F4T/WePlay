import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import useAuth from "../../hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const {user, loading} = useAuth();
    const [cart, setCart] = useState();

    const url = `http://localhost:5000/carts?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCart(data))

    }, [url,loading]);

    const total = cart ? cart.reduce((sum, cartitem) => sum + parseFloat(cartitem.price), 0) : 0;

    return (
        <div className="w-5/6">
            <div>
            <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>Payment</p>
        </div>
        <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={total}></CheckoutForm>
        </Elements>
        </div>
    );
};

export default Payment;