import react, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardFrom = ({ shippingData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id);
      saveOrderDB()
      setPaymentError(null)
    }


    

  };


  const saveOrderDB=()=>{
    const paymentId = paymentSuccess;
      
      const evenData = {
        orderDetails: shippingData,
        paymentId: paymentId,
        orderDate: new Date()
      };
      const uri = `https://fierce-ravine-06382.herokuapp.com/addOrders`;
      fetch(uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(evenData)
      })
  
      console.log(evenData);
  
    
  }

  console.log(paymentSuccess);
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement className="form-control" />
        {
          paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
        }

        {
          paymentSuccess && <p style={{ color: 'green' }}>{'Payment Successful'}</p>
        }
        <br />
        <button type="submit"  className="form-control btn btn-secondary w-75 " disabled={!stripe}>
          Payment
        </button>
      </form>

    </div>
  );
};

export default SimpleCardFrom;