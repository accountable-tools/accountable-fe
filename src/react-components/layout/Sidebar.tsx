import { COLORS } from "@/react-components/theme/colors";

export default function Sidebar() {
  return (
    <nav
      className="h-full flex flex-col px-4 py-6"
      style={{ backgroundColor: COLORS.primary }}
    >
      <div className="text-lg font-bold">Accountable Tools</div>
      <ul className="mt-6 space-y-4">
        <li>
          <a href="/dashboard" className="block px-3 py-2 rounded-md text-white hover:bg-opacity-90">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/settings" className="block px-3 py-2 rounded-md text-white hover:bg-opacity-90">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}

