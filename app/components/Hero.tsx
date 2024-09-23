"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import icon1 from "@/app/assets/icon1.png";
import lightning from "@/app/assets/icon2.png";
import profilePic from "@/app/assets/profilepic.png";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                    bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
      ></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A87]">Rounit Kashyap</h1>
        </div>

        <motion.div
          className="hidden md:block absolute left-[180px] top-[170px]"
          drag
        >
          <Image
            src={icon1}
            height="190"
            width="190"
            alt="cursor"
            draggable="false"
          />
        </motion.div>
        <motion.div
          className="hidden md:block absolute left-[1100px] top-[170px]"
          drag
        >
          <Image
            src={lightning}
            height="120"
            width="120"
            alt="message"
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I am a MERN stack developer focused on creating websites that provide
          the best experience for users.
        </p>

        <Image
          src={profilePic}
          alt="Profile Picture"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
