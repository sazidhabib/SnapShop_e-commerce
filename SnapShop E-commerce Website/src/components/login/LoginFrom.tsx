"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GlobalContext } from "../../context/GlobalContext";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();
  const { setLogin } = useContext(GlobalContext) ?? {
    setLogin: () => {},
  };

  const handleQuickDemo = () => {
    setUsername("johnd");
    setPassword("m38rmF$");
    setErrorMessage(null);
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const cleanUsername = username.trim();

    try {
      // 1. Instant match for demo John Doe
      if (
        cleanUsername.toLowerCase() === "johnd" ||
        cleanUsername.toLowerCase() === "john"
      ) {
        const demoUser = {
          id: 1,
          username: "johnd",
          email: "john.doe@snapshop.com",
          firstName: "John",
          lastName: "Doe",
          phone: "+1 555-0199",
          address: "New York, USA",
          avatar:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
        };
        setLogin(true, demoUser);
        router.push("/");
        router.refresh();
        return;
      }

      // 2. Try fetching from fakestoreapi with a quick 1.5s timeout
      let matchedUser = null;
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1500);
        const response = await fetch("https://fakestoreapi.com/users", {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        if (response.ok) {
          const users = await response.json();
          matchedUser = users.find(
            (u: any) => u.username === cleanUsername && u.password === password
          );
        }
      } catch (netErr) {
        // Network timeout / offline fallback
      }

      if (matchedUser) {
        const rawFirst =
          matchedUser.name?.firstname || matchedUser.username || "John";
        const firstName = rawFirst.charAt(0).toUpperCase() + rawFirst.slice(1);
        const rawLast = matchedUser.name?.lastname || "Doe";
        const lastName = rawLast.charAt(0).toUpperCase() + rawLast.slice(1);

        setLogin(true, {
          id: matchedUser.id,
          username: matchedUser.username,
          email: matchedUser.email,
          firstName,
          lastName,
          address: matchedUser.address?.city || "New York",
          phone: matchedUser.phone || "+1 555-0199",
          avatar:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
        });
        router.push("/");
        router.refresh();
        return;
      }

      // 3. Fallback for any typed username & password
      if (cleanUsername.length >= 2 && password.length >= 3) {
        const capitalizedFirst =
          cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1);
        setLogin(true, {
          id: Date.now(),
          username: cleanUsername,
          email: cleanUsername.includes("@")
            ? cleanUsername
            : `${cleanUsername.toLowerCase()}@snapshop.com`,
          firstName: capitalizedFirst,
          lastName: "Shopper",
          address: "San Francisco, USA",
          phone: "+1 555-0199",
          avatar:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
        });
        router.push("/");
        router.refresh();
        return;
      }

      setErrorMessage(
        "Please enter a valid username and password (or click Quick Fill Demo below)."
      );
    } catch (error) {
      console.warn("Auth exception handled:", error);
      const rawUser = cleanUsername || "johnd";
      const capitalizedFirst =
        rawUser.charAt(0).toUpperCase() + rawUser.slice(1);
      setLogin(true, {
        id: 1,
        username: rawUser,
        email: `${rawUser.toLowerCase()}@snapshop.com`,
        firstName: capitalizedFirst,
        lastName: "Doe",
        phone: "+1 555-0100",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      });
      router.push("/");
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col self-stretch my-auto min-w-[280px] max-w-[420px] w-full px-4 sm:px-0">
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Log in to SnapShop
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter your details below to access your account
        </p>

        {errorMessage && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 animate-in fade-in">
            {errorMessage}
          </div>
        )}

        <div className="flex flex-col mt-8 w-full">
          <label
            htmlFor="username"
            className="text-xs font-semibold text-gray-700 uppercase tracking-wider"
          >
            Email or Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-2 w-full py-2.5 border-b border-gray-300 focus:border-red-500 outline-none transition-colors text-sm text-gray-900 bg-transparent placeholder-gray-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g. johnd"
            required
          />
        </div>

        <div className="flex flex-col mt-6 w-full">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              Password
            </label>
            <Link
              href="/contact"
              className="text-xs text-red-500 hover:text-red-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="relative mt-2 flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full py-2.5 pr-10 border-b border-gray-300 focus:border-red-500 outline-none transition-colors text-sm text-gray-900 bg-transparent placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 text-gray-400 hover:text-gray-600 p-1 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <FiEyeOff className="w-4 h-4" />
              ) : (
                <FiEye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-white bg-red-500 hover:bg-red-600 active:scale-[0.99] font-medium py-3.5 rounded-lg transition-all text-sm shadow-sm disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Log In"}
          </button>

          <button
            type="button"
            onClick={handleQuickDemo}
            className="w-full text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 py-2.5 rounded-lg transition-colors border border-gray-200"
          >
            ⚡ Quick Fill Demo (John Doe)
          </button>
        </div>
      </form>

      <p className="mt-8 text-sm text-gray-600 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-red-500 font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </section>
  );
};

export default LoginForm;
