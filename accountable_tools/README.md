# 📌 Accountable Tools – Frontend (`accountable-fe`) 🚀  
*A modular, scalable, and fast business data management frontend.*  

🔄 **Migrated from Next.js to Vite** for improved performance, flexibility, and maintainability.  

---

## 📋 Table of Contents  
- 🚀 **Overview**  
- 🎯 **Tech Stack**  
- 📁 **Project Structure**  
- ⚙️ **Setup & Installation**  
- 💻 **Development**  
- 🎨 **Styling & Theming**  
- 📜 **Notes on the Migration from Next.js**  
- 📌 **Next Steps**  
- 🚀 **Contributors**  

---

## 🚀 Overview  
This is the **frontend codebase** for **Accountable Tools**, a **business data management platform** designed with flexibility, transparency, and automation in mind.  

The frontend is built using **Vite + React + Tailwind CSS**, replacing the previous **Next.js** implementation.  

### **Why Vite?**  
⚡ **Faster development & builds** (~10x faster than Next.js in some cases).  
🎯 **Simpler, more modular structure** without opinionated routing.  
🛠️ **Easier debugging & direct control** over performance optimizations.  

---

## 🎯 Tech Stack  
- **Framework:** Vite with React  
- **UI Library:** Tailwind CSS for modern, accessible styling  
- **State Management:** Zustand or React Query (TBD)  
- **Routing:** React Router (instead of Next.js built-in routing)  
- **Package Manager:** npm (or pnpm if needed)  
- **Linting & Formatting:** ESLint + Prettier  
- **Deployment:** Vercel (TBD) or Cloudflare Pages (TBD)  

---

## 📁 Project Structure  
src ├── components/ # Reusable UI components
│ ├── layout/ # Navigation & layout components (Sidebar, TopNav, etc.)
│ ├── ui/ # UI elements (buttons, cards, modals)
├── styles/ # Tailwind & global styles
│ ├── globals.css # Core styles + Tailwind directives
│ ├── base.css # Base styles (fonts, resets)
│ ├── components.css # Component-level styles
│ ├── utilities.css # Custom utilities if needed
├── hooks/ # Custom React hooks
│ ├── useAuth.ts # Authentication hook
│ ├── useTheme.ts # Dark mode or theme management
├── lib/ # Utility functions
│ ├── api.ts # API requests
│ ├── format.ts # Formatting helpers
├── config/ # Project configs
│ ├── tailwind.config.ts # Tailwind configuration
│ ├── vite.config.ts # Vite configuration
├── main.tsx # React entry point
├── App.tsx # Root App component
└── public/ # Static assets (e.g., index.html)

---

## ⚙️ Setup & Installation  

### **1️⃣ Clone the repository**  
```sh
git clone https://github.com/accountable-tools/accountable-fe.git  
cd accountable-fe  

2️⃣ Install dependencies
npm install
3️⃣ Start the development server
npm run dev  
➡️ The app should now be running at http://localhost:5173/.

---

💻 Development
🛠 Running the Dev Server
npm run dev  


🚀 Building for Production
npm run build  


✅ Linting & Formatting
npm run lint  

🎨 Styling & Theming
This project uses Tailwind CSS for rapid UI development.
✔️ Colors & branding defined in tailwind.config.ts
✔️ Global styles in styles/globals.css

Example:
<h1 className="text-primary font-bold">Welcome to Accountable Tools!</h1>

📜 Notes on the Migration from Next.js
Why migrate?
✅ Faster builds & dev experience with Vite.
✅ No need for Next.js features (SSR, API routes, etc.) in our use case.
✅ More control over the project structure and configurations.

Major Changes
❌ Removed Next.js dependencies (next, react-dom).
✅ Installed Vite + React plugin (vite, @vitejs/plugin-react).
✅ Converted src/app/ structure to Vite-friendly organization.
✅ Replaced Next.js routing with React Router (TBD).

📌 Next Steps
✅ Refine component structure (Sidebar, Dashboard, Settings UI).
✅ Implement routing with React Router (TBD).
✅ Set up API handling for backend integration.
✅ Optimize Tailwind config for theming & WCAG compliance.
✅ Decide on hosting & deployment (Vercel? Cloudflare Pages?).

🚀 Contributors
👤 Eitan Itzkowitz– Founder & CEO
📍 GitHub: @itzEitan

