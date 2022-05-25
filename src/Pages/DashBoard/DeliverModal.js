import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DeliverModal = ({ deliverModal, setDeliverModal, reload, setReload }) => {
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/purchasedSingle/${deliverModal}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [deliverModal]);

  const handleDeliver = () => {
    fetch(`http://localhost:5000/deliverConfirm/${deliverModal}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ delivery: "shipped" }),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(`http://localhost:5000/getTool?toolName=${order.product}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ quantity: order.quantity }),
        })
          .then((res) => res.json())
          .then((data) => {
              setDeliverModal(null)
              setReload(!reload)
              toast.success('Order shipped successfully')
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
