"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const StartIcon = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={"/icon3.png"}
          className=" rounded-lg"
          width={500}
          height={500}
          alt="icon"
          priority
        />
      </motion.div>
    </div>
  );
};

export default StartIcon;
