import React from "react";
import Link from "next/link";
import { COLORS } from "../theme/colors";

interface NavItem {
  label: string;
  href?: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Teams", subItems: [{ label: "Engineering", href: "/teams/engineering" }] },
];

export default function Sidebar({ closeSidebar }: { closeSidebar?: () => void }) {
  return (
    <nav className="h-full flex flex-col p-4 text-white">
      {/* Logo */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Accountable</h2>
        {closeSidebar && (
          <button onClick={closeSidebar} className="lg:hidden">
            <svg className="size-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Nav Links */}
      <ul className="mt-6 space-y-2">
        {navItems.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link href={item.href} className="block rounded-md px-3 py-2 hover:bg-opacity-90">
                {item.label}
              </Link>
            ) : (
              <details className="group">
                <summary className="flex items-center cursor-pointer px-3 py-2">
                  {item.label}
                  <span className="ml-auto transform transition-transform group-open:rotate-90">▶</span>
                </summary>
                <ul className="ml-4 space-y-1">
                  {item.subItems?.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link href={sub.href!} className="block px-3 py-1 hover:bg-opacity-90">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
