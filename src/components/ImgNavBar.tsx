import Image from "next/image";
import React from "react";

const ImgNavBar = ({ Img }: { Img: any }) => {
  return <Image src={Img} alt="logo" height={50} width={50} unoptimized />;
};

export default ImgNavBar;
