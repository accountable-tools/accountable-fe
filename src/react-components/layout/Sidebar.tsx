import { ChevronLeft, ChevronRight } from "lucide-react";
import { COLORS } from "@/react-components/theme/colors";
import EntityNavigator from "@/react-components/layout/EntityNavigator";

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
      {/* Sidebar Toggle */}
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

      {/* Entity Navigator */}
      {!isCollapsed && (
        <div className="px-4 mt-4">
          <EntityNavigator />
        </div>
      )}
    </aside>
  );
}
