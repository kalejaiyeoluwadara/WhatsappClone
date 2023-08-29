import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsFillCameraFill,
  BsBookmarkFill,
  BsCircleFill,
  BsFillLightningFill,
  BsSearch,
} from "react-icons/bs";
import { BiRotateRight } from "react-icons/bi";
import { AiFillPicture } from "react-icons/ai";

function Camera({ setCamera, setChat }) {
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    }

    startCamera();

    return () => {
      // Stop the camera stream when the component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      className="h-screen bg-black w-screen absolute top-0 overflow-y-hidden"
    >
      {/* Camera Stream */}
      <div className="h-[90%] relative">
        {/* Display Camera Stream */}
        <video
          className="w-full h-full object-cover"
          ref={videoRef}
          autoPlay
          playsInline
          muted
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between px-8 py-5 text-white">
          <div className="flex justify-between">
            <p
              className="x cursor-pointer"
              onClick={() => {
                setCamera(false);
                setChat(true);
              }}
            >
              x
            </p>
            <BsFillLightningFill size={30} />
          </div>
          {/* Additional Camera controls */}
          <div className="flex items-center justify-between">
            <div className="bg-black opacity-[0.8] rounded-full h-[50px] w-[50px] flex items-center justify-center">
              <AiFillPicture className="opacity-[1] " size={30} />
            </div>
            <div className="rounded-full  border-4 h-[60px] w-[60px] flex items-center justify-center">
              <BsCircleFill size={40} />
            </div>
            <div className="bg-black opacity-[0.8] rounded-full h-[50px] w-[50px] flex items-center justify-center">
              <BiRotateRight size={30} />
            </div>
          </div>
        </div>
      </div>
      {/* Other Content */}
      <div className="flex gap-3 flex-row items-center py-2 pb-8 bg-gray-900 justify-center w-[screen]">
        <p className="px-5 py-2 bg-gray-800 rounded-full text-white">Video</p>
        <p className="px-5 py-2 bg-gray-800 rounded-full text-white">Photo</p>
      </div>
    </motion.div>
  );
}

export default Camera;
