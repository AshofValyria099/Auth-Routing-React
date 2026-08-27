import axios from "axios";
import React, { useEffect, useState } from "react";
import Productcard from "../components/Productcard";
import { axiosinstance } from "../config/axiosinstance";

const Productpage = () => {
  const [allProducts, setallProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);
  

  let getAllProducts = async () => {
    try {
      let res = await axiosinstance.get("/products");
      console.log(res.data);
      setallProducts(res.data);
      setisLoading(false)
    } catch (error) {
      console.log("API error ->", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

   if (isLoading) return <h1 className="text-black text-4xl">Loading Users</h1>;
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {allProducts.map((elem) => {
        return <Productcard product={elem} key={elem.id} />;
      })}
    </div>
  );
};

export default Productpage;
