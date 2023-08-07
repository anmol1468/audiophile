"use-client";
import React, { useEffect } from "react";
import speakerImage from "@/public/home/desktop/image-speaker-zx9.png";
import Image from "next/image";

function Display1() {
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
      className={`bg-primary overflow-hidden flex flex-col md:flex-row items-center md:justify-center text-center py-16 px-8 text-white rounded-lg mx-8 rings-bg ${
        isMobile ? "" : "desktop"
      }`}
    >
      <Image
        className="md:-mb-32"
        src={speakerImage}
        width={isMobile ? 200 : 350}
        height={200}
      />
      <div className="md:w-1/2 md:text-left md:px-24">
        <h2 className="text-6xl font-medium py-12">ZX9 SPEAKER</h2>
        <p className="text-almost_white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="button2 mt-6">SEE PRODUCT</button>
      </div>
    </div>
  );
}

export default Display1;
