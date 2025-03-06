import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Accountable Tools"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              <li>
                <Link
                  to="/dashboard"
                  className="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm font-semibold text-gray-700"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold text-gray-700 
hover:bg-gray-50"
                    onClick={() => toggleDropdown("teams")}
                    aria-expanded={openDropdown === "teams"}
                  >
                    Teams
                    <span className="ml-auto">{openDropdown === "teams" ? "▼" : "▶"}</span>
                  </button>
                  {openDropdown === "teams" && (
                    <ul className="mt-1 px-2">
                      <li><Link to="#" className="block rounded-md py-2 pl-9 pr-2 text-sm text-gray-700 
hover:bg-gray-50">Engineering</Link></li>
                      <li><Link to="#" className="block rounded-md py-2 pl-9 pr-2 text-sm text-gray-700 hover:bg-gray-50">Human 
Resources</Link></li>
                      <li><Link to="#" className="block rounded-md py-2 pl-9 pr-2 text-sm text-gray-700 hover:bg-gray-50">Customer 
Success</Link></li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold text-gray-700 
hover:bg-gray-50"
                    onClick={() => toggleDropdown("projects")}
                    aria-expanded={openDropdown === "projects"}
                  >
                    Projects
                    <span className="ml-auto">{openDropdown === "projects" ? "▼" : "▶"}</span>
                  </button>
                  {openDropdown === "projects" && (
                    <ul className="mt-1 px-2">
                      <li><Link to="#" className="block rounded-md py-2 pl-9 pr-2 text-sm text-gray-700 hover:bg-gray-50">GraphQL 
API</Link></li>
                      <li><Link to="#" className="block rounded-md py-2 pl-9 pr-2 text-sm text-gray-700 hover:bg-gray-50">iOS 
App</Link></li>
                      <li><Link to="#" className="block rounded-md py-2 pl-9 pr-2 text-sm text-gray-700 hover:bg-gray-50">Android 
App</Link></li>
                      <li><Link to="#" className="block rounded-md py-2 pl-9 pr-2 text-sm text-gray-700 hover:bg-gray-50">New 
Customer Portal</Link></li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link to="#" className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="#" className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                  Documents
                </Link>
              </li>
              <li>
                <Link to="#" className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                  Reports
                </Link>
              </li>
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <Link to="#" className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
              <img
                className="size-8 rounded-full bg-gray-50"
                
src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User Profile"
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

