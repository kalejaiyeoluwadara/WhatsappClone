import React from 'react'
import { BsArrowLeftShort, BsHeadphones } from "react-icons/bs";
import { MdMarkChatUnread } from "react-icons/md";
import { BiSolidVideo } from "react-icons/bi";
import { FaPoll } from "react-icons/fa";
import { AiOutlineLink, AiOutlineGif } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
// import { AiOutlineLink } from "react-icons/ai";
import {motion,AnimatePresence} from 'framer-motion'
import {IoMdPhotos} from 'react-icons/io'
const data = [
  {
    name: "unread",
    img: <MdMarkChatUnread size={21} />,
  },
  {
    name: "Photos",
    img: <IoMdPhotos size={21} />,
  },
  {
    name: "videos",
    img: <BiSolidVideo size={21} />,
  },
  {
    name: "links",
    img: <AiOutlineLink size={21} />,
  },
  {
    name: "audio",
    img: <BsHeadphones size={21} />,
  },
  {
    name: "documents",
    img: <HiDocumentText size={21} />,
  },
  {
    name: "Polls",
    img: <FaPoll size={21} />,
  },
];
function Search({ setSearch, status, chat, call }) {
  return (
    <motion.div
      initial={{
        // opacity: 0,
        y: -40,
      }}
      animate={{
        y: 0,
        // opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="searchCont w-[100%] flex-col bg-gray-800 py-6 shadow-sm z-20 absolute top-0 "
    >
      <div className="form">
        <BsArrowLeftShort
          onClick={() => {
            setSearch(false);
          }}
          size={35}
          className="back text-gray-500"
        />
        <input
          type="text"
          className="caret-green-600 font-medium text-white bg-gray-800"
          placeholder="search..."
        />
      </div>
      {chat && (
        <div className="opt flex p-3 gap-4 w-[100%] flex-wrap mt-4">
          {data.map((d, id) => {
            return (
              <div className="flex gap-1 text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                <p>{d.img}</p>
                <p>{d.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

export default Search
