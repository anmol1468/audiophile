import Link from "next/link";
import React, { useEffect } from "react";
import cart from "@/public/shared/desktop/icon-cart.svg";
import Image from "next/image";
import Cart from "./Cart";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar(props) {
  const links = [
    { name: "HOME", path: "/" },
    { name: "HEADPHONES", path: "/headphones" },
    { name: "SPEAKERS", path: "/speakers" },
    { name: "EARPHONES", path: "/earphones" },
  ];

  // State to keep track of the mobile width
  const [isMobile, setIsMobile] = React.useState(false);

  // Use useEffect to handle client-side code
  useEffect(() => {
    // Function to update the isMobile state based on window width
    function handleResize() {
      setIsMobile(window.innerWidth <= 800);
    }

    // Add an event listener for the "resize" event
    window.addEventListener("resize", handleResize);

    // Call handleResize once on component mount to set the initial value
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once on component mount

  const container = isMobile ? (
    <div
      className={`absolute ${
        props.main ? "bg-transparent" : "bg-black"
      } text-white flex w-full px-8 py-4 items-center justify-between`}
    >
      <div>
        <GiHamburgerMenu className="text-xl" />
      </div>
      <h4 className="text-2xl font-semibold tracking-wide">audiophile</h4>
      <div>
        <Link href={"/checkout"}>
          <Image height={30} width={30} src={cart} alt="cart" />
        </Link>
      </div>
    </div>
  ) : (
    <div
      className={`absolute ${
        props.main ? "bg-transparent" : "bg-black"
      } text-white w-full flex justify-between items-center px-20 py-6`}
    >
      <h4 className="text-2xl font-semibold tracking-wide">audiophile</h4>
      <ul className="flex">
        {links.map((link) => {
          return (
            <li className="mx-4">
              <Link
                href={link.path}
                className="tracking-wide hover:text-primary transition duration-300 "
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <Link href={"/checkout"}>
          <Image height={30} width={30} src={cart} alt="cart" />
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      {container}
      {/* <Cart /> */}
    </div>
  );
}

export default Navbar;
