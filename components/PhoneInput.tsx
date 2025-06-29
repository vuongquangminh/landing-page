"use client";

import "flowbite";
import React, { useState } from "react";

export default function PhoneInput() {
  const [phone, setPhone] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn reload trang
    // try {
    //   const res = await fetch("http://localhost:8080/api/support", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ phone }),
    //   });
    //   console.log("res: ", res);

    //   if (!res.ok) throw new Error("Server error");
    // } catch (err) {
    //   console.error(err);
    // }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-sm ">
      <label
        htmlFor="phone-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Phone number:
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 19 18"
          >
            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
          </svg>
        </div>
        <input
          type="text"
          id="phone-input"
          onChange={(e) => setPhone(e.target.value)}
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          pattern="[0-9]{10}"
          placeholder="08699542231"
          required
        />
      </div>
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        Select a phone number that matches the format.
      </p>
    </form>
  );
}
