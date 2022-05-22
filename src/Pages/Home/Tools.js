import React from "react";
import { useQuery } from "react-query";
import SingleTool from "./SingleTool";

const Tools = () => {
  const {
    isLoading,
    error,
    data: tools,
  } = useQuery("tools", () =>
    fetch("http://localhost:5000/getTools").then((res) => res.json())
  );



  return (
   <div className="max-w-[1200px] mx-auto mt-10">
       <h1 className="text-center mb-8 text-2xl font-semibold text-red-700">Tools</h1>
        <div className="grid grid-cols-3 justify-items-center gap-5">
        {
            tools?.slice(0,6).map(tool => <SingleTool key={tool._id} tool={tool}></SingleTool>)
        }
    </div>
   </div>
  );
};

export default Tools;
