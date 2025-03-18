import  { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

 
const stripePromise = loadStripe('pk_test_51R41GMRrqIKYoWMOTt02YbWfsMnNWN4ebKAR0xPpaVnKImk1Btqoo1WHK7AdSgCvAl0Hs3VP3gHKyUOlKdHFQkVR00FmUtHz1W'); // Replace with your Stripe publishable key

 
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;  
    }

    setLoading(true);
    setError(null);

    try {
     
      const response = await axios.post('https://basic-e-commerce-y6t9.onrender.com/payment', {
        amount: 1000, // Amount in cents (e.g., $10.00)
      });

      
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        response.data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (stripeError) {
        setError(stripeError.message);
        console.error('Payment Error:', stripeError);
        alert('Payment failed. Please try again.');
      } else {
        console.log('Payment Successful:', paymentIntent);
        alert('Payment successful!');
      }
    } catch (err) {
      console.error('API Error:', err);
      setError('An error occurred. Please try again.');
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    <br />
     <p>use as card number    4242 4242 4242 4242 <br /> and add any thing in expire date ,<br /> cvv and <br /> zip in 5 letter</p>
    </form>
  );
};

 
const Checkout = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;