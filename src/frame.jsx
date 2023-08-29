import React,{useState} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
function Frame() {
    const [text,setText] = useState(true)
  return (
    <div
      onClick={() => {
        setText(!text);
      }}
      className="h-screen flex gap-3 items-center justify-center bg-gray-900 w-screen"
    >
      <AnimatePresence>
        {text && (
          <motion.div
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
            exit={{
              y: -400,
              opacity:0
            }}
            transition={{
              duration: 1,
            }}
            onClick={() => {
              setText(false);
            }}
            className="text-white h-[100px] rounded-md w-[150px] bg-red-400 font-bold text-[30px]"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
       
        className="text-white h-[100px] rounded-md w-[150px] bg-green-400 font-bold text-[30px]"
      ></motion.div>
    </div>
  );
}

export default Frame
