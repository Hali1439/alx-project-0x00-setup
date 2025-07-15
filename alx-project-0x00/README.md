# ALX Project 0x00

This is a starter project scaffolded using `npx create-next-app@latest` with TypeScript support.

## Project Setup

- Framework: [Next.js](https://nextjs.org/)
- Language: TypeScript
- Style: Tailwind CSS
- Linting: ESLint
- Aliases: Configured
- No `/src` directory
- No App Router

## Development Server

To start the server on port 3000:

```bash
npm run dev -- -p 3000

---

## ✅ Implemented Tasks

### 0. **Project Scaffolding**
- Created using:  
  `npx create-next-app@latest alx-project-0x00 --typescript`
- Configurations:
  - ESLint: ✅
  - Tailwind CSS: ✅
  - Import Alias (`@/`): ✅
  - App Router: ❌
  - `/src` Directory: ❌
- Verified app is running on `http://localhost:3000`

---

### 1. **Directory Setup**
- Created:
  - `components/`
  - `interfaces/`
- Created `Card.tsx` and `Pill.tsx` under `components/`
- Created `index.ts` placeholder in `interfaces/`
- Refactored `pages/index.tsx` to use arrow function and export at end

---

### 2. **Basic Routing**
- Created `pages/landing.tsx` and `pages/about.tsx`
- Each page contains basic functional components

---

### 3. **Rendering Components**
- Added static images `house.png` and `star.png` in `public/assets/images`
- Built a reusable `Card` component with embedded `Pill` components
- Demonstrated Tailwind styling and Next.js image optimization

---

### 4. **Using Components**
- Imported and rendered multiple `<Card />` components inside `landing.tsx`
- Demonstrated reusability by duplicating `<Card />`
- Introduced props (title) for `Pill.tsx`

---

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
---

### 5. Typing Your Functional Components

- Introduced a TypeScript interface `PillProps` in `interfaces/index.ts` to type props for the Pill component.
- Updated the `Pill` component to dynamically receive and display `title` props using `React.FC<PillProps>`.
- Demonstrated how reusable components can be dynamically customized using props.


