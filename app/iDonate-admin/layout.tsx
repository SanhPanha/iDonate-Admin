import { ReactNode } from "react";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import OrganizationSidebarComponent from "@/components/sidebar/SidebarComponent";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {

  return (
      <main className={`flex flex-col h-full w-full`}>
        
          <nav className="w-full z-50 bg-iDonate-white-space">
            <NavbarComponent />
          </nav>

          <section className="w-full flex flex-grow bg-transparent h-[calc(100vh-72px)]">
            <OrganizationSidebarComponent />
            <main className="flex flex-col overflow-auto scrollbar-hide w-full h-full p-9">
              {children}
            </main>
          </section>
      </main>
  );
}
