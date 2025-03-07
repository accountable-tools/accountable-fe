import { ChevronLeft, ChevronRight } from "lucide-react";
import { COLORS } from "@/react-components/theme/colors";
import EntityNavigator from "@/react-components/layout/EntityNavigator";

interface NavItem {
  label: string;
  href?: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}) {
  return (
    <aside
      className={`h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      style={{ backgroundColor: COLORS.primary }}
      aria-label="Sidebar Navigation"
    >
      {/* Floating Sidebar Toggle (Fully Clickable) */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-[5%] -right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-300 hover:bg-gray-100 transition"
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
