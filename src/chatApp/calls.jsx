import React from "react";
import {AiOutlineLink} from 'react-icons/ai'
import { WiDirectionUpRight} from "react-icons/wi";
import { motion } from "framer-motion";
import data from './data'
// import { IoCall } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";
import {FaPhone} from 'react-icons/fa'

const Logs = ({log}) =>{
  const {name,mtime,img,missed} = log;
    return (
      <div className="log flex mb-8">
        <div>
          <img
            src={img}
            className="mr-4 h-[50px] w-[50px] rounded-full"
            alt={name}
          />
        </div>
        <div className="user text-start text-white ">
          <h3 className='font-bold'>
            {name}
          </h3>
          <div className="flex ">
            <WiDirectionUpRight size={30} className="text-green-300" />
            <p className="text-gray-400 ">{mtime}</p>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <FaPhone
            size={17}
            className="phone pointer absolute right-2 text-green-600"
          />
        </div>
      </div>
    );
}
function Calls({setOverlay1}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      onClick={() => {
        // setSearch(false);
        setOverlay1(false);
      }}
      className="h-[100%] bg-gray-90 text-white py-3 px-3"
    >
      <div className="head mb-4">
        <div className="link flex bg-green-700 h-[50px] w-[50px] justify-center items-center rounded-full">
          <AiOutlineLink size={25} />
        </div>
        <div className="flex-col justify-start text-start">
          <h3>Create call link</h3>
          <p className="text-gray-400">Share link for your WhatsApp call</p>
        </div>
      </div>
      <h2 className="text-left my-8  text-[18px]">Recent</h2>
      <div className="calls">
        {data.map((c, id) => {
          return <Logs key={id} log={c} />;
        })}
      </div>
    </motion.div>
  );
}

export default Calls;
