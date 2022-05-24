import React from "react";
import { AiFillWarning } from 'react-icons/ai'

const OrderCancelModal = ({modalData,setModalData,setReload}) => {
    console.log(modalData)

    
  return (
    <>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <div className="text-9xl flex justify-center text-red-700">
              <AiFillWarning></AiFillWarning>
          </div>
          <p className="text-center text-red-700 text-xl font-semibold">Are you sure you want to cancel the order?</p>
          <p class="py-4 text-center font-semibold">
            Write "CANCEL" in the box to proceed
          </p>
          <input type="text" className="border-2 border-black " />
          <div class="border-2 flex w-[70%] mx-auto">
              <button className="btn flex-1 mr-4 bg-red-700 hover:bg-red-800 duration-300 border-0">YES CANCEL</button>
            <label for="my-modal-6" class="btn flex-1">
              No i Don't
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCancelModal;
