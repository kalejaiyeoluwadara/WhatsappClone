import React, { useState } from "react";
import {motion,AnimatePresence} from 'framer-motion'
import Nav from "./nav";
import Chats from "./chats";
import Calls from "./calls";
import Status from "./new";
import Search from "./search";
import Overlay from "./navel";
import Camera from "./camera";
import ChatView from "./chatView";
import "./style.css";
function Admin() {
  const [chat, setChat] = useState(true);
  const [call, setCall] = useState(false);
  const [status, setStatus] = useState(false);
  const [search, setSearch] = useState(false);
  const [overlay1, setOverlay1] = useState(false);
  const [camera, setCamera] = useState(false);
  const [text,setText] = useState(0);
  return (
    <div className="chatCont h-[100%] w-[100%] bg-gray-900">
      {!search && !text && (
        <Nav
          setCall={setCall}
          status={status}
          chat={chat}
          call={call}
          setOverlay1={setOverlay1}
          setChat={setChat}
          overlay1={overlay1}
          setSearch={setSearch}
          setCamera={setCamera}
          setStatus={setStatus}
        />
      )}
      {/* <ChatView/> */}
      {search && (
        <Search setSearch={setSearch} status={status} chat={chat} call={call} />
      )}
      {overlay1 && <Overlay chat={chat} call={call} status={status} />}
      <AnimatePresence>
        <motion.div
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:0.3
        }}
        exit={{
          x:-300
        }}
        >
          {chat && (
            <Chats
              exit={{
                x: 1000,
              }}
              // setSearch={setSearch}
              text={text}
              setText={setText}
              setChat={setChat}
              setOverlay1={setOverlay1}
            />
          )}
        </motion.div>
      </AnimatePresence>
      {call && <Calls setOverlay1={setOverlay1} />}
      {status && <Status setOverlay1={setOverlay1} />}
      {camera && (
        <Camera
          setCamera={setCamera}
          setCall={setCall}
          setChat={setChat}
          setStatus={setStatus}
        />
      )}
    </div>
  );
}

export default Admin;
