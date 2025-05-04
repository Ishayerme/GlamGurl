import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaStar, FaGift } from "react-icons/fa";

export default function Profile({ likedProducts, products }) {
  // Hardcoded user info (replace this with real user data later)
  const user = {
    name: "Isha Yerme",
    email: "isha@example.com",
    phone: "+91 9876543210",
    address: "123 Glam Street, Pune, Maharashtra, India",
  };

  const wishlist = products.filter((product) =>
    likedProducts.includes(product.id)
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">My Profile</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto mt-2 rounded-full"></div>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3">
        {/* User Info Section */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-md border border-pink-100 overflow-hidden transition-all hover:shadow-lg">
            <div className="bg-gradient-to-r from-pink-300 to-purple-300 p-8 flex flex-col items-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
              
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center mb-4 border-4 border-white shadow-md">
                <FaUser size={42} className="text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white drop-shadow-sm">{user.name}</h3>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-300 mr-1" size={14} />
                <FaStar className="text-yellow-300 mr-1" size={14} />
                <FaStar className="text-yellow-300 mr-1" size={14} />
                <FaStar className="text-yellow-300 mr-1" size={14} />
                <FaStar className="text-yellow-300" size={14} />
              </div>
            </div>
            
            <div className="p-6 space-y-5 bg-gradient-to-b from-pink-50 to-purple-50">
              <div className="flex items-center text-gray-700 hover:text-pink-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <FaEnvelope className="text-pink-500" />
                </div>
                <span className="text-sm">{user.email}</span>
              </div>
              
              <div className="flex items-center text-gray-700 hover:text-pink-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <FaPhone className="text-pink-500" />
                </div>
                <span className="text-sm">{user.phone}</span>
              </div>
              
              <div className="flex items-center text-gray-700 hover:text-pink-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-pink-500" />
                </div>
                <span className="text-sm">{user.address}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wishlist Section */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-md border border-pink-100 p-6 h-full">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 flex items-center justify-center mr-3">
                <FaHeart className="text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">My Wishlist</h3>
              <div className="ml-auto px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">
                {wishlist.length} Items
              </div>
            </div>
            
            {wishlist.length === 0 ? (
              <div className="text-center py-12 px-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                <div className="text-5xl mb-4">💖</div>
                <h4 className="text-xl font-medium text-purple-600 mb-2">Your wishlist is empty</h4>
                <p className="text-gray-500">Discover our products and add your favorites to the wishlist!</p>
                <div className="mt-6">
                  <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-all shadow-sm">
                    Explore Products
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {wishlist.map((item) => (
                  <div key={item.id} className="border border-pink-100 rounded-lg p-4 flex items-center bg-gradient-to-r from-pink-50 to-purple-50 hover:shadow-md transition-all">
                    {/* Product image placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <FaGift className="text-white text-xl" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-purple-800">{item.name}</h4>
                      <p className="text-sm font-medium text-pink-600">₹{parseFloat(item.price).toFixed(2)}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                          {item.category}
                        </span>
                        <button className="text-pink-500 hover:text-pink-600 transition-colors">
                          <FaHeart />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
