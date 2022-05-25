import React, { useEffect, useState } from "react";
import MakeSingleAdmin from "./MakeSingleAdmin";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [makeAdminModal, setMakeAdminModal] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:5000/allUsers')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <>
      <h1>Make Admin</h1>
      <div className="mr-auto lg:mr-0 ml-auto w-[95%] px-5 mt-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => <MakeSingleAdmin user={user} key={user._id}></MakeSingleAdmin>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
