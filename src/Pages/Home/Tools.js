import React, { useState } from "react";
import { useQuery } from "react-query";
import SingleTool from "./SingleTool";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

const Tools = () => {
    const [sliceCount, setSliceCount] = useState(6);
    const handleShowMore = () =>{
        setSliceCount(10)
    }
    const handleShowLess = () =>{
        setSliceCount(6)
    }
  const {
    isLoading,
    error,
    data: tools,
  } = useQuery("tools", () =>
    fetch("http://localhost:5000/getTools").then((res) => res.json())
  );



  return (
   <div className="max-w-[1200px] mx-auto mt-10 w-[95%]">
       <h1 className="text-center mb-5 text-2xl font-semibold text-red-700">Tools</h1>
        <div className="grid mb-2 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5">
        {
            tools?.slice(0,sliceCount).map(tool => <SingleTool key={tool._id} tool={tool}></SingleTool>)
        }
    </div>
    {
        sliceCount === 6 ? <button className="text-blue-800 font-semibold mx-auto block" onClick={handleShowMore}><div className="flex items-center gap-1"><span>Show more</span><BsFillArrowDownCircleFill/></div></button>
        :
        <button className="text-blue-800 font-semibold mx-auto block" onClick={handleShowLess}><div className="flex items-center gap-1"><span>Show less</span><BsFillArrowUpCircleFill/></div></button>
    }
   </div>
  );
};

export default Tools;
