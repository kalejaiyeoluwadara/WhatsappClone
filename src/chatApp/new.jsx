import React from 'react'
import data from './data'
import { motion } from "framer-motion";
import extra from './extra'
const Status = ({setOverlay1}) =>{
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
      >
        <div className="head mb-4 mt-4 ml-3">
          <div className=" h-[50px] w-[50px]">
            <img
              src="/beach-work.jpg"
              className="rounded-full h-[50px] w-[50px]"
              alt=""
            />
            <div className="plus h-[28px] border-gray-900 absolute translate-x-6 -translate-y-5 w-[28px] flex justify-center items-center bg-green-700 rounded-full">
              <h2 className="text-white  text-[25px]">+</h2>
            </div>
          </div>
          <div className="flex-col justify-start text-start ">
            <h3 className="text-white">My status</h3>
            <p className="text-gray-400">Tap to add status update</p>
          </div>
        </div>
        <h3 className="text-gray-400 text-start pl-5 py-4 text-[16px]">
          Recent updates
        </h3>
        <div>
          {data.map((d, id) => {
            const { img, name, mtime } = d;
            return (
              <div className="chat flex gap-3 p-4 px-2 ">
                <div className="fi">
                  <img
                    src={img}
                    className="status h-[60px] rounded-full  w-[60px]"
                    alt=""
                  />
                </div>
                <div className="se text-white">
                  <h3>{name}</h3>
                  <p>{mtime}</p>
                </div>
              </div>
            );
          })}
        </div>
        <h3>viewed updates</h3>
        <div>{}</div>
      </motion.div>
    );
}
export default Status