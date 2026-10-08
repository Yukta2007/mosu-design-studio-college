"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("Backend API URL is not configured.");
      }

      const response = await fetch(`${apiUrl}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Invalid email or password.");
        return;
      }

      router.push("/admin/enquiries");
      router.refresh();
    } catch (error) {
      console.error("LOGIN ERROR:", error);
      setError("Unable to connect to the backend. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#171717] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* HEADER */}

        <div className="mb-10 text-center">
          <p className="text-sm tracking-[0.3em] text-white/50 mb-4">
            MOSU DESIGN STUDIO
          </p>

          <h1 className="text-4xl font-light">
            Admin Login
          </h1>

          <p className="mt-3 text-sm text-white/50">
            Sign in to access enquiries
          </p>
        </div>

        {/* LOGIN FORM */}

        <form
          onSubmit={handleSubmit}
          className="border border-white/15 bg-white/[0.03] p-8 space-y-6"
        >
          {/* EMAIL */}

          <div>
            <label className="block text-sm text-white/60 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@mosu.com"
              required
              autoComplete="email"
              className="
                w-full
                bg-transparent
                border
                border-white/20
                px-4
                py-3
                outline-none
                focus:border-white/60
                transition
              "
            />
          </div>

          {/* PASSWORD */}

          <div>
            <label className="block text-sm text-white/60 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              className="
                w-full
                bg-transparent
                border
                border-white/20
                px-4
                py-3
                outline-none
                focus:border-white/60
                transition
              "
            />
          </div>

          {/* ERROR */}

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-white
              text-black
              py-3
              uppercase
              tracking-wider
              text-sm
              hover:bg-white/80
              transition
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* BACK */}

        <button
          type="button"
          onClick={() => router.push("/")}
          className="
            block
            mx-auto
            mt-6
            text-sm
            text-white/40
            hover:text-white
            transition
          "
        >
          ← Back to website
        </button>

      </div>
    </main>
  );
}
