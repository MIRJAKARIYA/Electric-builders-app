import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import AdminCreationModal from "./AdminCreationModal";
import MakeSingleAdmin from "./MakeSingleAdmin";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(false);
  const [makeAdminModal, setMakeAdminModal] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://pure-mountain-19265.herokuapp.com/allUsers", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("ACCESS_TOKEN");
          navigate("/home");
        }
        return res.json();
      })
      .then((data) => setUsers(data));
  }, [reload, navigate]);
  return (
    <>
      <h1 className="text-2xl text-center text-red-700 font-semibold mt-5">
        Make Admin
      </h1>
      <div className="mr-auto ml-auto w-[95%] max-w-[700px] mt-5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <MakeSingleAdmin
                  setMakeAdminModal={setMakeAdminModal}
                  user={user}
                  key={user._id}
                ></MakeSingleAdmin>
              ))}
            </tbody>
          </table>
        </div>
        {makeAdminModal && (
          <AdminCreationModal
            makeAdminModal={makeAdminModal}
            setMakeAdminModal={setMakeAdminModal}
            reload={reload}
            setReload={setReload}
          ></AdminCreationModal>
        )}
      </div>
    </>
  );
};

export default MakeAdmin;
