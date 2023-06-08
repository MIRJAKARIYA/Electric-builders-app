import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [stripePromise, setStripePromise] = useState(() =>
    loadStripe("pk_test_51L0YXaEgVD8phfXM8dDakoBtn1Khl0MXIGTMgEmOmLbjQEkziGw7qDNQdemfQxRhX1f4p7SrfRamvLAw5vrCLvH500J9J8y4ji")
  );
  useEffect(() => {
    fetch(
      `https://electric-bulders-server.vercel.app/purchasedSingle/${productId}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <>
      <div className="max-w-[500px] mx-auto mt-20 p-10 rounded-lg bg-slate-800">
        <h1 className="text-white">
          <span className="font-semibold text-yellow-500">PAY FOR:</span>{" "}
          {product?.product}
        </h1>
        <p className="text-white">
          <span className="font-semibold text-yellow-500">Price:</span> ${" "}
          {product?.price}
        </p>
        <p className="text-white">
          <span className="font-semibold text-yellow-500">Quantity:</span>{" "}
          {product?.quantity}
        </p>
        <p className="text-white">
          <span className="font-semibold text-yellow-500">Buyer:</span>{" "}
          {product?.buyer}
        </p>
        <p className="text-white">
          <span className="font-semibold text-yellow-500">Buyer Email:</span>{" "}
          {product?.buyerEamil}
        </p>
        <p className="text-white">
          <span className="font-semibold text-yellow-500">Phone:</span>{" "}
          {product?.phone}
        </p>
        <div className="card w-96  bg-base-100 mx-auto shadow-xl mt-5">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm product={product} />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
