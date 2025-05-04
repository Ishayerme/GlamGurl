// import React, { useState } from "react";
// import Productcard from "../components/ProductCard";
// import CategoryFilter from "../components/CategoryFilter";

// export default function Home({ products, cartItems, setCartItems, searchTerm, handleToggleCart, handleToggleLike, likedProducts }) {
//   const [category, setCategory] = useState("All");

//   // Filter products based on category and search term
//   const filteredProducts = products.filter((product) => {
//     const matchesCategory = category === "All" || product.category === category;
//     const matchesSearchTerm =
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.category.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearchTerm;
//   });

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 md:p-10 mb-8 shadow-sm">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-3">
//             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Discover Your Perfect Beauty Products
//             </span>
//           </h1>
//           <p className="text-purple-500 mb-6 md:text-lg">
//             Premium skincare, makeup, and more at your fingertips 🫧
//           </p>
//         </div>
//       </div>
    
//       {/* Category Filter Component */}
//       <CategoryFilter category={category} setCategory={setCategory} />

//       {/* Products Display */}
//       <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((item) => (
//             <Productcard
//               key={item.id}
//               item={item}
//               onToggleCart={handleToggleCart}
//               onToggleLike={handleToggleLike}
//               likedProducts={likedProducts}
//               cartItems={cartItems}
//             />
//           ))
//         ) : (
//           <div className="col-span-full text-center py-12">
//             <p className="text-lg text-purple-600 mb-2">✨ No products found ✨</p>
//             <p className="text-gray-500">Try adjusting your search or category filter</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// // }



import React, { useState, useEffect } from "react";
import Productcard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

export default function Home({ cartItems, setCartItems, searchTerm, handleToggleCart, handleToggleLike, likedProducts }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");

  
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");

      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      
      const updatedProducts = data.map((product) => ({
        ...product,
        imageUrl: `http://localhost:5000/images/${product.image}`
      }));

      setProducts(updatedProducts); // Set the products state with the updated data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Use useEffect to call fetchProducts when the component is mounted
  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array ensures it runs once when the component is first mounted

  // Filter products based on category and search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearchTerm =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 md:p-10 mb-8 shadow-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-3">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Discover Your Perfect Beauty Products
            </span>
          </h1>
          <p className="text-purple-500 mb-6 md:text-lg">
            Premium skincare, makeup, and more at your fingertips 🫧
          </p>
        </div>
      </div>

      {/* Category Filter Component */}
      <CategoryFilter category={category} setCategory={setCategory} />

      {/* Products Display */}
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Productcard
              key={item.id}
              item={item}
              onToggleCart={handleToggleCart}
              onToggleLike={handleToggleLike}
              likedProducts={likedProducts}
              cartItems={cartItems}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-purple-600 mb-2">✨ No products found ✨</p>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
