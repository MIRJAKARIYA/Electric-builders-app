import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const DeliverModal = ({ deliverModal, setDeliverModal, reload, setReload }) => {
  const [order, setOrder] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://electric-bulders-server.vercel.app/purchasedSingle/${deliverModal}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [deliverModal]);

  const handleDeliver = () => {
    fetch(
      `https://electric-bulders-server.vercel.app/deliverConfirm/${deliverModal}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ delivery: "shipped" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        fetch(
          `https://electric-bulders-server.vercel.app/getTool?toolName=${order.product}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
            },
            body: JSON.stringify({ quantity: order.quantity }),
          }
        )
          .then((res) => {
            if (res.status === 401 || res.status === 403) {
              signOut(auth);
              localStorage.removeItem("ACCESS_TOKEN");
              navigate("/home");
            }
            return res.json();
          })
          .then((data) => {
            if (data.acknowledged) {
              setDeliverModal(null);
              setReload(!reload);
              toast.success("Order shipped successfully");
            }
          });
      });
  };
  return (
    <>
      <input type="checkbox" id="my-modal-deliver" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="w-[200px] mx-auto">
            <img src={order.img} alt="" />
          </div>
          <h3 className="font-bold text-lg">Tool: {order.product}</h3>
          <div className="py-4">
            <p>Quantity Purchased: {order.quantity}</p>
            <p>Total Price: ${order.price}</p>
            <p>Buyer: {order.buyer}</p>
            <p>Buyer Email: {order.buyerEamil}</p>
            <p>Buyer Address: {order.address}</p>
            <p>Purchased Date: {order.purchaseDate}</p>
            <p>status: {order.status}</p>
          </div>
          <div className="modal-action flex">
            <button className="btn btn-primary flex-1" onClick={handleDeliver}>
              Deliver
            </button>
            <label htmlFor="my-modal-deliver" className="btn btn-error flex-1">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliverModal;
