import React from "react";
import TopNav from "@/react-components/layout/TopNav";
import Body from "@/react-components/layout/Body";
import Footer from "@/react-components/layout/Footer";

export default function Main({
  children,
  isCollapsed,
}: {
  children: React.ReactNode;
  isCollapsed: boolean;
}) {
  return (
    <div
      className="flex flex-col min-h-screen transition-all duration-300"
      style={{
        width: isCollapsed ? "calc(100% - 4rem)" : "calc(100% - 16rem)",
      }}
    >
      {/* Top Navigation */}
      <TopNav />

      {/* Main Content Area */}
      <Body>{children}</Body>

      {/* Footer */}
      <Footer />
    </div>
  );
}
