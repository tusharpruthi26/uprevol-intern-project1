import React from "react";

export default function ProductsApplication() {
  return (
    <section>
      <div className="relative">
        <img
          className="w-full h-96"
          src="https://www.monolithsafetyexperts.com/wp-content/uploads/2023/04/R-11.jpg"
          alt="Product"
        />
        <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/3 w-full">
          <h1 className="text-7xl font-bold text-white">
            OUR PRODUCTS APPLICATION & INDUSTRIES WE SERVE
          </h1>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
}
