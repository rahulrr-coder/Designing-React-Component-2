import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {

  const productImage = "https://shorturl.at/MgY6M";
  const productName = "Casual Shoes";
  const productPrice = "$50";

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64">
      <img src={productImage} alt={productName} className="w-20 h-20 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;

