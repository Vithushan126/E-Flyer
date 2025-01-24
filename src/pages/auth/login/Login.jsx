import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-sm border border-border">
        <div className="flex justify-center mb-6">
          <button className="flex items-center justify-center w-full py-3 px-6 text-smokyGray bg-white rounded-lg border border-border text-2xl font-medium">
            <span className="mr-2">
            <FcGoogle />
            </span>
            Google
          </button>
        </div>
        <div className="text-center text-smokyGray mb-4 text-sm">or</div>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
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
          <div className="mb-6">
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
          <button
            type="submit"
            className="w-full py-3 bg-darkBlue text-white rounded-lg hover:bg-blue-950 text-2xl font-medium mt-6"
          >
            Log In
          </button>
        </form>
        <div className="text-start mt-4">
          <a href="#" className="text-base font-normal text-smokyGray hover:underline">
            Forgot Your Password?
          </a>
        </div>
        <div className="text-center mt-6">
          <p className="text-base font-normal text-gray-600">
            Don’t have an account yet?{" "}
            </p>
            <a href="Register" className="text-darkBlue hover:underline text-base font-normal">
              Create an Account
            </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
