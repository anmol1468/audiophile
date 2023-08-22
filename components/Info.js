import Image from "next/image";
import React, { useEffect } from "react";
import picMobile from "@/public/shared/mobile/image-best-gear.jpg";
import picTablet from "@/public/shared/tablet/image-best-gear.jpg";
import picDesktop from "@/public/shared/desktop/image-best-gear.jpg";

function Info() {
  const [width, setWidth] = React.useState(undefined);

  // Use useEffect to handle client-side code
  useEffect(() => {
    // Function to update the isMobile state based on window width
    function handleResize() {
      setWidth(window.innerWidth);
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

  const srcImg =
    width > 768
      ? picDesktop
      : width >= 640 && width < 768
      ? picTablet
      : picMobile;

  return (
    <div className="flex flex-col md:flex-row-reverse px-8 py-16 justify-center text-center">
      <div className="md:w-1/2">
        <Image
          className="rounded-lg md:w-screen"
          src={srcImg}
          height={"100%"}
          width={"100%"}
          alt="picture of a male human wearing headphones."
        />
      </div>
      <div className="md:w-1/2 md:p-10 md:text-left md:flex md:flex-col md:justify-center">
        <h3 className="uppercase text-3xl font-bold tracking-wider py-6">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h3>
        <p className="text-gray-600 leading-relaxed md:text-sm">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default Info;
