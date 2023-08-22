import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";
import { data } from "@/data";
import Image from "next/image";
import Layout from "@/components/Layout";
import Categories from "@/components/Categories";
import Info from "@/components/Info";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/features/cartSlice";

function ProductID() {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);

  const router = useRouter();
  const query = router.query;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItem({
        name: productInfo.name,
        quantity: numOfItems,
        price: productInfo.price,
        img: `/public/cart/image-${productInfo.slug}.jpg`,
      })
    );

    setNumOfItems(1);
  };

  const [numOfItems, setNumOfItems] = useState(1);

  const increaseNum = () => {
    if (numOfItems <= 9) setNumOfItems(numOfItems + 1);
  };
  const decreaseNum = () => {
    if (numOfItems > 1) setNumOfItems(numOfItems - 1);
  };

  const [productInfo, setProductInfo] = useState(null);
  const [path, setPath] = useState({}); // Declare path variable

  useEffect(() => {
    const product = data.find((product) => product.slug === query.productid);
    if (product) {
      setProductInfo(product);

      // Set path based on conditions
      if (window.innerWidth < 640) {
        setPath({
          main: "/.." + product.image.mobile,
          gallery1: "/.." + product.gallery.first.mobile,
          gallery2: "/.." + product.gallery.second.mobile,
          gallery3: "/.." + product.gallery.third.mobile,
          similar1: "/.." + product.others[0].image.mobile,
          similar2: "/.." + product.others[1].image.mobile,
          similar3: "/.." + product.others[2].image.mobile,
        });
      } else if (window.innerWidth < 768) {
        setPath({
          main: "/.." + product.image.tablet,
          gallery1: "/.." + product.gallery.first.tablet,
          gallery2: "/.." + product.gallery.second.tablet,
          gallery3: "/.." + product.gallery.third.tablet,
          similar1: "/.." + product.others[0].image.tablet,
          similar2: "/.." + product.others[1].image.tablet,
          similar3: "/.." + product.others[2].image.tablet,
        });
      } else {
        setPath({
          main: "/.." + product.image.desktop,
          gallery1: "/.." + product.gallery.first.desktop,
          gallery2: "/.." + product.gallery.second.desktop,
          gallery3: "/.." + product.gallery.third.desktop,
          similar1: "/.." + product.others[0].image.desktop,
          similar2: "/.." + product.others[1].image.desktop,
          similar3: "/.." + product.others[2].image.desktop,
        });
      }
    }
  }, [query.productid]);

  if (!productInfo) {
    return null;
  }

  return (
    <Layout>
      {/* code for main section */}
      <div className="px-8 pb-12 pt-48">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="sm:w-1/2">
            <Image
              src={path.main}
              width={200}
              height={200}
              alt={`Picture of ${productInfo.name}`}
              className="w-screen"
            />
          </div>
          <div className="sm:w-1/2 sm:ml-12">
            <p className="tracking-super-wide text-primary py-6">NEW PRODUCT</p>
            <h4 className="font-semibold text-3xl">{productInfo.name}</h4>
            <p className="text-gray-700 py-6">{productInfo.description}</p>
            <p className="font-semibold">$ {productInfo.price}</p>
            <div className="flex py-6">
              <div className="bg-gray-200 mr-4">
                <button onClick={decreaseNum} className="p-3">
                  -
                </button>
                <span className="px-4">{numOfItems}</span>
                <button onClick={increaseNum} className="p-3">
                  +
                </button>
              </div>
              <button onClick={addToCart} className="button1">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* code for features section */}
      <div className="px-8 pb-12">
        <h4 className="font-bold text-3xl mb-6">FEATURES</h4>
        <p className="text-gray-600 tracking-wide leading-6">
          {productInfo.features}
        </p>
      </div>

      {/* code for in the box section */}
      <div className="px-8 pb-12 md:flex md:justify-between">
        <h4 className="font-bold text-3xl mb-6">IN THE BOX</h4>
        <ul className="md:w-1/2">
          {productInfo.includes.map((item) => {
            return (
              <li className="text-gray-600 leading-8">
                <span className="text-primary font-semibold">
                  {item.quantity}x
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {item.item}
              </li>
            );
          })}
        </ul>
      </div>

      {/* code for 3 picture gallery section */}
      <div className="px-8 sm:flex pb-12">
        <div>
          <div>
            <Image
              src={path.gallery1}
              width={200}
              height={200}
              className="w-screen rounded-lg pb-5 md:pb-8"
            />
          </div>
          <div>
            <Image
              src={path.gallery2}
              width={200}
              height={200}
              className="w-screen rounded-lg pb-5 sm:pb-0"
            />
          </div>
        </div>

        <div className=" sm:pl-4 md:pl-8 sm:flex">
          <Image
            src={path.gallery3}
            width={200}
            height={200}
            className="w-screen rounded-lg"
          />
        </div>
      </div>

      {/* code for similar products section */}
      <div className="px-8 py-12 w-full">
        <h4 className="font-bold text-center sm:text-left text-3xl mb-12">
          YOU MAY ALSO LIKE
        </h4>
        <ul className="flex flex-col sm:flex-row items-center text-center">
          {productInfo.others.map((item, index) => {
            return (
              <li className="pb-14 sm:p-2">
                <Image
                  src={path[`similar${index + 1}`]}
                  width={200}
                  height={200}
                  className="w-screen"
                />
                <h4 className="font-semibold text-2xl my-6">{item.name}</h4>
                <Link href={item.slug}>
                  <button className="button1">SEE PRODUCT</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Categories />
      <Info />
    </Layout>
  );
}

export default ProductID;
