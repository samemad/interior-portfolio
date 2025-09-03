// Replace your current AdminLogin.jsx with this:
import { useState } from "react";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://interior-portfolio-api.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Store token in localStorage
      localStorage.setItem("adminToken", data.token);
      
      // Show success and redirect manually for now
      alert("Login successful! Redirecting to dashboard...");
      window.location.href = "/admin/dashboard";
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxuryBg px-4">
      <div className="max-w-md w-full">
        <div className="rounded-2xl p-8 bg-luxurySurface border border-white/10">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl text-white mb-2">Admin Login</h1>
            <p className="text-luxuryMuted">Access your portfolio dashboard</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-luxuryBg border border-white/10 text-white placeholder-luxuryMuted focus:border-luxuryGold focus:outline-none transition"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-luxuryBg border border-white/10 text-white placeholder-luxuryMuted focus:border-luxuryGold focus:outline-none transition"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-lg bg-luxuryGold text-black font-medium hover:bg-luxuryGold/90 focus:outline-none focus:ring-2 focus:ring-luxuryGold/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-luxuryMuted text-center">
              This is a secure admin area. Only authorized users can access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}