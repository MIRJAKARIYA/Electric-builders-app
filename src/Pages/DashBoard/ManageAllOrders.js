import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    useEffect(()=>{
        fetch('http://localhost:5000/purchased',{
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
    },[reload,navigate])
    useEffect(()=>{
        if(orders.length>0){
            setReversedOrders(orders.reverse())
        }
    },[orders])
    
  return (
    <>
      <h1>Manage All Orders</h1>
      <div className="mr-auto lg:mr-0 ml-auto w-[95%] px-5 mt-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
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
