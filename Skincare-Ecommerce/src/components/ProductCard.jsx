// import React from "react";
// import { Heart } from "lucide-react";

// export default function ProductCard({
//   item,
//   onToggleCart,
//   onToggleLike,
//   likedProducts,
//   cartItems,
// }) {
//   const isLiked = likedProducts.includes(item.id);
//   const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

//   return (
//     <div className="bg-white border rounded-lg shadow-sm p-4">
//       <div className="w-full h-48 bg-pink-100 rounded-xl mb-4"></div>

//       <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
//       <p className="text-sm text-gray-600 mb-2">Category: {item.category}</p>
//       <p className="font-medium text-gray-900 mb-4">₹{item.price}</p>

//       <div className="flex justify-between items-center">
//         {/* Add to Cart Button */}
//         <button
//           onClick={() => onToggleCart(item)}
//           className={`rounded-full text-white text-sm px-4 py-2 ${
//             isInCart
//               ? "bg-purple-400 hover:bg-gray-600"
//               : "bg-pink-700 hover:bg-pink-800"
//           }`}
//         >
//           {isInCart ? "Added to Cart" : "Add to Cart"}
//         </button>

//         {/* Like Button with Heart Icon */}
//         <button onClick={() => onToggleLike(item)}>
//           <Heart
//             size={24}
//             className={`${
//               isLiked
//                 ? "text-pink-700 fill-pink-700"
//                 : "text-pink-400 hover:text-pink-700"
//             }`}
//           />
//         </button>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { FaHeart, FaRegHeart, FaShoppingCart, FaCheck } from "react-icons/fa";

export default function ProductCard({ item, onToggleCart, onToggleLike, likedProducts, cartItems }) {
  const isInCart = cartItems?.some((cartItem) => cartItem.id === item.id);
  const isLiked = likedProducts?.includes(item.id);

  // Generate a pastel color based on item category
  const getCategoryColor = (category) => {
    const colors = {
      "Skincare": "bg-blue-100 text-blue-600",
      "Makeup": "bg-pink-100 text-pink-600",
      "Haircare": "bg-purple-100 text-purple-600",
      "Wellness": "bg-green-100 text-green-600"
    };
    return colors[category] || "bg-grey-100 text-gray-600";
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100 transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1">
      {/* Product image */}
      <div className="h-48 bg-pink-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
      <img
  src={`http://localhost:5000/images/${item.image}`}
  alt={item.name}
  className="h-full object-cover"
/>
</div>

      
      <div className="p-4">
        {/* Category badge */}
        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${getCategoryColor(item.category)}`}>
          {item.category}
        </span>
        
        {/* Product details */}
        <h3 className="font-semibold text-lg text-purple-800 mb-1">{item.name}</h3>
        <p className="text-pink-600 font-medium mb-3">₹{item.price}</p>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => onToggleCart(item)}
            className={`flex items-center justify-center px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              isInCart 
                ? "bg-pink-400 text-white" 
                : "bg-pink-100 text-pink-600 hover:bg-pink-200"
            }`}
          >
            {isInCart ? (
              <>
                <FaCheck className="mr-1" /> Added
              </>
            ) : (
              <>
                <FaShoppingCart className="mr-1" /> Add to Cart
              </>
            )}
          </button>
          
          <button
            onClick={() => onToggleLike(item)}
            className="p-2 text-pink-500 hover:text-pink-600 transition-colors duration-200"
          >
            {isLiked ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}