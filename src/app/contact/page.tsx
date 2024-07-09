"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

// contact.page.tsx
const ContactPage = () => {
  const searchParam = useSearchParams();
  const name = searchParam.get("name");
  const email = searchParam.get("email");
  const message = searchParam.get("message");

  return (
    <Suspense>
      <div className="p-8 m-8 md:p-16 md:m-16">
        <h1 className="text-3xl font-bold mb-4">Contact Submit</h1>
        <div className="p-4 border-2">
          <p className="text-lg mb-4">Name: {name}</p>
          <p className="text-lg mb-4">Email: {email}</p>
          <p className="text-lg">Message: {message}</p>
        </div>

        <div className="flex justify-center float-right">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>
    </Suspense>
  );
};

export default ContactPage;
