import { Outlet } from "react-router-dom"

import { SidebarNav } from "./nav/sidebar-nav"

export const Sidebar = () => {
  return (
    <div className="container mx-auto gap-8 px-4 md:grid md:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_1fr]">
      <aside className="fixed top-14 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
        <div className="scrollbar-hidden h-full overflow-y-auto px-2 py-8">
          <SidebarNav />
        </div>
      </aside>
      <main className="min-h-screen py-8">
        <Outlet />
      </main>
    </div>
  )
}
