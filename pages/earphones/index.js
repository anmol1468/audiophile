import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Layout from "@/components/Layout";
import React from "react";
import { earphones } from "@/data";
import ProductDisplay from "@/components/ProductDisplay";

function index() {
  return (
    <Layout>
      <Header title="EARPHONES" />
      {earphones.map(({ name, description, image, id, slug }) => {
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
