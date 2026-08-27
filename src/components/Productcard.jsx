import React from "react";

const Productcard = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-700 bg-zinc-900 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="h-64 w-full bg-white p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Category */}
        <p className="mb-2 text-sm font-medium text-gray-400">
          {product.category.name}
        </p>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 text-lg font-semibold">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-400">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            ${product.price}
          </span>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default Productcard;