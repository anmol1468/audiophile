import React from "react";

function Header({ title }) {
  return (
    <div className="flex justify-center items-center text-white bg-black w-full h-96 text-3xl tracking-widest">
      {title}
    </div>
  );
}

export default Header;
