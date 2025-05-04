import React, { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null, // Now this will be a file
    category: "",
  });

  // Handling form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] })); // Store the file
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handling form submission to add product
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send the file and other form data together
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("image", formData.image); // Appending image

    try {
      // Send the form data (including the image) to the backend
      const res = await axios.post("http://localhost:5000/admin", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });

      alert("✅ Product Added Successfully!");
      setFormData({ name: "", description: "", price: "", image: null, category: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add product.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-2 border rounded"
          value={formData.price}
          onChange={handleChange}
          required
        />

        {/* Image input */}
        <input
          type="file"
          name="image"
          accept="image/*" // Allows only image files
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full p-2 border rounded"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded hover:opacity-90"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
