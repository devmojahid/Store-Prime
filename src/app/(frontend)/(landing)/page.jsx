import React from "react";

const page = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Perfect Next13 E-Commerce</h1>
      <p className="text-gray-600">
        Welcome! Explore our multi-homepage ecommerce template below:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="/(home-pages)/electronics"
            className="text-blue-600 hover:underline"
          >
            Electronics Homepage
          </a>
        </li>
        <li>
          <a
            href="/(home-pages)/fashion"
            className="text-blue-600 hover:underline"
          >
            Fashion Homepage
          </a>
        </li>
        <li>
          <a
            href="/(home-pages)/gadgets"
            className="text-blue-600 hover:underline"
          >
            Gadgets Homepage
          </a>
        </li>
      </ul>
    </section>
  );
};

export default page;
