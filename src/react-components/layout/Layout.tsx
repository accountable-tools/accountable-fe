import { useState } from "react";
import Sidebar from "@/react-components/layout/Sidebar";
import Main from "@/react-components/layout/Main";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen transition-all duration-300">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content - Dynamic Width */}
      <Main isCollapsed={isCollapsed}>{children}</Main>
    </div>
  );
}
