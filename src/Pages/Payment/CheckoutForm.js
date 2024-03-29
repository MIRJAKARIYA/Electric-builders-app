import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [proccessing, setProccessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { price, buyer, _id, status } = product;

  useEffect(() => {
    if (price > 999999.99) {
      setCardError("Stripe payment cannot exceed $999999.99");
    } else {
      fetch("https://electric-bulders-server.vercel.app/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price: price }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProccessing(true);

    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyer,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProccessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("Congrates! your payment is completed");

      //update data in backend
      const payment = {
        transactionId: paymentIntent.id,
        delivery: "pending",
      };
      fetch(
        `https://electric-bulders-server.vercel.app/purchasedSingle/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setProccessing(false);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-success btn-sm mt-4"
          disabled={
            !stripe ||
            !clientSecret ||
            success ||
            cardError ||
            status === "paid"
          }
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {proccessing && <p>loading...</p>}
      {success && (
        <div>
          <p className="text-green-500">{success}</p>

          <p>
            Your transaction Id:{" "}
            <span className="text-orange-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
      {product.transactionId && (
        <div>
          <p className="text-green-500">Your payment is completed.</p>
          <p>
            Your transaction Id:{" "}
            <span className="text-orange-500 font-bold">
              {product.transactionId}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
