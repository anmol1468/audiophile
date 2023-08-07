import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import React from "react";
import Categories from "@/components/Categories";
import Display1 from "@/components/Display1";
import Display2 from "@/components/Display2";
import Display3 from "@/components/Display3";
import Info from "@/components/Info";

function index() {
  return (
    <Layout className="">
      <Hero />
      <Categories />
      <Display1 />
      <Display2 />
      <Display3 />
      <Info />
    </Layout>
  );
}

export default index;
