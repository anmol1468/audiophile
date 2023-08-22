import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  const [cart, setCart] = useState([]);

  return (
    <div cart={cart} setCart={setCart}>
      <Navbar main={props.main} />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
