import React from "react";

const MakeAdmin = () => {
  return (
    <>
      <h1>Make Admin</h1>
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
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
