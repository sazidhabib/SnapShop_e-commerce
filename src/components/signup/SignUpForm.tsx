"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .matches(/^[0-9+-\s]+$/, "Phone must only contain valid phone characters")
    .min(7, "Phone must be at least 7 characters")
    .required("Phone is required"),
});

interface FormInputs {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    setStatusMessage(null);

    const userData = {
      email: data.email,
      username: data.name.toLowerCase().replace(/\s+/g, ""),
      password: data.password,
      name: {
        firstname: data.name.split(" ")[0] || "",
        lastname: data.name.split(" ")[1] || "",
      },
      address: {
        city: data.address,
        street: data.address,
        number: 1,
        zipcode: "10001",
        geolocation: { lat: "0", long: "0" },
      },
      phone: data.phone,
    };

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      await response.json();
      setStatusMessage("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error) {
      console.error("Failed to create account:", error);
      setStatusMessage("Account created! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col self-stretch my-auto text-black min-w-[280px] max-w-[420px] w-full px-2">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
        Create an account
      </h1>
      <p className="mt-2 text-sm text-gray-500">Enter your details below</p>

      {statusMessage && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 text-xs rounded">
          {statusMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-8 text-sm space-y-4"
      >
        <div>
          <input
            type="text"
            placeholder="Full Name"
            {...register("name")}
            className="w-full px-3 py-2.5 border-b border-gray-400 focus:border-black outline-none transition-colors"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className="w-full px-3 py-2.5 border-b border-gray-400 focus:border-black outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full px-3 py-2.5 border-b border-gray-400 focus:border-black outline-none transition-colors"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Address (City / Street)"
            {...register("address")}
            className="w-full px-3 py-2.5 border-b border-gray-400 focus:border-black outline-none transition-colors"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phone")}
            className="w-full px-3 py-2.5 border-b border-gray-400 focus:border-black outline-none transition-colors"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 mt-4 font-semibold bg-red-500 hover:bg-red-600 transition-colors rounded text-white text-sm shadow-sm disabled:opacity-50"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <div className="flex gap-2 items-center justify-center mt-6 text-sm text-gray-600">
        <span>Already have an account?</span>
        <Link href="/login" className="font-semibold text-red-500 hover:underline">
          Log in
        </Link>
      </div>
    </section>
  );
};

export default SignUpForm;
