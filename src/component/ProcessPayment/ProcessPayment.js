import React from 'react';
import {  Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardFrom from './SimpleCardFrom';
import SplitCardForm from './SpilitCardForm';


const stripePromise = loadStripe('pk_test_51IeFzlLP8WpDJmrkZ2kccn5VfEJc4KERZEcwkZlXlzYr1YiZAOzIxPh6Pl8sPT5H4bwlioVS1ZzqmPgBiZxLpRc20032X0L0Jd');


const ProcessPayment = ({shippingData}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardFrom shippingData={shippingData}></SimpleCardFrom>
            {/* <SplitCardForm></SplitCardForm> */}
        </Elements>
    );
};

export default ProcessPayment;