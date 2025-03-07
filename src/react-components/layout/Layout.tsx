import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { COLORS } from "../theme/colors";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-[${COLORS.primary}] transition-transform lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col bg-[${COLORS.softStone}] lg:pl-72">
        {/* Top Navigation */}
        <header
          className="sticky top-0 z-40 flex h-16 items-center border-b border-gray-200 px-4 shadow-sm lg:px-8"
          style={{ backgroundColor: COLORS.softStone }}
        >
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <svg className="size-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <h1 className="ml-4 text-lg font-bold">Accountable Tools</h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4">{children}</main>

        {/* Footer */}
        <footer
          className="h-16 px-4 flex items-center text-sm text-gray-700"
          style={{ backgroundColor: COLORS.softStone }}
        >
          © 2025 Accountable Tools
        </footer>
      </div>
    </div>
  );
}
