// // src/pages/Cart.jsx
// import React from "react";

// export default function Cart({ cartItems, setCartItems }) {
//   const handleIncrement = (itemId) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === itemId
//           ? { ...item, quantity: (item.quantity || 1) + 1 } // Safely increment quantity
//           : item
//       )
//     );
//   };

//   const handleDecrement = (itemId) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === itemId && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 } // Decrement quantity only if > 1
//           : item
//       )
//     );
//   };

//   const handleRemove = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId)); // Remove item from cart
//   };

//   const handleProceed = () => {
//     setCartItems([]); // Empty the cart
//   };

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * (item.quantity || 1), // Default to 1 if no quantity
//     0
//   );

//   return (
//     <div className="px-8 py-6">
//       <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-4">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex justify-between items-center border p-4 rounded-md shadow-sm"
//             >
//               <div>
//                 <h3 className="text-lg font-medium">{item.name}</h3>
//                 <p className="text-sm text-gray-600">₹{item.price}</p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <button
//                   onClick={() => handleDecrement(item.id)}
//                   className="px-3 py-1 bg-gray-200 rounded-full text-lg"
//                 >
//                   −
//                 </button>
//                 <span className="min-w-[24px] text-center">{item.quantity || 1}</span>
//                 <button
//                   onClick={() => handleIncrement(item.id)}
//                   className="px-3 py-1 bg-gray-200 rounded-full text-lg"
//                 >
//                   +
//                 </button>
//               </div>
//               <button
//                 onClick={() => handleRemove(item.id)}
//                 className="text-red-500 hover:underline"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="text-right mt-6 text-lg font-semibold">
//             Total: ₹{totalPrice}
//           </div>
//         </div>
//       )}

//       {/* Conditionally render Proceed button if cart has items */}
//       {cartItems.length > 0 && (
//         <div className="mt-6 text-center">
//           <button
//             onClick={handleProceed}
//             className="px-6 py-3 bg-pink-700 text-white text-lg rounded-full hover:bg-pink-800"
//           >
//             Proceed
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



// import React from "react";
// import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

// export default function Cart({ cartItems, setCartItems }) {
//   const handleIncrement = (itemId) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === itemId
//           ? { ...item, quantity: (item.quantity || 1) + 1 }
//           : item
//       )
//     );
//   };

//   const handleDecrement = (itemId) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === itemId && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const handleRemove = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//   };

//   const handleProceed = () => {
//     setCartItems([]);
//   };

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * (item.quantity || 1),
//     0
//   );

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="text-center mb-6">
//         <h2 className="text-2xl md:text-3xl font-bold text-purple-800">Your Shopping Cart</h2>
//         <p className="text-pink-500">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
//       </div>

//       {cartItems.length === 0 ? (
//         <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-pink-100">
//           <div className="text-5xl mb-4">🛍️</div>
//           <h3 className="text-xl font-semibold text-purple-800 mb-2">Your cart is empty</h3>
//           <p className="text-gray-500 mb-6">Add some beautiful products to your cart!</p>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {/* Cart items */}
//           <div className="bg-white rounded-xl p-4 shadow-sm border border-pink-100">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between py-4 px-2 border-b border-pink-100 last:border-0"
//               >
//                 <div className="flex items-center">
//                   {/* Product image placeholder */}
//                   <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center mr-4">
//                     <div className="text-xl">✨</div>
//                   </div>
                  
//                   {/* Product details */}
//                   <div>
//                     <h3 className="text-purple-800 font-medium">{item.name}</h3>
//                     <p className="text-pink-600">₹{item.price}</p>
//                   </div>
//                 </div>
                
//                 {/* Quantity control */}
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => handleDecrement(item.id)}
//                     className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center hover:bg-purple-200 transition-colors"
//                   >
//                     <FaMinus size={12} />
//                   </button>
                  
//                   <span className="w-8 text-center font-medium text-purple-800">
//                     {item.quantity || 1}
//                   </span>
                  
//                   <button
//                     onClick={() => handleIncrement(item.id)}
//                     className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center hover:bg-pink-200 transition-colors"
//                   >
//                     <FaPlus size={12} />
//                   </button>
                  
//                   <button
//                     onClick={() => handleRemove(item.id)}
//                     className="ml-4 text-red-400 hover:text-red-500 transition-colors"
//                   >
//                     <FaTrash size={16} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Order summary */}
//           <div className="bg-white rounded-xl p-6 shadow-sm border border-pink-100">
//             <h3 className="text-lg font-semibold text-purple-800 mb-4">Order Summary</h3>
            
//             <div className="space-y-2 mb-4">
//               <div className="flex justify-between text-gray-600">
//                 <span>Subtotal</span>
//                 <span>₹{totalPrice}</span>
//               </div>
//               <div className="flex justify-between text-gray-600">
//                 <span>Shipping</span>
//                 <span>Free</span>
//               </div>
//               <div className="flex justify-between text-gray-600">
//                 <span>Tax</span>
//                 <span>₹{(totalPrice * 0.05).toFixed(2)}</span>
//               </div>
//             </div>
            
//             <div className="border-t border-pink-100 pt-4">
//               <div className="flex justify-between text-lg font-semibold">
//                 <span className="text-purple-800">Total</span>
//                 <span className="text-pink-600">₹{(totalPrice * 1.05).toFixed(2)}</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Checkout button */}
//           <div className="text-center mt-6">
//             <button
//               onClick={handleProceed}
//               className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg rounded-full hover:opacity-90 transition-opacity shadow-sm"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

export default function Cart({ cartItems, setCartItems }) {
  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleProceed = async () => {
    const userId = 1; // Temporary user ID (replace with actual logged-in user's ID later)

    try {
      for (const item of cartItems) {
        const response = await fetch("http://localhost:5000/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            product_id: item.id,
            quantity: item.quantity || 1,
            total_price: item.price * (item.quantity || 1),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to place order");
        }
      }

      alert("✅ Order placed successfully!");
      setCartItems([]);
    } catch (error) {
      console.error("Order Error:", error);
      alert("❌ Failed to place order.");
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800">Your Shopping Cart</h2>
        <p className="text-pink-500">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-pink-100">
          <div className="text-5xl mb-4">🛍️</div>
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Add some beautiful products to your cart!</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-pink-100">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 px-2 border-b border-pink-100 last:border-0"
              >
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-xl">✨</div>
                  </div>

                  <div>
                    <h3 className="text-purple-800 font-medium">{item.name}</h3>
                    <p className="text-pink-600">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <FaMinus size={12} />
                  </button>

                  <span className="w-8 text-center font-medium text-purple-800">
                    {item.quantity || 1}
                  </span>

                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center hover:bg-pink-200 transition-colors"
                  >
                    <FaPlus size={12} />
                  </button>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 text-red-400 hover:text-red-500 transition-colors"
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-pink-100">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Order Summary</h3>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>₹{(totalPrice * 0.05).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-pink-100 pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-purple-800">Total</span>
                <span className="text-pink-600">₹{(totalPrice * 1.05).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleProceed}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg rounded-full hover:opacity-90 transition-opacity shadow-sm"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
