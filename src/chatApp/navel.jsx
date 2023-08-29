import React from 'react'


import {motion,AnimatePresence} from 'framer-motion'
const Chats = () =>{
  return (
    <div className="h-[300px] w-[100%]">
      <h3>New group</h3>
      <h3>New broadcast</h3>
      <h3>Linked devices</h3>
      <h3>starred messages</h3>
      <h3>Settings</h3>
    </div>
  );
}
const Status = () =>{
  return(
    <div className='h-[100px]  w-[100%]'>
       <h3>Status privacy</h3>
      <h3>Settings</h3>
    </div>
  )
}
const Calls = () =>{
  return(
    <div className='h-[100px] w-[100%]'>
       <h3>Clear call log</h3>
      <h3>Settings</h3>
    </div>
  )
}
function NavEl({status,chat,call}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y:-40
        }}
        transition={{
          duration: 0.4,
        }}
        className="overlay bg-gray-800 shadow-md"
      >
        {status && <Status />}

        {call && <Calls />}
        {chat && <Chats />}
      </motion.div>
    </AnimatePresence>
  );
}

export default NavEl
