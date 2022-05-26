import React, { useEffect, useState } from "react";
import AdminCreationModal from "./AdminCreationModal";
import MakeSingleAdmin from "./MakeSingleAdmin";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [makeAdminModal, setMakeAdminModal] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:5000/allUsers')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[reload])
  return (
    <>
      <h1 className="text-2xl text-center text-red-700 font-semibold mt-5">Make Admin</h1>
      <div className="mr-auto ml-auto w-[95%] max-w-[700px] mt-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => <MakeSingleAdmin setMakeAdminModal={setMakeAdminModal} user={user} key={user._id}></MakeSingleAdmin>)
              }
            </tbody>
          </table>
        </div>
        {
          makeAdminModal && <AdminCreationModal makeAdminModal={makeAdminModal} setMakeAdminModal={setMakeAdminModal} reload={reload} setReload={setReload}></AdminCreationModal>
        }
      </div>
    </>
  );
};

export default MakeAdmin;
