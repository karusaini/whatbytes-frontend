"use client";

import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black mt-auto border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">WhatBytes</h3>
          <p className="text-sm text-gray-600">
            Building awesome frontend experiences using Next.js, Tailwind &
            ShadCN UI.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-black transition">
                Cart
              </a>
            </li>
            <li>
              <a href="/#products" className="hover:text-black transition">
                Products
              </a>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-black transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-black transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-black transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-black transition">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-200 py-4">
        &copy; {new Date().getFullYear()} WhatBytes. All rights reserved.
      </div>
    </footer>
  );
}
