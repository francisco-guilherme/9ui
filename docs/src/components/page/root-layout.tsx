import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { Footer } from "./layout/footer";
import { Header } from "./layout/header";
import { Sidebar } from "./layout/sidebar";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const showSidebar = /^\/(docs|components)/.test(pathname);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      <Header />

      <div className="container flex flex-1">
        {showSidebar && (
          <aside
            className="sticky top-14 hidden h-[calc(100vh-3.5rem)] xl:w-60 md:w-55 border-r md:block"
            role="navigation"
            aria-label="Sidebar navigation"
          >
            <div className="h-full overflow-y-auto px-2 py-8">
              <Sidebar />
            </div>
          </aside>
        )}

        <main role="main" className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};
