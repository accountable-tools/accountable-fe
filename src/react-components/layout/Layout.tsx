import Sidebar from "@/react-components/layout/Sidebar";
import TopNav from "@/react-components/layout/TopNav";
import Footer from "@/react-components/layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-softStone">
      {/* Sidebar (fixed width ~ 35%) */}
      <aside className="w-72 bg-primary text-white">
        <Sidebar />
      </aside>

      {/* Main content (remaining 65%) */}
      <div className="flex-1 flex flex-col">
        {/* Top navigation */}
        <TopNav />

        {/* Main content */}
        <main className="flex-1 p-6">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

