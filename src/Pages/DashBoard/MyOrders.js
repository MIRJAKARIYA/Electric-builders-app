import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useOrders from '../../hooks/useOrders';
import SingleOrder from './SingleOrder';

const MyOrders = () => {
    const [user] =useAuthState(auth);
    const [reload, setReload] = useState(false);
    const query = `buyerEamil=${user?.email}`;
    const orders = useOrders(query,reload);
    console.log(orders)
    return (
        <div className='border-2 border-red-200 max-w-[1200px] mr-auto lg:mr-0 ml-auto w-[95%] px-5'>
            <h1>This is my orders</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    orders.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;