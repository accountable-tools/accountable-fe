import { useState } from "react";
import { COLORS } from "@/react-components/theme/colors";

interface NavItem {
  label: string;
  href?: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={`relative h-full flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      style={{ backgroundColor: COLORS.primary }}
      aria-label="Sidebar Navigation"
    >
      {/* Toggle Button (Top-Right) */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 p-2 rounded-md text-white hover:bg-white/20 transition"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={`transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : "rotate-0"
          }`}
        >
          <path d="m12.97 17.53-7-7a.75.75 0 0 1 0-1.06l7-7a.772.772 0 0 1 1.046.013.772.772 0 0 1 .014 1.047L7.56 10l6.47 6.47a.762.762 0 0 1 0 1.06.76.76 
0 0 1-1.06 0Z" />
        </svg>
      </button>

      {/* Nav Links */}
      <nav className="flex-1 mt-10">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-white hover:bg-opacity-90"
              >
                <span className="w-6 h-6 bg-white bg-opacity-20 rounded"></span>
                {!isCollapsed && (
                  <span className="ml-3 transition-opacity duration-300">
                    {item.label}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

