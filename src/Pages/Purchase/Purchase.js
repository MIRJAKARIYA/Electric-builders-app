import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const { toolId } = useParams();
  const [tool, setTool] = useState({});
  const [user] = useAuthState(auth);
  const [purchaseError, setPurchaseError] = useState("");
  const [minimuQuantity, setMinimumQuantity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://electric-bulders-server.vercel.app/getTool/${toolId}`)
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
    setPurchaseError("");
    if (e.target.value > tool.availableQuantity) {
      setPurchaseError(
        `**Order quantity can't not be greater than ${tool.availableQuantity}`
      );
    } else if (e.target.value < tool.minimumOrderQuantity) {
      setPurchaseError(
        `**Order quantity can't be less than ${tool.minimumOrderQuantity}`
      );
    }
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;
    const price = parseInt(quantity) * parseInt(tool.price);
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const purchaseData = {
      product: tool.toolName,
      quantity: quantity,
      price: price,
      img: tool.img,
      buyer: user.displayName,
      buyerEamil: user.email,
      phone: phone,
      address: address,
      purchaseDate: new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      status: "unpaid",
    };

    fetch("https://electric-bulders-server.vercel.app/purchased", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      },
      body: JSON.stringify(purchaseData),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("ACCESS_TOKEN");
          navigate("/home");
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) navigate(`/payment/${data.insertedId}`);
      });
  };

  return (
    <>
      <h1 className="text-center text-red-700 font-semibold text-5xl mt-10 mb-5">
        Purchase the tool
      </h1>
      <div className="grid md:grid-cols-2 w-[95%]  shadow-xl bg-base-300 max-w-[1400px] p-3 rounded-xl mx-auto">
        <div className="h-[650px] w-full md:pr-5">
          <img
            src={tool.img}
            className="h-full w-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className="h-[650px] items-center w-full">
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
            <h1 className="mt-2 text-2xl text-green-700 text-semibold text-center underline">
              Place order
            </h1>
            <div className="mt-4">
              <form onSubmit={handlePurchase}>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <span className="text-sm font-semibold ml-1">
                      Buyer's Name:
                    </span>
                    <input
                      type="text"
                      value={user.displayName}
                      placeholder=""
                      disabled={true}
                      className="input input-bordered input-primary w-full max-w-xs"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold ml-1">
                      Buyer's Email:
                    </span>
                    <input
                      type="email"
                      value={user.email}
                      disabled={true}
                      placeholder="Type here"
                      className="input input-bordered input-primary w-full max-w-xs"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 mt-2">
                    <div>
                      <span className="text-sm font-semibold ml-1">
                        Phone Number:
                      </span>
                      <input
                        type="number"
                        name="phone"
                        placeholder="Your phone number"
                        className="input input-bordered input-primary w-full max-w-xs"
                        required
                      />
                    </div>
                    <div>
                      <span className="text-sm font-semibold ml-1">
                        Enter quantity:
                      </span>
                      <input
                        min={0}
                        type="number"
                        placeholder=""
                        name="quantity"
                        onChange={handleQuantity}
                        value={minimuQuantity}
                        className="input input-bordered input-primary w-full max-w-xs"
                      />
                      <small className="text-red-600 font-semibold">
                        {purchaseError}
                      </small>
                    </div>
                  </div>
                  <div className="flex-1 mt-2">
                    <span className="text-sm font-semibold ml-1">
                      Enter Address:
                    </span>

                    <textarea
                      type="text"
                      placeholder="Enter your address"
                      required
                      name="address"
                      className="input input-bordered input-primary w-full max-w-xs h-[120px]"
                    />
                  </div>
                </div>

                <div className="mt-2 text-center">
                  <button
                    type="submit"
                    disabled={purchaseError ? true : false}
                    className="btn btn-primary w-full max-w-xs"
                  >
                    Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
