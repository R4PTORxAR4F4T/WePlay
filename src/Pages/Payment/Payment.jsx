import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const {user, loading} = useAuth();
    const [cart, setCart] = useState();

    const url = `https://assignment-12-server-jet-iota.vercel.app/carts?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCart(data))

    }, [url,loading]);

    const total = cart ? cart.reduce((sum, cartitem) => sum + parseFloat(cartitem.price), 0) : 0;

    return (
        <div className="w-5/6">
            <Helmet>
                <title>WePlay | payment</title>
            </Helmet>
            <div>
            <p className='text-4xl text-center border-b pb-4 border-white text-orange-300'>Payment</p>
            <p className="text-center my-5 text-orange-300">Your total is : {total} $</p>
            </div>
        <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={total}></CheckoutForm>
        </Elements>
        </div>
    );
};

export default Payment;