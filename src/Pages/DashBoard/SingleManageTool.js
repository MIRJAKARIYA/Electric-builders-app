import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";

const SingleManageTool = ({ tool, setUpdateModal }) => {
  const {
    toolName,
    img,
    description,
    minimumOrderQuantity,
    availableQuantity,
    price,
    _id,
  } = tool;
  return (
    <tr className="hover">
      <td>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>{toolName}</td>
      <td>{minimumOrderQuantity}</td>
      <td>{availableQuantity}</td>
      <td>${price}</td>
      <td>
        <div className="flex">
          <label
            htmlFor="my-modal-tool-update"
            onClick={() => setUpdateModal(_id)}
            className="text-2xl text-primary"
          >
            <MdSystemUpdateAlt />
          </label>
          <button className="text-2xl ml-2 text-red-700">
            <AiFillDelete />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SingleManageTool;
