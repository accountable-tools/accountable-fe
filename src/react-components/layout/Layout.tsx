import { useState } from "react";
import Sidebar from "@/react-components/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false); // Track sidebar state

  return (
    <div className="flex min-h-screen bg-softStone transition-all duration-300">
      {/* Sidebar (controls isCollapsed state) */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Wrapper - Adjusts dynamically */}
      <div
        className={`flex flex-col transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
        style={{ minHeight: "100vh" }}
      >
        {/* Top Navigation */}
        <nav className="h-16 bg-white shadow-md flex items-center px-4 transition-all duration-300">
          <h1 className="text-lg font-semibold">
            {isCollapsed ? "AT" : "Accountable Tools"}
          </h1>
        </nav>

        {/* Main Page Content */}
        <main className="flex-1 p-6 transition-all duration-300">{children}</main>

        {/* Footer */}
        <footer className="h-16 bg-gray-200 flex items-center justify-center transition-all duration-300">
          <span>© 2025 Accountable Tools</span>
        </footer>
      </div>
    </div>
  );
}
