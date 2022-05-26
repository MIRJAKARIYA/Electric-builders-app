import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import DeleteToolModal from "./DeleteToolModal";
import SingleManageTool from "./SingleManageTool";
import UpdateToolModal from "./UpdateToolModal";

const ManageTools = () => {
  const [tools, setTools] = useState([]);
  const [reload, setReload] = useState(false);
  const [reversedTools, setReversedTools] = useState([]);
  const [updateModal, setUpdateModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState("");
  const navigate = useNavigate();
  console.log(deleteModal)
  useEffect(() => {
    fetch("http://localhost:5000/getTools",{
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
      .then((data) =>{
        console.log(data)

          setTools(data)

      });
  }, [reload,navigate]);
  useEffect(()=>{
    if(tools.length > 0){
        setReversedTools(tools.reverse());
    }
  },[tools])
  return (
    <>
      <h1 className="text-center text-2xl text-red-700 font-semibold my-10">Manage Tools</h1>
      <div className="mr-auto lg:mr-0 ml-auto w-[95%] px-5">
        <div className="overflow-x-auto">
          <table className="table w-full max-w-[1200px] mx-auto">
            <thead>
              <tr>
                <th>
                  Thumb
                </th>
                <th>Tool</th>
                <th>Minimum Order Quantity</th>
                <th>Available Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                    reversedTools.map(tool => <SingleManageTool key={tool._id} setDeleteModal={setDeleteModal} setUpdateModal={setUpdateModal} tool={tool}></SingleManageTool>)
                }
            </tbody>
          </table>
        </div>
        {
            updateModal && <UpdateToolModal reload={reload} setReload={setReload} updateModal={updateModal} setUpdateModal={setUpdateModal}></UpdateToolModal>
        }
        {
            deleteModal && <DeleteToolModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} reload={reload} setReload={setReload}></DeleteToolModal>
        }
      </div>
    </>
  );
};

export default ManageTools;
