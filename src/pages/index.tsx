import React from "react";
import Sidebar from "@/react-components/layout/Sidebar";
import type { NavItem } from "@/react-components/layout/Sidebar";

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  {
    label: "Teams",
    subItems: [
      { label: "Engineering", href: "/teams/engineering" },
      { label: "HR", href: "/teams/hr" },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64" style={{ backgroundColor: "#A30D2D" }}>
        <Sidebar
          navLabel="Main navigation"
          items={navItems}
          logoSrc="/assets/logo.svg"
          logoAlt="Your Company"
        />
      </aside>

      <div className="flex-1 flex flex-col" style={{ backgroundColor: "#E2DED7" }}>
        <header className="h-16 px-4 flex items-center" style={{ backgroundColor: "#E2DED7" }}>
          <h1 className="text-lg font-bold">Welcome to Accountable Tools</h1>
        </header>

        <main className="flex-1 p-4">
          <p>Start building your page content here!</p>
        </main>

        <footer className="h-16 px-4 flex items-center" style={{ backgroundColor: "#E2DED7" }}>
          <span className="text-sm">© 2025 Accountable Tools</span>
        </footer>
      </div>
    </div>
  );
}
