import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const { toolId } = useParams();
  const [tool, setTool] = useState({});
  const [user] = useAuthState(auth);
  const [purchaseError, setPurchaseError] = useState("");
  const [minimuQuantity, setMinimumQuantity] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/getTool/${toolId}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolId]);

  useEffect(() => {
    if (tool.description) {
      setMinimumQuantity(tool.minimumOrderQuantity);
    }
  }, [tool]);

  const handleQuantity = (e) => {
    setMinimumQuantity(e.target.value);
    setPurchaseError('')
    if(e.target.value > tool.availableQuantity){
        setPurchaseError(`**Order quantity can't not be greater than ${tool.availableQuantity}`)
    }
    else if(e.target.value < tool.minimumOrderQuantity){
        setPurchaseError(`**Order quantity can't be less than ${tool.minimumOrderQuantity}`)
    }
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;
    const purchaseData = {
        product:tool.toolName,
        quantity:quantity,
        buyer: user.displayName,
        buyerEamil: user.email,
        status: 'unpaid'
    }

    fetch('http://localhost:5000/purchased',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(purchaseData)
    })
    .then(res => res.json())
    .then(data => console.log(data))



  };

  return (
    <>
      <h1 className="text-center text-red-700 font-semibold text-5xl mt-10 mb-5">
        Purchase the tool
      </h1>
      <div className="grid grid-cols-2 w-[95%] shadow-xl bg-base-300 max-w-[1400px] p-3 rounded-xl mx-auto">
        <div className="h-[500px] w-full pr-5">
          <img
            src={tool.img}
            className="h-full w-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className="h-[500px] items-center w-full">
          <h1 className="text-4xl text-blue-700 font-semibold">
            {tool.toolName}
          </h1>
          <p className="mt-3">{tool.description}</p>
          <p className="mt-1 text-lg">
            <span className="mr-1 text-blue-700 font-semibold">
              Minimum order quantity:
            </span>
            {tool.minimumOrderQuantity}
          </p>
          <p className="mt-1 text-lg">
            <span className="mr-1 text-blue-700 font-semibold">
              Available Quantity:
            </span>
            {tool.availableQuantity}
          </p>
          <p className="mt-1 text-lg">
            <span className="mr-1 text-blue-700 font-semibold">
              Price per unit:
            </span>
            ${tool.price}
          </p>
          <div>
            <div className="mt-4">
              <h1 className="mt-2 text-2xl text-green-700 text-semibold underline">
                Buyer Info.
              </h1>
              <p><span className="text-orange-900 font-semibold underline text-lg">Name:</span> {user.displayName}</p>
              <p><span className="text-orange-900 font-semibold underline text-lg">Email:</span> {user.email}</p>
            </div>
            <div className="mt-4">
              <form onSubmit={handlePurchase}>
                <p className="font-semibold">Enter quantity:</p>
                <div className="flex items-center w-full">
                  <div>
                    <input
                    min={0}
                      type="number"
                      placeholder="Type here"
                      name='quantity'
                      onChange={handleQuantity}
                      value={minimuQuantity}
                      className="input input-bordered input-primary w-[290px]"
                    />
                    <p></p>
                  </div>
                  
                  <button className="btn btn-primary ml-2" disabled={purchaseError?true:false} type="submit">
                    Buy Now
                  </button>
                  
                </div>
                <small className="ml-2 text-red-600 font-semibold">{purchaseError}</small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
