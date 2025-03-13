import React from "react";
import TopNav from "@/app/topnav"; 
import Body from "@/app/body"; 
import Footer from "@/app/footer";

export default function Main({
  children,
  isCollapsed,
}: {
  children: React.ReactNode;
  isCollapsed: boolean;
}) {
  return (
    <div
      className="flex flex-col min-h-screen bg-cream transition-all duration-300"
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

