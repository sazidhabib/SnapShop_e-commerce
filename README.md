# SnapShop E-Commerce (Next.js App Router)

A high-performance, modern full-stack e-commerce web application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

Featuring server-side rendering (SSR), dynamic SEO metadata generation, hybrid static/dynamic routing, accessible design primitives, and an SSR-safe reactive global state architecture.

---

## 🚀 Key Features & Architectural Upgrades

- **Next.js App Router (`src/app/**`)**:
  - Modular nested layouts (`RootLayout` with persistent Navbar & Footer).
  - Dynamic route metadata (`generateMetadata`) on product details for optimal OpenGraph & SEO indexing.
  - Streaming suspense skeletons (`loading.tsx`) and graceful error boundaries (`error.tsx`, `not-found.tsx`).
- **Catalog & Product Exploration**:
  - Live server-side fetching with fallback caching against FakeStoreAPI.
  - Interactive client catalog with instant category filtering, real-time search, and sorting (Price low-to-high, high-to-low, top rated).
  - Dynamic product detail views with multi-angle image previews, color & size selectors, and quantity adjusters.
- **Cart & Wishlist Architecture**:
  - SSR-hydration-safe global store (`GlobalContext` + `AppReducer`) preventing React hydration mismatch warnings.
  - Interactive item quantity modification, instant subtotals, coupon code application, and move-all-to-bag capabilities.
- **Checkout & Billing**:
  - Full billing form validation and dynamic order breakdown synced with live cart state.
  - Flexible payment options (Bank Transfer, Cash on Delivery).
- **Authentication & User Profile**:
  - Protected client routes with hydration awareness (`ProtectedRoute.tsx`).
  - Login & Sign-up workflows validated with React Hook Form and schema resolvers.
- **Image Optimization**:
  - Configured Next.js `<Image />` remote patterns with responsive sizing (`sizes`), layout-shift prevention, and WebP compression.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript (Strict mode) |
| **Styling** | Tailwind CSS & PostCSS |
| **State Management** | React Context + Reducer with SSR Hydration Guard |
| **Form & Validation** | React Hook Form & Yup / Zod resolvers |
| **Icons & Media** | React Icons (`react-icons`) |
| **Data Source** | FakeStore API |

---

## 📁 Project Structure

```plaintext
SnapShop E-commerce Website/
├── public/                     # Static media and icons
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/page.tsx      # Static company story & stats
│   │   ├── cart/page.tsx       # Shopping cart (Protected)
│   │   ├── checkout/page.tsx   # Checkout & billing flow (Protected)
│   │   ├── contact/page.tsx    # Contact information & message form
│   │   ├── login/page.tsx      # User authentication
│   │   ├── product/            # Catalog listing & search
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── [id]/           # Dynamic product detail (SSR/Metadata)
│   │   │       ├── page.tsx
│   │   │       └── loading.tsx
│   │   ├── profile/page.tsx    # Account management (Protected)
│   │   ├── signup/page.tsx     # Member registration
│   │   ├── wishlist/page.tsx   # Saved items & quick move-to-cart
│   │   ├── error.tsx           # Global runtime error boundary
│   │   ├── not-found.tsx       # Custom 404 handler
│   │   ├── globals.css         # Tailwind & custom tokens
│   │   └── layout.tsx          # Root layout & providers
│   ├── components/             # Reusable UI & section components
│   ├── context/                # SSR-safe state & reducer
│   ├── features/               # Feature-sliced domain modules
│   └── lib/                    # API clients & utilities
├── next.config.mjs             # Remote image hosts & Next.js config
├── tailwind.config.js          # Color palette & breakpoints
└── tsconfig.json               # Path aliases (@/* -> ./src/*)
```

---

## 💻 Getting Started

### 1. Prerequisites
- **Node.js** (v18.17+ or v20+)
- **npm** or **yarn**

### 2. Installation
Navigate into the project directory and install dependencies:

```bash
cd "SnapShop E-commerce Website"
npm install
```

### 3. Development Server
Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
Verify compilation, type safety, and static asset generation:

```bash
npm run build
npm run start
```
