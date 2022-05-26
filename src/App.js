import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Shared/RequireAuth";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyOrders from "./Pages/DashBoard/MyOrders";
import AddReview from "./Pages/DashBoard/AddReview";
import MyProfile from "./Pages/DashBoard/MyProfile";
import Payment from './Pages/Payment/Payment';
import ManageAllOrders from "./Pages/DashBoard/ManageAllOrders";
import ManageTools from "./Pages/DashBoard/ManageTools";
import AddTool from "./Pages/DashBoard/AddTool";
import MakeAdmin from "./Pages/DashBoard/MakeAdmin";
import RequireAdmin from "./Pages/Login/RequireAdmin";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/myportfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>

        <Route path="/dashboard" element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>
            <Route path='myorders' element={
              <RequireAuth>
                <MyOrders></MyOrders>
              </RequireAuth>
            }></Route>
            <Route path="addareview" element={
              <RequireAuth>
                <AddReview></AddReview>
              </RequireAuth>
            }></Route>
            <Route index element={
              <RequireAuth>
                <MyProfile></MyProfile>
              </RequireAuth>
            }></Route>
            <Route path="manageorders" element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }></Route>
            <Route path="managetools" element={
              <RequireAdmin>
                <ManageTools></ManageTools>
              </RequireAdmin>
            }></Route>
            <Route path="addtool" element={<RequireAdmin>
              <AddTool></AddTool>
            </RequireAdmin>}></Route>
            <Route path="makeadmin" element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }></Route>
        </Route>
        <Route path="/payment/:productId" element={<Payment></Payment>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
