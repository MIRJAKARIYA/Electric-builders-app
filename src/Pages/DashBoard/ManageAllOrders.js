import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import DeleteOrderModal from "./DeleteOrderModal";
import DeliverModal from "./DeliverModal";
import SIngleManageOrder from "./SIngleManageOrder";

const ManageAllOrders = () => {
    const navigate = useNavigate();
    const [reload, setReload] = useState(false);
    const [orders, setOrders] = useState([]);
    const [reversedOrders, setReversedOrders] = useState([]);
    const [deliverModal, setDeliverModal] = useState(null);
    const [deleteModal, setDeleteModal] = useState(null);   
    const [query, setQuery] = useState('')


    useEffect(()=>{
        fetch(`http://localhost:5000/adminPurchased?${query}`,{
          method:'GET',
          headers:{
            authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
          }
        })
        .then((res) => {
          console.log(res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("ACCESS_TOKEN");
            navigate("/home");
          }
          return res.json();
        })
        .then(data => {
            setOrders(data)
        })
    },[reload,navigate,query])
    useEffect(()=>{

            setReversedOrders(orders.reverse())


    },[orders])
    
  return (
    <>
      <h1 className="text-center mt-5 text-2xl font-semibold text-red-700">Manage All Orders</h1>
      <div className="text-center my-10">
      <button className="btn btn-warning btn-sm mr-4" onClick={()=>setQuery('delivery=pending')}>Pending orders</button>
      <button className="btn btn-success btn-sm mr-4" onClick={()=>setQuery('delivery=shipped')}>Shipped orders</button>
      <button className="btn btn-error btn-sm mr-4" onClick={()=>setQuery('status=unpaid')}>Unpaid orders</button>
      <button className="btn btn-accent btn-sm " onClick={()=>setQuery('')}>All orders</button>
      </div>
      <div className="mr-auto lg:mr-0 ml-auto w-[95%] px-5 mt-5">
        <div className="overflow-x-auto">
          {
            reversedOrders?.length === 0 ? <h1 className="text-xl text-red-700 text-center font-semibold">No order found</h1>:<table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Buyer</th>
                <th>Buyer Email</th>
                <th>Tool</th>
                <th>Purchased Date</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
                <th>Delivery</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                    reversedOrders?.map((order,index) => <SIngleManageOrder setDeliverModal={setDeliverModal} key={order._id} order={order} index={index} setDeleteModal={setDeleteModal}></SIngleManageOrder>)
                }
            </tbody>
          </table>
          }
        </div>
        {
            deliverModal && <DeliverModal reload={reload} setReload={setReload} deliverModal={deliverModal} setDeliverModal={setDeliverModal}></DeliverModal>
        }
        {
            deleteModal && <DeleteOrderModal reload={reload} setReload={setReload} deleteModal={deleteModal} setDeleteModal={setDeleteModal}></DeleteOrderModal>
        }
      </div>
    </>
  );
};

export default ManageAllOrders;
