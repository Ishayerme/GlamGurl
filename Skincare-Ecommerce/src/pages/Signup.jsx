import React from 'react';
// import Card from '@/components/ui/Card';
// import button from '@/components/ui/button';
// import input from '@/components/ui/input';

function Signup() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center">Signup Page</h1>
    </div>
  );
}
export default Signup;


// import React, { useState } from "react";
// import { input } from "@/components/ui/input";
// import { button } from "@/components/ui/button";

// export default function Signup({ onSignup }) {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = () => {
//     if (username && email && password) {
//       alert("Account Created Successfully!");
//       onSignup && onSignup(username); // callback
//     } else {
//       alert("Please fill all fields!");
//     }
//   };

//   return (
//     <div className="p-8 max-w-md mx-auto bg-blue-50 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded shadow w-full border border-blue-100">
//         <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Create your Account</h2>
//         <input 
//           placeholder="Username" 
//           value={username} 
//           onChange={(e) => setUsername(e.target.value)} 
//           className="mb-4 w-full border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" 
//         />
//         <input 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           className="mb-4 w-full border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           className="mb-6 w-full border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" 
//         />
//         <button 
//           onClick={handleSubmit} 
//           className="w-full bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded"
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// }
