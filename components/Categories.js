import React from "react";
import Image from "next/image";
import Link from "next/link";
import headphones from "@/public/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "@/public/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "@/public/shared/desktop/image-category-thumbnail-earphones.png";

function Categories() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center text-center px-20 py-8">
      <div className="bg-gray-100 mt-28 sm:mx-2 p-2 w-full flex flex-col items-center rounded-xl">
        <Image
          className="-mt-24 "
          src={headphones}
          width={200}
          height={200}
          alt="headphones"
        />
        <h4 className="font-bold pb-3">HEADPHONES</h4>
        <Link href="/headphones" className="text-gray-600">
          SHOP <span className="text-primary">&#62;</span>
        </Link>
      </div>
      <div className="bg-gray-100 mt-28 sm:mx-2 p-2 w-full flex flex-col items-center rounded-xl">
        <Image
          className="-mt-24 "
          src={speakers}
          width={200}
          height={200}
          alt="speakers"
        />
        <h4 className="font-bold pb-3">SPEAKERS</h4>
        <Link href="/speakers" className="text-gray-600">
          SHOP <span className="text-primary">&#62;</span>
        </Link>
      </div>
      <div className="bg-gray-100 mt-28 sm:mx-2 p-2 w-full flex flex-col items-center rounded-xl">
        <Image
          className="-mt-24 "
          src={earphones}
          width={200}
          height={200}
          alt="earphones"
        />
        <h4 className="font-bold pb-3">EARPHONES</h4>
        <Link href="/earphones" className="text-gray-600">
          SHOP <span className="text-primary">&#62;</span>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
