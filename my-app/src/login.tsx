import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const res = await fetch(import.meta.env.VITE_API_URL + "/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      navigate("/landing");
    } else {
      setError(data.message || "Invalid email or password");
    }
  };

  return (
    <main id="main-login" className="flex flex-col justify-center items-center p-10 md:p-20">
      <h1 id="login" className="mb-8">LOGIN</h1>

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
      </div>

      {error && <p className="text-red-600 mt-3">{error}</p>}

      <div className="flex flex-col gap-4 mt-6">
        <button id="b3" onClick={handleLogin}>Login</button>
        <button id="b4" onClick={() => navigate("/")}>Return</button>
      </div>
    </main>
  );
};

export default Login;
