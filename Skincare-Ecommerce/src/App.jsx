import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Signup from "./pages/Signup";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

  const [newProductName, setNewProductName] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("Skincare");
  const [newProductPrice, setNewProductPrice] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();

      const updatedProducts = data.map((product) => ({
        ...product,
        imageUrl: `http://localhost:5000/images/${product.image}`
      }));

      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Load liked products from localStorage
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLikedProducts(savedLikes);
  }, []);

  // Save liked products to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const handleToggleCart = (product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    if (isInCart) {
      setCartItems((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const handleToggleLike = (product) => {
    setLikedProducts((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const handleAddProduct = async () => {
    if (newProductName && newProductPrice) {
      try {
        const newProduct = {
          name: newProductName,
          category: newProductCategory,
          price: parseFloat(newProductPrice),
          image: "placeholder.jpg" // Or use your default image logic
        };

        const response = await fetch("http://localhost:5000/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProduct)
        });

        if (response.ok) {
          await fetchProducts(); // Refresh product list from backend
          setNewProductName("");
          setNewProductCategory("Skincare");
          setNewProductPrice("");
          alert("Product added successfully!");
        } else {
          alert("Failed to add product.");
        }
      } catch (err) {
        console.error("Error adding product:", err);
        alert("Something went wrong.");
      }
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${productId}`, {
        method: "DELETE"
      });

      if (response.ok) {
        await fetchProducts(); // Refresh product list from backend
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
        setLikedProducts((prevLiked) => prevLiked.filter((id) => id !== productId));
      } else {
        alert("Failed to delete product.");
      }
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Something went wrong.");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        if (data.role === "admin") {
          setCurrentPage("admin");
        } else {
          setCurrentPage("profile");
        }
        alert("Login successful!");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error during login");
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          cartItems={cartItems}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  searchTerm={searchTerm}
                  handleToggleCart={handleToggleCart}
                  handleToggleLike={handleToggleLike}
                  likedProducts={likedProducts}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
            />
            <Route
              path="/profile"
              element={<Profile likedProducts={likedProducts} products={products} />}
            />
            <Route
              path="/login"
              element={
                <Login
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                />
              }
            />
            <Route
              path="/admin"
              element={
                <Admin
                  newProductName={newProductName}
                  setNewProductName={setNewProductName}
                  newProductCategory={newProductCategory}
                  setNewProductCategory={setNewProductCategory}
                  newProductPrice={newProductPrice}
                  setNewProductPrice={setNewProductPrice}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  products={products}
                />
              }
            />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
