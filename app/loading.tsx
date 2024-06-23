import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src="/loading.png"
        alt="loading"
        width={100}
        height={100}
        className="animate-spin ease-linear duration-900"
      />
      <div className="mt-4 text-xl text-gray-700 animate-pulse">Loading...</div>
    </div>
  );
};

export default Loading;
