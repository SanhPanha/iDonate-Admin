"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SidebarGroupLabel } from "@/components/ui/sidebar";
import { SidebarMenuList } from "./SidebarMenu";
import { SidebarType } from "@/difinitions/types/sidebar/SidebarType";


export default function SidebarComponent() {
  const [menuList] = useState<SidebarType[]>(SidebarMenuList);
  const pathname = usePathname();

  const navActiveClass = (isActive: boolean) =>
    `w-[210px] h-[62px] font-normal bg-transparent flex hover:bg-iDonate-light-gray justify-start px-6 py-4 ${
      isActive ? "text-iDonate-green-primary" : "text-iDonate-navy-primary"
    }`;

  return (
    <aside className="flex h-full">

      <section className="flex h-full flex-col border-r-2 border-iDonate-navy-accent px-6 gap-y-3 py-4">

       <SidebarGroupLabel className=" text-sm text-iDonate-gray">Monitor</SidebarGroupLabel>
        {menuList.map((item, index) => {
          const isActive = pathname === item.path;

          return (
               <section key={index}>
                {item.path && !item.active ? (
                <div  className="flex flex-col space-y-4">
                    <Button className={`${navActiveClass(isActive)} text-lg`}>
                      <Link
                          key={index}
                          href={item.path}
                          className="flex"
                        >
                          {item.icon && (
                            <item.icon
                              style={{
                                width: "1.5rem",
                                height: "1.5rem",
                                marginRight: "0.5rem",
                              }}
                            />
                          )}
                        {item.title}
                      </Link>
                  </Button>
                </div>
              ) : (
                <Button
                  key={index}
                  // className="hover:bg-transparent cursor-default "
                  className={`${navActiveClass(isActive)} text-lg `}
                >
                  {item.icon && (
                    <item.icon
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        marginRight: "0.5rem",
                      }}
                    />
                  )}
                  {item.title}
                </Button>
              )}
           </section>
          )
        })}
      </section>
    </aside>
  );
}
