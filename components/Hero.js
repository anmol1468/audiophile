import React, { useEffect } from "react";
import styles from "@/styles/components/hero.module.scss";
import Link from "next/link";

function Hero() {
  // State to keep track of the mobile width
  const [isMobile, setIsMobile] = React.useState(false);

  // Use useEffect to handle client-side code
  useEffect(() => {
    // Function to update the isMobile state based on window width
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
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

  return (
    <div
      className={`${styles.hero} ${
        isMobile ? styles.mobile : ""
      } text-white flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-20`}
    >
      <div className="sm:w-1/2">
        <p className="text-gray-400 tracking-super-wide">NEW PRODUCT</p>
        <h1 className="text-5xl font-bold pt-4">XX99 MARK II HEADPHONES</h1>
        <p className="text-gray-300 py-5 tracking-wide">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link href="/xx99-mark-two-headphones">
          <button className="button1">SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
