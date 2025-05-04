// import React, { useState, useEffect } from "react";
// import { FaTrash, FaLock, FaEye, FaEyeSlash, FaPlus, FaSignOutAlt, FaEdit, FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export default function Admin({
//   newProductName, setNewProductName,
//   newProductCategory, setNewProductCategory,
//   newProductPrice, setNewProductPrice,
//   handleAddProduct,
//   handleRemoveProduct,
//   products
// }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [adminPassword, setAdminPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterCategory, setFilterCategory] = useState("All");
//   const navigate = useNavigate();

//   // Check localStorage for admin authentication on component mount
//   useEffect(() => {
//     const adminAuth = localStorage.getItem("adminAuthenticated");
//     if (adminAuth === "true") {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleAdminLogin = (e) => {
//     e.preventDefault();
//     if (adminPassword === "admin123") {
//       setIsAuthenticated(true);
//       localStorage.setItem("adminAuthenticated", "true");
//       setError("");
//       setSuccessMessage("Login successful! Welcome to the admin panel.");
      
//       // Clear success message after 3 seconds
//       setTimeout(() => {
//         setSuccessMessage("");
//       }, 3000);
//     } else {
//       setError("Invalid password. Please try again.");
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem("adminAuthenticated");
//     setAdminPassword("");
//   };

//   const handleEditProduct = (product) => {
//     setEditMode(true);
//     setEditProductId(product.id);
//     setNewProductName(product.name);
//     setNewProductCategory(product.category);
//     setNewProductPrice(product.price);
//   };

//   const handleProductSubmit = () => {
//     if (!newProductName || !newProductCategory || !newProductPrice) {
//       setError("Please fill all fields");
//       return;
//     }
    
//     if (editMode) {
//       // Update existing product logic would go here
//       // For now, we'll just add a new product as the update functionality depends on your app structure
//       handleAddProduct();
//       setSuccessMessage("Product updated successfully!");
//     } else {
//       handleAddProduct();
//       setSuccessMessage("New product added successfully!");
//     }
    
//     // Reset form
//     setNewProductName("");
//     setNewProductCategory("Skincare");
//     setNewProductPrice("");
//     setEditMode(false);
//     setEditProductId(null);
    
//     // Clear success message after 3 seconds
//     setTimeout(() => {
//       setSuccessMessage("");
//     }, 3000);
//   };

//   const cancelEdit = () => {
//     setEditMode(false);
//     setEditProductId(null);
//     setNewProductName("");
//     setNewProductCategory("Skincare");
//     setNewProductPrice("");
//   };

//   const filteredProducts = products
//     .filter(product => 
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//       product.category.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter(product => filterCategory === "All" ? true : product.category === filterCategory);

//   const categories = ["All", ...new Set(products.map(product => product.category))];

//   // If not authenticated, show login screen
//   if (!isAuthenticated) {
//     return (
//       <div className="max-w-md mx-auto bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg overflow-hidden">
//         <div className="p-8">
//           <div className="flex justify-center mb-6">
//             <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-5 rounded-full shadow-md transform hover:scale-105 transition-transform">
//               <FaLock className="text-purple-600 text-3xl" />
//             </div>
//           </div>
          
//           <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
//             Admin Authentication Required
//           </h2>
          
//           {error && (
//             <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-lg text-sm border border-red-200 animate-pulse">
//               {error}
//             </div>
//           )}
          
//           <form onSubmit={handleAdminLogin} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-purple-600 mb-2">
//                 Admin Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={adminPassword}
//                   onChange={(e) => setAdminPassword(e.target.value)}
//                   className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 pr-10 bg-white shadow-sm"
//                   placeholder="Enter admin password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-500 transition-colors"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>
            
//             <button
//               type="submit"
//               className="w-full py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all shadow-md transform hover:scale-105"
//             >
//               Login to Admin Panel
//             </button>
//           </form>
          
//           <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg text-sm border border-pink-200">
//             <p className="font-semibold text-purple-700">Hint:</p>
//             <p className="text-gray-700">The admin password is "admin123"</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // If authenticated, show admin panel
//   return (
//     <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl min-h-screen">
//       {successMessage && (
//         <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg text-sm border border-green-200 shadow-md transition-all">
//           {successMessage}
//         </div>
//       )}

//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Admin Dashboard</h1>
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-pink-200 to-purple-200 text-purple-700 rounded-lg hover:from-pink-300 hover:to-purple-300 transition-colors shadow-sm"
//         >
//           <FaSignOutAlt /> Logout
//         </button>
//       </div>
      
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 hover:shadow-lg transition-shadow">
//           <h2 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6 flex items-center gap-2">
//             {editMode ? <FaEdit className="text-pink-500" /> : <FaPlus className="text-pink-500" />}
//             {editMode ? "Edit Product" : "Add New Product"}
//           </h2>
          
//           {error && (
//             <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-lg text-sm border border-red-200">
//               {error}
//             </div>
//           )}
          
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-purple-600 mb-1">
//                 Product Name
//               </label>
//               <input
//                 type="text"
//                 value={newProductName}
//                 onChange={(e) => setNewProductName(e.target.value)}
//                 className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
//                 placeholder="Enter product name"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-purple-600 mb-1">
//                 Category
//               </label>
//               <select
//                 value={newProductCategory}
//                 onChange={(e) => setNewProductCategory(e.target.value)}
//                 className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
//               >
//                 <option value="Skincare">Skincare</option>
//                 <option value="Haircare">Haircare</option>
//                 <option value="Makeup">Makeup</option>
                
//                 <option value="Wellness">Wellness</option>
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-purple-600 mb-1">
//                 Price (₹)
//               </label>
//               <input
//                 type="number"
//                 value={newProductPrice}
//                 onChange={(e) => setNewProductPrice(e.target.value)}
//                 className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
//                 placeholder="Enter price"
//               />
//             </div>
            
//             <div className="flex gap-3">
//               <button
//                 onClick={handleProductSubmit}
//                 className="flex-1 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all shadow-md transform hover:scale-105"
//               >
//                 {editMode ? "Update Product" : "Add Product"}
//               </button>
              
//               {editMode && (
//                 <button
//                   onClick={cancelEdit}
//                   className="px-4 py-3 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
        
//         {/* Product List Preview */}
//         <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100 hover:shadow-lg transition-shadow">
//           <h2 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
//             Product List ({filteredProducts.length} of {products.length})
//           </h2>
          
//           <div className="mb-4 flex flex-col md:flex-row gap-4">
//             <div className="flex-1 relative">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full p-3 pl-10 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
//                 placeholder="Search products..."
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400" />
//             </div>
            
//             <select
//               value={filterCategory}
//               onChange={(e) => setFilterCategory(e.target.value)}
//               className="md:w-1/3 p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
//             >
//               {categories.map(category => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>
//           </div>
          
//           <div className="overflow-auto max-h-96 rounded-lg border border-pink-100">
//             {filteredProducts.length > 0 ? (
//               <table className="min-w-full divide-y divide-pink-100">
//                 <thead className="bg-gradient-to-r from-pink-100 to-purple-100 sticky top-0">
//                   <tr>
//                     <th className="py-3 px-4 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Name</th>
//                     <th className="py-3 px-4 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Category</th>
//                     <th className="py-3 px-4 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Price</th>
//                     <th className="py-3 px-4 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-pink-100">
//                   {filteredProducts.map((product) => (
//                     <tr key={product.id} className="hover:bg-pink-50 transition-colors">
//                       <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
//                       <td className="py-3 px-4 whitespace-nowrap text-sm">
//                         <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
//                           {product.category}
//                         </span>
//                       </td>
//                       <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900 font-medium">₹{parseFloat(product.price).toFixed(2)}</td>
//                       <td className="py-3 px-4 whitespace-nowrap text-sm">
//                         <div className="flex gap-3">
//                           <button
//                             onClick={() => handleEditProduct(product)}
//                             className="text-purple-500 hover:text-purple-700 transition-colors"
//                             title="Edit product"
//                           >
//                             <FaEdit />
//                           </button>
//                           <button
//                             onClick={() => {
//                               if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
//                                 handleRemoveProduct(product.id);
//                                 setSuccessMessage("Product removed successfully!");
//                                 setTimeout(() => setSuccessMessage(""), 3000);
//                               }
//                             }}
//                             className="text-red-400 hover:text-red-600 transition-colors"
//                             title="Remove product"
//                           >
//                             <FaTrash />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <div className="p-8 text-center text-gray-500">
//                 No products found matching your criteria.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import { FaTrash, FaLock, FaEye, FaEyeSlash, FaPlus, FaSignOutAlt, FaServer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Admin({
  newProductName, setNewProductName,
  newProductCategory, setNewProductCategory,
  newProductPrice, setNewProductPrice,
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch products on load or after add/delete
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Fetch Products Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const adminAuth = localStorage.getItem("adminAuthenticated");
    if (adminAuth === "true") {
      setIsAuthenticated(true);
      fetchProducts(); // Fetch products once admin is logged in
    }
  }, []);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === "admin123") {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuthenticated", "true");
      setError("");
      fetchProducts();
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuthenticated");
    setAdminPassword("");
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch("http://localhost:5000/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newProductName,
          description: "Added by admin panel",
          price: parseFloat(newProductPrice),
          image: "IMG1723NG537124174.png",
          category: newProductCategory
        }),
      });

      if (!response.ok) {
        throw new Error("Server did not return JSON");
      }

      const data = await response.json();
      alert("✅ Product added!");
      setNewProductName("");
      setNewProductCategory("Skincare");
      setNewProductPrice("");
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Add Product Error:", error);
      alert("❌ Error adding product. Check console.");
    }
  };

  const handleRemoveProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error deleting product");
      }

      alert("🗑️ Product deleted!");
      fetchProducts(); // Refresh after deletion
    } catch (error) {
      console.error("Delete Product Error:", error);
      alert("❌ Failed to delete product. Check console.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg overflow-hidden border border-pink-100">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-5 rounded-full shadow-sm">
              <FaLock className="text-purple-600 text-3xl" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Admin Authentication Required
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-lg text-sm border border-red-100 shadow-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleAdminLogin}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-600 mb-2">
                Admin Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 pr-10 bg-white shadow-sm"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-500 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all shadow-sm"
            >
              Login to Admin Panel
            </button>
          </form>

          <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg text-sm border border-pink-200">
            <p className="font-semibold text-purple-700">Hint:</p>
            <p className="text-gray-600">The admin password is "admin123"</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 py-2 px-4 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors shadow-sm"
        >
          <FaSignOutAlt className="text-pink-600" />
          <span>Logout</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 flex items-center">
            <FaPlus className="mr-2 text-pink-500" /> Add New Product
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-purple-600 mb-1">
                Product Name
              </label>
              <input
                type="text"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
                className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-1">
                Category
              </label>
              <select
                value={newProductCategory}
                onChange={(e) => setNewProductCategory(e.target.value)}
                className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
              >
                <option value="Skincare">Skincare</option>
                <option value="Haircare">Haircare</option>
                <option value="Makeup">Makeup</option>
                <option value="Wellness">Wellness</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-600 mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                value={newProductPrice}
                onChange={(e) => setNewProductPrice(e.target.value)}
                className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50"
                placeholder="Enter price"
              />
            </div>

            <button
              onClick={handleAddProduct}
              className="w-full py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all shadow-sm"
            >
              Add Product
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 flex items-center">
            <FaServer className="mr-2 text-pink-500" /> Product List ({products.length})
          </h2>

          <div className="overflow-auto max-h-96 rounded-lg border border-pink-100">
            {isLoading ? (
              <div className="p-8 text-center text-purple-600">Loading products...</div>
            ) : products.length > 0 ? (
              <table className="min-w-full divide-y divide-pink-100">
                <thead className="bg-gradient-to-r from-pink-100 to-purple-100 sticky top-0">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Name</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Category</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Price</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-pink-100">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-pink-50 transition-colors">
                      <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                          {product.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-900 font-medium">₹{parseFloat(product.price).toFixed(2)}</td>
                      <td className="py-3 px-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleRemoveProduct(product.id)}
                          className="p-1 bg-pink-100 text-red-500 rounded-full hover:bg-pink-200 hover:text-red-600 transition-colors"
                          title="Remove product"
                        >
                          <FaTrash className="text-sm" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-8 text-center text-gray-500">No products available.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from "react";

// const Admin = () => {
//   const [products, setProducts] = useState([]);
//   const [newProductName, setNewProductName] = useState("");
//   const [newProductPrice, setNewProductPrice] = useState("");
//   const [newProductCategory, setNewProductCategory] = useState("");
//   const [productImage, setProductImage] = useState(null);

//   useEffect(() => {
//     // Fetch existing products
//     fetch("http://localhost:5000/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   const handleAddProduct = async () => {
//     if (!newProductName || !newProductPrice || !newProductCategory || !productImage) {
//       alert("Please fill all fields and select an image.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", newProductName);
//     formData.append("description", "Added by admin panel");
//     formData.append("price", newProductPrice);
//     formData.append("category", newProductCategory);
//     formData.append("image", productImage); // Attach image to form data

//     try {
//       const response = await fetch("http://localhost:5000/admin", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       alert("✅ Product added!");

//       // Refresh product list after adding new product
//       fetch("http://localhost:5000/products")
//         .then((res) => res.json())
//         .then((data) => setProducts(data));

//       // Clear form
//       setNewProductName("");
//       setNewProductPrice("");
//       setNewProductCategory("");
//       setProductImage(null);
//     } catch (error) {
//       console.error("Error uploading product:", error);
//       alert("❌ Error adding product. Check console.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-pink-50 p-6">
//       <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Admin Panel</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//         {/* Add New Product */}
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold text-purple-600 mb-4">Add New Product</h2>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-purple-600 mb-1">Product Name</label>
//               <input
//                 type="text"
//                 value={newProductName}
//                 onChange={(e) => setNewProductName(e.target.value)}
//                 className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-purple-600 mb-1">Price</label>
//               <input
//                 type="number"
//                 value={newProductPrice}
//                 onChange={(e) => setNewProductPrice(e.target.value)}
//                 className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-purple-600 mb-1">Category</label>
//               <input
//                 type="text"
//                 value={newProductCategory}
//                 onChange={(e) => setNewProductCategory(e.target.value)}
//                 className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-purple-600 mb-1">Product Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setProductImage(e.target.files[0])}
//                 className="w-full p-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>
//             <button
//               onClick={handleAddProduct}
//               className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition"
//             >
//               Add Product
//             </button>
//           </div>
//         </div>

//         {/* Display Existing Products */}
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold text-purple-600 mb-4">Existing Products</h2>
//           <ul className="space-y-3 max-h-96 overflow-y-auto">
//             {products.map((product) => (
//               <li key={product.id} className="flex justify-between items-center border-b pb-2">
//                 <span className="font-medium">{product.name}</span>
//                 <span className="text-sm text-gray-500">₹{product.price}</span>
//                 <img
//                   src={`http://localhost:5000${product.image}`} // Ensure image path is correct
//                   alt={product.name}
//                   className="h-12 w-12 object-cover"
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;
