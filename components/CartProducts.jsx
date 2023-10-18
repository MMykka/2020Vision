import React, { useContext } from "react";
import Link from "next/link";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import CardProvider, { CardContext } from "@/context/CardContext";

const CartProducts = ({ item }) => {
  const { id, name, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CardContext);
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <img src={image} alt={name} className="max-w-[80px]" />
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2 ">
            <Link
              href={"/"}
              className="text-sm uppercase font-medium max-w-[240px] hover:underline"
            >
              {name}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center  items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center  items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 justify-around flex items-center">
              ${price}
            </div>
            <div className="flex-1 flex justify-end items-center font-medium">{`$${parseFloat(
              item.price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
