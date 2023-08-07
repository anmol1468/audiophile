import Image from "next/image";
import React from "react";
import yx1Image from "@/public/home/desktop/image-earphones-yx1.jpg";

function Display3() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center px-8 mx-auto sm:max-h-80">
      <div className="overflow-hidden">
        <Image
          className="w-screen rounded-lg"
          src={yx1Image}
          width={"auto"}
          height={"auto"}
        />
      </div>
      <div className="bg-gray-200 w-full py-14 px-12 mt-8 sm:mt-auto sm:ml-4 sm:h-full rounded-lg">
        <h4 className="font-semibold text-3xl tracking-wider mb-8">
          YX1 EARPHONES
        </h4>
        <button className="button3">SEE PRODUCT</button>
      </div>
    </div>
  );
}

export default Display3;
