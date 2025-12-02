import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const res = await fetch(import.meta.env.VITE_API_URL + "/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      navigate("/landing");
    } else {
      setError(data.message || "Signup failed");
    }
  };

  return (
    <main id="main-signup" className="flex flex-col justify-center items-center p-10 md:p-20">
      <h1 id="signup" className="mb-8">SIGN UP</h1>

      <div className="flex flex-col items-center">
        <div className="input-group">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <label>Confirm Password</label>
        </div>
      </div>

      {error && <p className="text-red-600 mt-3">{error}</p>}

      <div className="flex flex-col gap-4 mt-6">
        <button type="button" id="S1" onClick={handleSignup}>
          Sign Up
        </button>
        <button type="button" id="S2" onClick={() => navigate("/")}>
          Return
        </button>
      </div>
    </main>
  );
};

export default Signup;
