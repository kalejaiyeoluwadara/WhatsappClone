import React from 'react'
import {BsCheckAll} from 'react-icons/bs'
import data from './data'
import { AiFillAudio, AiFillCamera, AiOutlineMore } from "react-icons/ai";
import {FaVideo} from 'react-icons/fa'
import {
  BsFillCameraFill,
  BsBookmarkFill,
  BsBell,
  BsSearch,
} from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
// import { AiTwotomeAudio } from "react-icons/ai";
import { TbMoodSmileFilled } from "react-icons/tb"
import { TiArrowLeft } from "react-icons/ti";
import img from '/img/chicago.jpg'


const Rec = ({chat,time,name}) =>{
  return (
    
    <div className="flex  w-[100%] ">
      
   
      <div className="chat flex-wrap z-30 after:border-r-gray-800 relative flex justify-start items-start pl-6 bg-gray-800 text-white  mx-2  w-max px-6 py-2 rounded-full">
        <p className="text-start">{chat}</p>
        <div className="flex gap-2 items-end text-[13px] ml-2 mt-2">
          <span className="text-gray-300">{time}</span>
          {/* <span>sec</span> */}
        </div>
      </div>
    </div>
  );
}
const Sender = ({chat,time}) =>{
  return (
    <div className="flex justify-end items-end  w-[100%]  ">
      <div className="chat2 flex-wrap  z-30 after:border-r-green-700 relative wrap flex justify-start items-start pl-4 bg-green-700 text-white  mx-2  w-max px-10 py-2 rounded-full">
        <p className="text-start">{chat}</p>
        <div className="flex gap-2  justify-end items-center text-[13px] mt-2 ml-2 ">
          <span className="text-gray-200">{time}</span>
          <BsCheckAll className="text-gray-300" size={20} />
        </div>
      </div>
    </div>
  );

}



function ChatView({ item, setText, text,setView,dat }) {
  return (
    <div className="relative z-30">
      <div className="h-[60px] px-1  py-3 -translate-x-1 translate-y-2 flex items-center text-white justify-between static top-0 mb-[20px] w-[100%]">
        <div className="flex cursor-pointer gap-2 items-center">
          <TiArrowLeft
            onClick={() => {
              setView(null);
              console.log(dat);
            }}
            size={30}
            className="text-white"
          />
          <img
            className="h-[40px] w-[40px] rounded-full "
            src={dat.img}
            alt=""
          />
          <p>{dat.name}</p>
        </div>
        <div className="flex gap-6">
          <FaVideo size={25} className="text-white" />
          <IoMdCall size={25} className="text-white" />
          <AiOutlineMore size={25} className="text-white" />
        </div>
      </div>
      <div className="contC flex bg-{img} pt-4 flex-col justify-start items-start gap-6 h-screen bg-gray-800 w-screen -translate-x-2">
        {item.map((d) => {
          return d.type == true ? (
            <Sender chat={d.mg} time={d.time} />
          ) : (
            <Rec chat={d.mg} time={d.time} />
          );
        })}
      </div>
      <div className="h-[60px] w-screen flex justify-center items-center  fixed z-30 bottom-3 ">
        <div className="w-[80%] flex justify-start items-center gap-6 px-5 bg-gray-800 mx-2 rounded-full py-3 ">
          <TbMoodSmileFilled size={30} className="text-gray-400" />
          <input
            type="text"
            className="bg-gray-800 w-[70%] outline-none text-white"
            placeholder="Message..."
          />
          <ImAttachment size={30} className="text-gray-400 " />
          <AiFillCamera size={30} className="text-gray-400" />
        </div>
        <div className="bg-green-700 flex justify-center items-center rounded-full h-[50px] w-[50px] ">
          <AiFillAudio size={25} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default ChatView
