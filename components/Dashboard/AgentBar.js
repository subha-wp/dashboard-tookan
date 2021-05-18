import { BiSearch } from "react-icons/bi";

const AgentBar = () => {
  return (
    <div className="bg-gray-100" style={{ height: "100vh" }}>
      <div className="flex items-center justify-between px-2 py-1 text-lg text-white bg-blue-600 w-96">
        <h2>Task</h2>
        <BiSearch />
      </div>
      <div className="flex items-center justify-between px-2 py-1 border-b-2 border-gray-200">
        <div className="flex items-center space-x-1 text-sm text-gray-400 uppercase border-b border-gray-100 cursor-pointer hover:text-black hover:border-black focus:border-black focus:text-black">
          <p>0</p>
          <p>Free</p>
        </div>
        <div className="flex items-center space-x-1 text-sm text-gray-400 uppercase border-b border-gray-100 cursor-pointer hover:text-black hover:border-black focus:border-black focus:text-black">
          <p>0</p>
          <p>Busy</p>
        </div>
        <div className="flex items-center space-x-1 text-sm text-gray-400 uppercase border-b border-gray-100 cursor-pointer hover:text-black hover:border-black focus:border-black focus:text-black">
          <p>0</p>
          <p>Inactive</p>
        </div>
      </div>
    </div>
  );
};

export default AgentBar;
