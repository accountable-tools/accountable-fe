import { useState } from "react";
import Sidebar from "@/react-components/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-softStone transition-all duration-300">
      {/* Sidebar Controls Layout */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* 🔥 Fix Page Slicing: Adjust Main Content Positioning */}
      <div
        className={`flex flex-col transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
        style={{ width: isCollapsed ? "calc(100% - 4rem)" : "calc(100% - 16rem)" }}
      >
        <nav className="h-16 bg-white shadow-md flex items-center px-4 transition-all duration-300">
          <h1 className="text-lg font-semibold min-w-[50px] transition-all duration-300">
            {isCollapsed ? "AT" : "Accountable Tools"}
          </h1>
        </nav>

        <main className="flex-1 p-6 transition-all duration-300">{children}</main>

        <footer className="h-16 bg-gray-200 flex items-center justify-center transition-all duration-300">
          <span>© 2025 Accountable Tools</span>
        </footer>
      </div>
    </div>
  );
}
