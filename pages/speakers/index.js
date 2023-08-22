import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Layout from "@/components/Layout";
import ProductDisplay from "@/components/ProductDisplay";
import { speakers } from "@/data";
import React from "react";

function index() {
  return (
    <Layout>
      <Header title="SPEAKERS" />
      {speakers.map(({ name, description, image, id, slug }) => {
        return (
          <ProductDisplay
            title={name}
            description={description}
            img={image}
            key={id}
            id={id}
            linkPath={slug}
          />
        );
      })}
      <Categories />
      <Info />
    </Layout>
  );
}

export default index;
