import { CgMenuLeft, CgMenuGridR } from "react-icons/cg";
import { BiMapAlt, BiListUl } from "react-icons/bi";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineReload, AiFillBell } from "react-icons/ai";
import { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="flex items-center justify-between p-5 text-white bg-black h-14">
      {/* Logo div */}
      <div className="flex items-center space-x-2">
        <CgMenuLeft
          className="text-4xl cursor-pointer"
          onClick={() => setShowNavbar(true)}
        />
        <img
          src="https://app.tookanapp.com/app/img/inner_logo.svg"
          height="70px"
        />
      </div>
      {/* Function div */}
      <div className="items-center hidden space-x-2 lg:flex">
        <div className="flex items-center border border-white rounded-md">
          <div className="flex items-center px-2 border-r border-white cursor-pointer">
            <p>
              <BiMapAlt />
            </p>
            <p>MAP</p>
          </div>
          <div className="flex items-center px-2 cursor-pointer">
            <p>
              <BiListUl />
            </p>
            <p>List</p>
          </div>
        </div>
        <div className="flex items-center border border-white rounded-md ">
          <div className="flex items-center px-2 border-r border-white">
            <p>14, May 3:00AM - 8:00 pm</p>
          </div>
          <div className="flex items-center p-1 cursor-pointer">
            <p>
              <RiArrowDownSFill />
            </p>
          </div>
        </div>
        <div className="flex items-center border border-white rounded-md">
          <div className="flex items-center px-2 border-r border-white">
            <p>All Teams</p>
          </div>
          <div className="flex items-center p-1 cursor-pointer">
            <p>
              <RiArrowDownSFill />
            </p>
          </div>
        </div>
      </div>
      <div></div>
      {/* Button Function */}

      <div className="flex items-center space-x-4">
        <div className="items-center hidden text-lg font-medium text-black bg-white rounded-lg lg:flex justify-evenly ">
          <div className="flex items-center px-2 py-1 border-r border-black">
            <p className="">Create Task</p>
          </div>
          <div className="flex items-center p-1 cursor-pointer ">
              <RiArrowDownSFill />
          </div>
        </div>
        <div className="flex items-center space-x-2 text-3xl">
          <CgMenuGridR />
          <AiOutlineReload />
          <AiFillBell />
        </div>
      </div>

      {showNavbar && (
        <div
          className="absolute top-0 left-0 z-20 px-5 py-1 text-white bg-black"
          style={{ height: "100vh" }}
        >
          <div className="flex items-center space-x-2">
            <CgMenuLeft
              className="text-4xl"
              onClick={() => setShowNavbar(false)}
            />
            <img
              src="https://app.tookanapp.com/app/img/inner_logo.svg"
            />
          </div>
          {/* Navbar Data will show Here With Map Method */}
          <div onClick={() => setShowNavbar(false)}>
            <NavBar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
