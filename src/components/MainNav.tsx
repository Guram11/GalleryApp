import React from "react";
import { Link, Outlet } from "react-router-dom";
import Search from "./Search";
import { useAppContext } from "../Context/Context";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const MainNav: React.FC = () => {
  const { modalOpen } = useAppContext();

  return (
    <>
      {modalOpen && <Modal />}
      {modalOpen && <Backdrop />}
      <div className="p-24 pb-0 bg-gradient-to-br from-from to-to max-[1100px]:p-0">
        <header
          className="flex justify-between items-center h-[12rem]  bg-[#f9f5f3] rounded-t-lg
           max-[600px]:flex-col max-[600px]:h-[22rem]"
        >
          <h1 className="text-7xl text-[#786b67] py-12 pl-20 max-[1300px]:text-5xl max-[800px]:text-4xl max-[800px]:pl-4">
            <Link to={"/"}>GalleryApp</Link>
          </h1>
          <div className="pl-[12rem] max-[1300px]:pl-0 max-[600px]:pb-4">
            <Search />
          </div>
          <div className="flex">
            <Link
              className="uppercase text-3xl
            font-semibold bg-[#f9f5f3] py-[4.75rem] px-20 text-[#786b67] font-body tracking-wider
             transition-all duration-200 hover:bg-[#f2efee] max-[1500px]:px-16 max-[1300px]:px-8 max-[1300px]:text-2xl
             max-[800px]:text-xl max-[800px]:px-4 max-[600px]:py-10 max-[600px]:px-12"
              to={"/"}
            >
              Homepage
            </Link>
            <Link
              className=" uppercase text-3xl
              font-semibold bg-[#f9f5f3] py-[4.75rem] px-20 text-[#786b67] font-body tracking-wider 
              transition-all duration-200 hover:bg-[#f2efee] max-[1500px]:px-16 max-[1300px]:px-8 max-[1300px]:text-2xl
              max-[800px]:text-xl max-[800px]:px-4 max-[600px]:py-10 max-[600px]:px-12"
              to={"/history"}
            >
              History
            </Link>
          </div>
        </header>
        <div className="bg-white h-[100vh] rounded-b-lg overflow-scroll overflow-x-hidden p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainNav;
