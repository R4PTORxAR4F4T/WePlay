import {useEffect, useState} from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = ({cart,price}) => {

    // console.log(cart)
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(()=>{
        
        if(price>0){
            fetch("http://localhost:5000/create-payment-intent",{
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({price})
            })
            .then(res=>res.json())
            .then((data)=>{
                setClientSecret(data.clientSecret);
            })
        }
    },[price])

    const handleSubmit = async(event)=>{
        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card===null){
            return
        }

        console.log("card",card);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message.clientSecret);
        }
        else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        setProcessing(false)
        if (confirmError) {
            setCardError(confirmError.message);
            return
        }

        console.log(paymentIntent);
        
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                status: 'service pending',
                items: cart,
            }
                fetch(`http://localhost:5000/payments?email=${user?.email}`,{
                    method: 'POST', 
                    headers: {
                        'content-type': 'application/json'
                    }, 
                    body: JSON.stringify({payment})
                })
                .then(res=>res.json())
                .then(res => {
                    console.log(res);
                    if (res.insertedId) {
                        console.log("success")
                    }
                })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className="btn btn-outline btn-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
        </div>
    );
};

export default CheckoutForm;