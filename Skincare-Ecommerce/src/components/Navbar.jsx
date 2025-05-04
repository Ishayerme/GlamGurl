// import React from "react";
// import { Search, User, ShoppingBag } from "lucide-react"; // Add necessary icons
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// export default function Navbar({
//   searchTerm,
//   setSearchTerm,
//   cartItems,
//   setCurrentPage,
//   currentPage,
//   handleSearch,
// }) {
//   return (
//     <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-8 py-6 border-b shadow-sm">
//       {/* GlamGurl Logo as a clickable Link */}
//       <Link to="/" className="text-3xl font-bold text-pink-700 tracking-wide cursor-pointer">
//         GlowGurl
//       </Link>

//       <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search skincare..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)} // Handle input change
//           className="w-full sm:w-80 rounded-full px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
//         />
//         <button
//           onClick={handleSearch} // Trigger the search
//           className="rounded-full bg-pink-700 text-white px-4 py-2 text-sm w-full sm:w-auto"
//         >
//           <Search size={16} className="mr-1" /> Search
//         </button>
//       </div>

//       <div className="flex items-center gap-6">
//         {/* Profile Icon with Link */}
//         <Link
//           to="/profile"
//           className={`cursor-pointer hover:text-pink-700 ${currentPage === "profile" ? "text-pink-700" : ""}`}
//         >
//           <User size={24} />
//         </Link>

//         {/* Cart Icon with Item Count */}
//         <div className="relative">
//           <Link
//             to="/cart"
//             className={`cursor-pointer hover:text-pink-700 ${currentPage === "cart" ? "text-pink-700" : ""}`}
//           >
//             <ShoppingBag size={24} />
//           </Link>
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-3 bg-pink-700 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
//               {cartItems.length}
//             </span>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }





import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaSearch, FaHome, FaUser, FaCog } from "react-icons/fa";

export default function Navbar({ searchTerm, setSearchTerm, cartItems, setCurrentPage, currentPage }) {
  return (
    <nav className="bg-gradient-to-r from-pink-200 to-purple-200 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setCurrentPage("home")}>
            <h1 className="text-2xl md:text-3xl font-bold text-pink-600 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                GlowGurl
              </span>
            </h1>
          </Link>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3 my-4 md:my-0">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-4 pl-10 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/80 placeholder-pink-400"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400" />
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              onClick={() => setCurrentPage("home")}
              className="p-2 text-purple-800 hover:text-pink-600 transition-colors duration-200"
            >
              <FaHome size={25} className={currentPage === "home" ? "text-pink-600" : ""} />
            </Link>
            
            <Link 
              to="/cart" 
              onClick={() => setCurrentPage("cart")}
              className="relative p-2 text-purple-800 hover:text-pink-600 transition-colors duration-200"
            >
              <FaShoppingBag size={20} className={currentPage === "cart" ? "text-pink-600" : ""} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            
            <Link 
              to="/profile" 
              onClick={() => setCurrentPage("profile")}
              className="p-2 text-purple-800 hover:text-pink-600 transition-colors duration-200"
            >
              <FaUser size={20} className={currentPage === "profile" ? "text-pink-600" : ""} />
            </Link>
            
            <Link 
              to="/admin" 
              onClick={() => setCurrentPage("admin")}
              className="p-2 text-purple-800 hover:text-pink-600 transition-colors duration-200"
            >
              <FaCog size={20} className={currentPage === "admin" ? "text-pink-600" : ""} />
            </Link>
            
            <Link 
              to="/login" 
              onClick={() => setCurrentPage("login")}
              className="py-2 px-4 bg-pink-400 hover:bg-pink-500 text-white rounded-full transition-colors duration-200 shadow-sm"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}