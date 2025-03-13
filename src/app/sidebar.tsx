"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { HomeIcon, PaymentsIcon } from "@/react-components/icons";
import { COLORS } from "@/react-components/theme/colors";
import EntityNavigator from "@/app/entitynavigator";

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}) {

  console.log("Sidebar - isCollapsed:", isCollapsed);
  console.log("Sidebar - setIsCollapsed:", setIsCollapsed);

  return (
    <aside
      className={`h-screen flex flex-col transition-all duration-300 relative ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      style={{ backgroundColor: COLORS.primary }}
      aria-label="Sidebar Navigation"
    >
      {/* Sidebar Toggle - Correctly Positioned on Sidebar's Right Edge */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-[5%] right-0 translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full 
bg-white shadow-md border border-gray-300 hover:bg-gray-100 transition"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <ChevronRight size={20} stroke={COLORS.slateCharcoal} strokeWidth={2} />
        ) : (
          <ChevronLeft size={20} stroke={COLORS.slateCharcoal} strokeWidth={2} />
        )}
      </button>

      {/* Entity Navigator (Pinned to Top) */}
      {!isCollapsed && (
        <div className="px-4 mt-4">
          <EntityNavigator />
        </div>
      )}

      {/* Navigation Links */}
      <nav className="flex-1 mt-6">
        <ul className="space-y-4">
          <li>
            <a
              href="/dashboard"
              className="flex items-center px-3 py-2 rounded-md text-white hover:bg-opacity-90"
            >
              <HomeIcon color="boneWhite" size={24} />
              {!isCollapsed && (
                <span className="ml-3 transition-opacity duration-300">
                  Dashboard
                </span>
              )}
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className="flex items-center px-3 py-2 rounded-md text-white hover:bg-opacity-90"
            >
              <PaymentsIcon color="boneWhite" size={24} />
              {!isCollapsed && (
                <span className="ml-3 transition-opacity duration-300">
                  Settings
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

