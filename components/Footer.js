import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-almost_black text-almost_white flex flex-col items-center sm:items-start text-center sm:text-start py-10 px-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:w-full">
        <Link href="/">
          <h4 className="font-bold text-2xl pb-8">audiophile</h4>
        </Link>
        <ul className="pb-8 flex flex-col sm:flex-row">
          <li className="py-2 text-sm tracking-wide sm:mr-6">
            <Link href="/">HOME</Link>
          </li>
          <li className="py-2 text-sm tracking-wide sm:mr-6">
            <Link href="/headphones">HEADPHONES</Link>
          </li>
          <li className="py-2 text-sm tracking-wide sm:mr-6">
            <Link href="/speakers">SPEAKERS</Link>
          </li>
          <li className="py-2 text-sm tracking-wide sm:mr-6">
            <Link href="/earphones">EARPHONES</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-gray-400 pb-8">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col sm:flex-row sm: justify-between sm:mt-4">
          <p className="text-gray-400 pb-8">
            Copyright 2021. All Rights Reserved
          </p>
          <ul className="flex justify-center">
            <li className="text-3xl mx-1">
              <AiFillFacebook />
            </li>
            <li className="text-3xl mx-1">
              <AiOutlineTwitter />
            </li>
            <li className="text-3xl mx-1">
              <AiOutlineInstagram />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
