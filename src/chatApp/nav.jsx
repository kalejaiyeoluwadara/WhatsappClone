import React from 'react'
import { motion } from "framer-motion";
import {
  BsFillCameraFill,
  BsBookmarkFill,
  BsBell,
  BsSearch,
} from "react-icons/bs";
import {AiOutlineMore} from 'react-icons/ai'
function Nav({setStatus,setCall,setChat,setOverlay1,setSearch,setCamera,overlay1,chat,status,call}) {
  return (
    <div className="card relative bg-gray-800 h-[150px] w-screen flex-col">
      <div className="flex  justify-between">
        <div>
          <h3 className="text-gray-500 font-[500]">WhatsApp</h3>
        </div>
        <div className="icons flex w-[150px] justify-between text-gray-500 ">
          <div className="hover:bg-gray-700 hover:text-white opacity-70 rounded-full px-2 py-2">
            <BsFillCameraFill
              className="ic"
              size={25}
              onClick={() => {
                setCamera(true);
                setCall(false);
                setStatus(false);
                setChat(false);
              }}
            />
          </div>
          <div className="hover:bg-gray-700 hover:text-black opacity-70 rounded-full px-2 py-2">
            <BsSearch
              className="ic"
              onClick={() => {
                setSearch(true);
              }}
              size={25}
            />
          </div>
          <div className="hover:bg-gray-700 hover:text-black opacity-70 rounded-full px-2 py-2">
            <AiOutlineMore
              onClick={() => {
                setOverlay1(!overlay1);
              }}
              className="ic"
              size={25}
            />
          </div>
        </div>
      </div>
      <div className="nav static top-0 flex justify-between text-gray-500">
        <div
          className="active"
          onClick={() => {
            setCall(false);
            setStatus(false);
            setChat(true);
          }}
        >
          <motion.p
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.2 }}
            className={chat && "text-green-500"}
          >
            chats
          </motion.p>
          <span>5</span>
        </div>
        <div
          className="items-center justify-center place-items-center"
          onClick={() => {
            setCall(false);
            setStatus(true);
            setChat(false);
          }}
        >
          <motion.p
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.2 }}
            className={status && "text-green-500"}
          >
            status
          </motion.p>
          <p className="stats text-[22px] bg-transparent translate-y-[-5px] translate-x-2 text-gray-400 font-[900]">
            .
          </p>
        </div>
        <div
          onClick={() => {
            setCall(true);
            setStatus(false);
            setChat(false);
          }}
        >
          <motion.p
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.2 }}
            className={call && "text-green-500"}
          >
            calls
          </motion.p>
          <span>1</span>
        </div>
      </div>
    </div>
  );
}

export default Nav
