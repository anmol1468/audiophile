import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

function index() {
  const cart = useSelector((state) => state.cartReducer);

  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <Layout>
      <div className="h-32 bg-gray-100 w-full"></div>
      <div className="bg-gray-100 md:flex">
        <div className="py-10 mx-8 bg-white px-6  lg:w-3/4 rounded-lg">
          <h3 className="text-3xl font-semibold mb-4">CHECKOUT</h3>
          <div>
            {/* div for billing details */}
            <div>
              <p className="text-primary my-4">BILLING DETAILS</p>
              <div className="sm:flex sm:justify-between">
                <div className="sm:w-1/2">
                  <p className="font-semibold tracking-2">Name</p>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 mb-4 px-4 py-2 border visited:border-primary rounded-md"
                  />
                </div>

                <div className="sm:w-1/2 sm:ml-4">
                  <p className="font-semibold tracking-2">Email Address</p>
                  <input
                    type="text"
                    placeholder="name@mail.com"
                    className="mt-2 mb-4 px-4 py-2 border rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="sm:w-1/2">
              <p className="font-semibold tracking-2">Phone Number</p>
              <input
                type="number"
                inputMode="numeric"
                style={{ MozAppearance: "textfield" }}
                placeholder="+1 234 567 8910"
                className="mt-2 mb-4 px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            {/* div for shipping info */}
            <div className="sm:w-full">
              <p className="text-primary my-4">SHIPPING INFO</p>
              <p className="font-semibold tracking-2">Your Address</p>
              <input
                type="text"
                placeholder="123 some avenue"
                className="mt-2 mb-4 px-4 py-2 border rounded-md"
              />
            </div>
            <div className="sm:flex">
              <div className="sm:w-1/2">
                <p className="font-semibold tracking-2">ZIP Code</p>
                <input
                  type="text"
                  placeholder="100001"
                  className="mt-2 mb-4 px-4 py-2 border rounded-md"
                />
              </div>
              <div className="sm:w-1/2 sm:ml-4">
                <p className="font-semibold tracking-2">City</p>
                <input
                  type="text"
                  placeholder="Calgary"
                  className="mt-2 mb-4 px-4 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="sm:w-1/2">
              <p className="font-semibold tracking-2">Country</p>
              <input
                type="text"
                placeholder="Canada"
                className="mt-2 mb-4 px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            {/* div for payment details */}
            <div className="sm:flex sm:justify-between">
              <p className="font-semibold tracking-2">e-Money Number</p>
              <div className="sm:w-1/2">
                <div className="mt-2 mb-4 px-4 py-2 border rounded-md max-w-sm bg-white">
                  <input
                    type="radio"
                    id="paymentMethod1"
                    name="paymentMethod"
                    value="e-Money"
                    className="w-auto"
                  />
                  <label for="paymentMethod1">e-Money</label>
                </div>

                <div className="mt-2 mb-4 px-4 py-2 border rounded-md max-w-sm">
                  <input
                    type="radio"
                    id="paymentMethod2"
                    name="paymentMethod"
                    value="Cash"
                    className="w-auto"
                  />
                  <label for="paymentMethod2">Cash on Delivery</label>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold tracking-2">e-Money Number</p>
              <input
                type="number"
                placeholder="2856354512"
                className="mt-2 mb-4 px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <p className="font-semibold tracking-2">e-Money PIN</p>
              <input
                type="number"
                placeholder="6891"
                className="mt-2 mb-4 px-4 py-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        {/* ------------------------- */}

        <div className="mx-8 px-6 py-10 bg-white lg:w-1/4 height-fit rounded-lg">
          <h4 className="text-xl font-bold -tracking-wider mb-10">SUMMARY</h4>
          <ul>
            {cart.map((item) => {
              return (
                <li className="flex w-full justify-between pb-8">
                  <div className="flex">
                    <div>
                      <Image
                        src={`/..${item.img}`}
                        width={70}
                        height={70}
                        className="rounded-lg"
                      ></Image>
                    </div>

                    <div className="pl-3 py-2 flex flex-col justify-between">
                      <h4 className="font-bold">{item.name}</h4>
                      <p>$ {item.price}</p>
                    </div>
                  </div>
                  <p className="py-2">x{item.quantity}</p>
                </li>
              );
            })}
          </ul>
          <div>
            <div className="flex justify-between py-1">
              <p className="text-gray-500 tracking-wider">TOTAL</p>
              <h4 className="font-semibold">$ {total}</h4>
            </div>

            <div className="flex justify-between py-1">
              <p className="text-gray-500 tracking-wider">SHIPPING</p>
              <h4 className="font-semibold">$ 50</h4>
            </div>

            <div className="flex justify-between py-1">
              <p className="text-gray-500 tracking-wider">VAT (INCLUDED)</p>
              <h4 className="font-semibold">$ {Math.round(total * 0.2)}</h4>
            </div>

            <div className="flex justify-between py-1 pt-4">
              <p className="text-gray-500 tracking-wider">GRAND TOTAL</p>
              <h4 className="font-semibold text-primary">$ {total + 50}</h4>
            </div>
          </div>

          <button className="button1 w-full mt-5 mx-2">CONTINUE & PAY</button>
        </div>
      </div>
      <div className="h-12 bg-gray-100 w-full"></div>
    </Layout>
  );
}

export default index;
