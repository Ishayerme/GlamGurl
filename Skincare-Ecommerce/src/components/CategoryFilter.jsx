// // import button from "@/components/ui/button";

// export default function CategoryFilter({ category, setCategory }) {
//   const categories = ["All", "Skincare", "Makeup", "Haircare", "Wellness", "Services"];
//   return (
//     <div className="px-8 py-10 flex justify-center gap-4 flex-wrap">
//       {categories.map((cat) => (
//         <button
//           key={cat}
//           className={`rounded-full px-6 py-2 font-semibold ${category === cat ? "bg-pink-700 text-white" : "bg-pink-100 text-pink-700 hover:bg-pink-200"}`}
//           onClick={() => setCategory(cat)}
//         >
//           {cat}
//         </button>
//       ))}
//     </div>
//   );
// }


import React from "react";

export default function CategoryFilter({ category, setCategory }) {
  const categories = ["All", "Skincare", "Makeup", "Haircare", "Wellness"];

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-pink-100">
      <h3 className="text-lg font-semibold text-pink-600 mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
              category === cat
                ? "bg-pink-400 text-white shadow-sm"
                : "bg-purple-100 text-purple-700 hover:bg-purple-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}