import React, { useState } from "react";
import ChatView from "./chatView";
import { motion } from "framer-motion";

import data from "./data";

const Chat = ({ ch, setChatView, setView, view, setChat,setDat }) => {
  const { id, name, recent, img, time, unread, chats } = ch;
  return (
    <motion.div
      onClick={() => {
        setView(chats);
        setDat(ch);

        setChatView(true);
      }}
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
      whileTap={{
        scale: 0.9,
      }}
      className="chats hover:bg-gray-800 text-white bg-gray-900"
    >
      <div className="chat flex justify-between p-4 px-2">
        <div className="fi">
          <img
            src={img}
            className="h-[50px] rounded-full w-[50px]"
            alt={name}
          />
        </div>
        <div className="se">
          <h3>{name}</h3>
          <p>{recent.length > 20 ? `${recent.substring(0, 23)}...` : recent}</p>
        </div>
        <div className="la">
          <p className={unread > 0 ? "text-green-400" : "text-gray-400"}>
            {time}
          </p>
          {unread > 0 && (
            <p className="text-black font-medium w-[24px] h-[24px] flex justify-center items-center text-center mt-1 rounded-full bg-green-400">
              {unread}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

function Chats({ setOverlay1, setSearch, setText, text, setChat }) {
  const [view, setView] = useState(null);
  const [chatView, setChatView] = useState(false);
  const [dat,setDat] = useState(0);

  return (
    <div
      className="p-[10px] h-[100%]"
      onClick={() => {
        setOverlay1(false);
      }}
    >
      {text && (
        <ChatView
          dat={dat}
          item={text}
          text={text}
          setView={setView}
          setText={setText}
        />
      )}
      {!text &&
        data.map((ch, id) => (
          <div key={id}>
            <Chat
              key={id}
              id={id}
              view={view}
              setDat={setDat}
              setView={setView}
              ch={ch}
              setChat={setChat}
              setChatView={setChatView}
            />
          </div>
        ))}
      {setText(view)}
    </div>
  );
}

export default Chats;
