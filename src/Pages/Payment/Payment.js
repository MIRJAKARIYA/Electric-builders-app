import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [stripePromise, setStripePromise] = useState(() => loadStripe("pk_test_51L0YXaEgVD8phfXM8dDakoBtn1Khl0MXIGTMgEmOmLbjQEkziGw7qDNQdemfQxRhX1f4p7SrfRamvLAw5vrCLvH500J9J8y4ji"))
    useEffect(() => {
      fetch(`http://localhost:5000/purchasedSingle/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [productId]);

    

    return (
        <div>
      <h1>PAY FOR: {product.product}</h1>
      <p>Price: $ {product.price}</p>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">


          <Elements stripe={stripePromise}>
            <CheckoutForm product={product} />
          </Elements>


        </div>
      </div>
    </div>
    );
};

export default Payment;