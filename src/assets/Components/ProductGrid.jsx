import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductGrid() {
  // ✅ useSelector must be inside the component
  const products = useSelector((state) => state.product.filteredItems);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-16">
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No products found.
        </p>
      )}
    </div>
  );
}

export default ProductGrid;
