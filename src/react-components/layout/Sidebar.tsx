import React, { useState } from "react";

/**
 * Data model for each nav link or submenu item
 */
export interface NavItem {
  label: string;
  href?: string;              // Direct link
  subItems?: NavItem[];       // Nested submenu, if any
}

interface SidebarProps {
  navLabel?: string;          // ARIA label for the <nav> element
  logoSrc?: string;           // Optional logo image
  logoAlt?: string;           // Alt text for the logo
  items: NavItem[];           // The top-level navigation items
}

/**
 * Minimal Tailwind-based Sidebar with submenus.
 * - No custom CSS
 * - Expand/collapse logic for submenus
 * - ARIA-friendly approach
 */
export default function Sidebar({
  navLabel = "Primary navigation",
  logoSrc,
  logoAlt = "Company Logo",
  items,
}: SidebarProps) {
  // Track which submenus are expanded
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  function toggleSubMenu(label: string) {
    setExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }

  return (
    <div className="flex flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 shrink-0" style={{ width: "16rem" }}>
      {/* Optional logo/brand area */}
      {logoSrc && (
        <div className="flex h-16 items-center">
          <img className="h-8 w-auto" src={logoSrc} alt={logoAlt} />
        </div>
      )}

      <nav className="flex flex-1 flex-col" aria-label={navLabel}>
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {items.map((item) => {
                const hasSubmenu = item.subItems && item.subItems.length > 0;
                const isExpanded = !!expanded[item.label];

                if (!hasSubmenu) {
                  // Simple link item
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href ?? "#"}
                        className="block rounded-md bg-gray-50 py-2 pr-2 pl-10 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <div>
                      {/* ##shouldbeswappedforcommoncomponent */}
                      <button
                        type="button"
                        className="flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold text-gray-700 hover:bg-gray-100"
                        aria-controls={`submenu-${item.label}`}
                        aria-expanded={isExpanded}
                        onClick={() => toggleSubMenu(item.label)}
                      >
                        {item.label}
                        <svg
                          className={`size-5 ml-auto shrink-0 transition-transform ${
                            isExpanded ? "rotate-90 text-gray-500" : "text-gray-400"
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {isExpanded && (
                        <ul
                          id={`submenu-${item.label}`}
                          aria-label={`${item.label} submenu`}
                          className="mt-1 px-2"
                        >
                          {item.subItems!.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href={sub.href ?? "#"}
                                className="block rounded-md py-2 pr-2 pl-9 text-sm text-gray-700 hover:bg-gray-50"
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
          {/* Example user profile section at the bottom */}
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Your profile"
              />
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
