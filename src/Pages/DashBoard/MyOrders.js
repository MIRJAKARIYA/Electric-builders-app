import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useOrders from '../../hooks/useOrders';
import OrderCancelModal from './OrderCancelModal';
import SingleOrder from './SingleOrder';

const MyOrders = () => {
    const [user] =useAuthState(auth);
    const [reload, setReload] = useState(false);
    const query = `buyerEamil=${user?.email}`;
    const orders = useOrders(query,reload);
    const [modalData, setModalData] = useState('')
    return (
        <div className='max-w-[1200px] mr-auto lg:mr-0 ml-auto w-[95%] px-5 mt-5'>
            <h1 className='text-center text-3xl font-bold text-red-700 mb-5'>Your Orders</h1>
            <div className={`${orders.length <2 ? 'flex justify-center':orders.length <3?'flex md:flex-row flex-col justify-center':'grid lg:grid-cols-3 md:grid-cols-2'} gap-5`}>
                {
                    orders.length>0 ? 
                        orders.map(order => <SingleOrder setModalData={setModalData} key={order._id} order={order}></SingleOrder>)
                    :
                    <h1 className='text-xl font-semibold mt-10'>You didn't order anything yet🙂</h1>
                }
            </div>
            
                 {
                     modalData && <OrderCancelModal modalData={modalData} setModalData={setModalData} reload={reload} setReload={setReload}></OrderCancelModal>
                 }
            
        </div>
    );
};

export default MyOrders;