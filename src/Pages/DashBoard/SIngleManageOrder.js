import React from "react";

const SIngleManageOrder = ({ order, index, setDeliverModal, setDeleteModal }) => {
  const {
    buyer,
    buyerEamil,
    delivery,
    price,
    purchaseDate,
    product,
    quantity,
    status,
    _id,
  } = order;
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{buyer}</td>
      <td>{buyerEamil}</td>
      <td>{product}</td>
      <td>{purchaseDate}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>{status}</td>
      <td>{delivery ? delivery : "not eligible"}</td>
      <td>
        {
            delivery === 'shipped'? <p className="text-green-700 font-semibold">Product deliverd</p>:<div>
            {
                delivery === 'pending' && <label
                htmlFor="my-modal-deliver"
                className="btn modal-button btn-xs mr-2"
                onClick={() => setDeliverModal(_id)}
              >
                deliver
              </label>
            }
          {status === "unpaid" && (
              <label htmlFor="my-modal-order-delete" className="btn btn-xs btn-error modal-button" onClick={()=>setDeleteModal(order)}>cancel</label>
            )}
            
          </div>
        }
      </td>
    </tr>
  );
};

export default SIngleManageOrder;
