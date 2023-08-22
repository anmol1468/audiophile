import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductDisplay({ title, description, img, id, linkPath }) {
  const reverse = id % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } md:w-screen md:justify-between items-center text-center md:text-left px-20 pt-16`}
    >
      <div className="md:w-1/2">
        <Image
          src={`/..${img.desktop}`}
          width={300}
          height={300}
          alt={`Preview of ${title}`}
          className="w-screen "
        />
      </div>
      <div className={`md:w-1/2 ${reverse ? "md:pr-20" : "md:pl-20"}`}>
        <p className="text-primary tracking-super-wide pt-6">NEW PRODUCT</p>
        <h4 className="text-3xl font-bold uppercase tracking-widest py-6">
          {title}
        </h4>
        <p className="text-gray-600">{description}</p>
        <Link href={`${linkPath}`}>
          <button className="button1 my-6">SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDisplay;
