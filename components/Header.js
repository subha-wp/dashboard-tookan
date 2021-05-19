import { CgMenuLeft, CgMenuGridR } from "react-icons/cg";
import { BiMapAlt, BiListUl } from "react-icons/bi";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineReload, AiFillBell } from "react-icons/ai";
import { useState } from "react";
import NavBar from "./NavBar";
import Link from "next/link";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showCalender, setShowCalender] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [bulkTask, setBulkTask] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between p-5 text-white bg-black h-14">
      {/* Logo div */}
      <div className="flex items-center space-x-2">
        <CgMenuLeft
          className="text-4xl cursor-pointer"
          onClick={() => setShowNavbar(true)}
        />
        <Link href="/">
          <img
            src="https://app.tookanapp.com/app/img/inner_logo.svg"
            className="cursor-pointer"
          />
        </Link>
      </div>
      {/* Function div */}
      <div className="items-center hidden space-x-2 lg:flex">
        <div className="flex items-center border border-white rounded-md">
          <div className="flex items-center px-2 border-r border-white cursor-pointer">
            <BiMapAlt />
            <Link href="/dashboard">
              <a>MAP</a>
            </Link>
          </div>
          <div className="flex items-center px-2 cursor-pointer">
            <BiListUl />
            <Link href="/task">
              <a>List</a>
            </Link>
          </div>
        </div>
        <div className="flex items-center border border-white rounded-md ">
          <div className="flex items-center px-2 border-r border-white">
            <p>14, May 3:00AM - 8:00 pm</p>
          </div>
          <div className="relative flex items-center p-1 cursor-pointer">
            <RiArrowDownSFill onClick={() => setShowCalender(true)} />
            <div>
              {showCalender && (
                <div
                  className="absolute right-0 z-50 p-4 bg-white rounded-md w-36 top-6"
                  onClick={() => setShowCalender(false)}
                >
                  <h3 className="p-2 text-xl text-black">
                    Have To implement calender
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center border border-white rounded-md cursor-pointer">
          <div className="flex items-center px-2 border-r border-white">
            <p>All Teams</p>
          </div>
          <div className="relative flex items-center p-1cursor-pointer">
            <RiArrowDownSFill onClick={() => setShowTeam(true)} />
            <div>
              {showTeam && (
                <div
                  className="absolute right-0 z-50 space-y-1 bg-white rounded-md w-28 top-6"
                  onClick={() => setShowTeam(false)}
                >
                  <p className="px-1 text-sm text-black">Team Name1</p>
                  <p className="px-1 text-sm text-black">Team Name2</p>
                  <p className="px-1 text-sm text-black">Team Name3</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div></div>
      {/* Button Function */}

      <div className="flex items-center space-x-4 ">
        <div className="items-center hidden text-lg font-medium text-black bg-white rounded-lg lg:flex justify-evenly ">
          <div className="flex items-center px-2 py-1 border-r border-black">
            <p className="">Create Task</p>
          </div>
          <div className="relative flex items-center p-1 cursor-pointer ">
            <RiArrowDownSFill onClick={() => setBulkTask(true)} className="" />
            {bulkTask && (
              <div
                className="absolute right-0 z-50 space-y-1 bg-white rounded-md top-8 w-28"
                onClick={() => setBulkTask(false)}
              >
                <p className="px-1 py-1 text-sm text-black">Add Bulk Task</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 text-3xl">
          <div className="relative">
            <CgMenuGridR
              className="cursor-pointer "
              onClick={() => setShowMenu(true)}
            />
            {showMenu && (
              <div
                className="absolute right-0 z-50 p-4 bg-white rounded-md w-96 h-80 top-10"
                onClick={() => setShowMenu(false)}
              >
                <h3 className="p-2 text-xl text-black">Menu Options</h3>
              </div>
            )}
          </div>
          <AiOutlineReload onClick={refreshPage} className="cursor-pointer" />
          <AiFillBell className="cursor-pointer" />
        </div>
      </div>

      {showNavbar && (
        <div
          className="absolute top-0 left-0 z-50 px-5 py-1 text-white bg-black"
          style={{ height: "100vh" }}
        >
          <div className="flex items-center space-x-2">
            <CgMenuLeft
              className="text-4xl"
              onClick={() => setShowNavbar(false)}
            />
            <img src="https://app.tookanapp.com/app/img/inner_logo.svg" />
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
