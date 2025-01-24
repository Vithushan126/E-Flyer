import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Signing up with", { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-sm border border-border">
        {/* Google Sign-Up Button */}
        <div className="flex justify-center mb-6">
          <button className="flex items-center justify-center w-full py-3 px-6 text-smokyGray bg-white rounded-lg border border-border text-2xl font-medium">
            <span className="mr-2">
              <FcGoogle />
            </span>
            Google
          </button>
        </div>

        <div className="text-center text-smokyGray mb-4 text-sm">or</div>
        {/* Sign-Up Form */}
        <form onSubmit={handleSignUp}>
          {/* Full Name */}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Full Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-darkBlue text-white rounded-lg hover:bg-blue-950 text-2xl font-medium mt-6"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
