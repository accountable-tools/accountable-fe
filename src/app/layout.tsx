"use client";

import { useState } from "react";
import "@/styles/globals.css"; // Ensure global styles are imported
import Sidebar from "@/app/sidebar";
import Main from "@/app/main";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);


  console.log("RootLayout - isCollapsed:", isCollapsed);

  return (
    <html lang="en">
      <body className="flex min-h-screen transition-all duration-300 bg-boneWhite text-slateCharcoal">
        {/* Sidebar */}
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {/* Main Content - Dynamic Width */}
        <Main isCollapsed={isCollapsed}>{children}</Main>
      </body>
    </html>
  );
}

