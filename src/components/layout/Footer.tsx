"use client";

import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-3">WhatBytes</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Building awesome frontend experiences <br /> using Next.js, Tailwind
            & ShadCN UI.
          </p>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-black transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/cart"
                className="hover:text-black transition-colors duration-200"
              >
                Cart
              </a>
            </li>
            <li>
              <a
                href="/#products"
                className="hover:text-black transition-colors duration-200"
              >
                Products
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-0 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5">
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-200"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} WhatBytes. All rights reserved.
      </div>
    </footer>
  );
}
