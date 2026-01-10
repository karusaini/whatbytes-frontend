# WhatBytes – Frontend Assignment 🚀

A modern e-commerce frontend application built using **Next.js (App Router)**, **Tailwind CSS**, and **ShadCN UI** as part of the WhatBytes Frontend Developer Intern assignment.

---

## 🔗 Live Demo

👉 **Deployed on Vercel:**  
https://whatbytes-frontend-gamma.vercel.app

_(Replace this with your actual Vercel URL)_

---

## 📂 GitHub Repository

👉https://github.com/karusaini/whatbytes-frontend

---

## 🛠 Tech Stack

- **Next.js 16 (App Router)**
- **React**
- **Tailwind CSS**
- **ShadCN UI**
- **Lucide-react (icons)**
- **Context API (Cart state management)**
- **Vercel (Deployment)**

---

## ✨ Features Implemented

### 🏠 Home Page (`/`)

- Responsive header with:
  - Logo
  - Search bar (URL-based filtering)
  - Cart icon with badge
  - User avatar
- Product listing grid:
  - Responsive (3 columns desktop, 2 tablet, 1 mobile)
  - Product image, title, price
  - Rating stars
  - Short description
  - Add to Cart button
- Sidebar filters:
  - Category filter
  - Price range filter
- URL-based search & filters
- Conditional UI for “No products found”

---

### 📦 Product Detail Page (`/product/[id]`)

- Large product image / carousel
- Product title
- Price
- Description
- Category
- Rating
- Add to Cart button
- Reviews section
- Back navigation
- Fully responsive layout

---

### 🛒 Cart Page (`/cart`)

- List of added products
- Quantity increase/decrease
- Remove item option
- Price summary
- Cart state persisted using **localStorage**

---

## 🧠 Logic & Architecture

- Client-side routing using Next.js App Router
- Dynamic routing for product detail pages
- Cart state managed using **React Context API**
- Search & filters synced via **URL query parameters**
- Clean, modular folder structure
- Feature-based commits (no single commit dump)

---

## 📁 Folder Structure

```txt
src/
├── app/
│   ├── page.tsx
│   ├── cart/
│   ├── product/[id]/
│   └── layout.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── product/
│   └── ui/
│
├── context/
│   └── CartContext.tsx
│
├── data/
│   └── products.ts
│
├── lib/
│   └── filters.ts
│
└── styles/




 ⚙️ Setup Instructions

Clone the repository

git clone https://github.com/karusaini/whatbytes-frontend.git


Install dependencies

npm install


Run the development server

npm run dev


Build for production

npm run build



Author

Karina Saini
Frontend Developer
GitHub: https://github.com/karusaini
```
