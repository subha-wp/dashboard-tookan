import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import Head from "next/head";
import TaskBar from "../components/Dashboard/TaskBar";
import AgentBar from "../components/Dashboard/AgentBar";
import { useEffect, useState } from "react";
import Gmap from "../components/Dashboard/Gmap";

const dashboard = () => {
  const [showTaskBar, setShowTaskBar] = useState(false);
  const [showAgentBar, setShowAgentBar] = useState(false);




  return (
    <div className="flex justify-between">
      <Head>
        <title>DashBoard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Left Panel */}
      <div className="relative z-10">
        <RiArrowDropRightLine
          className="p-0 text-4xl bg-gray-300"
          onClick={() => setShowTaskBar(true)}
          />
          {showTaskBar && (
            <div className="absolute top-0 left-0 flex">
              <TaskBar />
              <RiArrowDropLeftLine
                className="p-0 text-4xl bg-gray-300"
                onClick={() => setShowTaskBar(false)}
              />
            </div>
          )}
      </div>

      {/* Middle Panel */}
      <div className="">
        <Gmap />
      </div>

      {/* Right Panel */}
      
      <div className="relative z-10">
        <RiArrowDropLeftLine
          className="p-0 text-4xl bg-gray-300"
          onClick={() => setShowAgentBar(true)}
          />
          {showAgentBar && (
            <div className="absolute top-0 right-0 flex">
              <RiArrowDropRightLine
                className="p-0 text-4xl bg-gray-300"
                onClick={() => setShowAgentBar(false)}
              />
              <AgentBar />
            </div>
          )}
      </div>
    </div>
  );
};

export default dashboard;
