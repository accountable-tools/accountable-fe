import { useState } from "react";
import { COLORS } from "@/react-components/theme/colors";
import EntityNavigator from "@/react-components/layout/EntityNavigator";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import sleek chevron icons

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
      {/* Floating Sidebar Toggle (Sleek & Modern) */}
      <button
        onClick={toggleSidebar}
        className="absolute top-[5%] -right-5 p-2 rounded-full bg-white shadow-md text-primary border border-gray-300 hover:bg-gray-100 transition flex items-center justify-center"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <ChevronRight size={20} strokeWidth={2} />
        ) : (
          <ChevronLeft size={20} strokeWidth={2} />
        )}
      </button>

      {/* Entity Navigator (Pinned to Top) */}
      {!isCollapsed && (
        <div className="absolute top-2 left-0 w-full px-4">
          <EntityNavigator />
        </div>
      )}

      {/* Nav Links */}
      <nav className="flex-1 mt-16">
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
