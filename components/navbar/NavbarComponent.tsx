"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { NavMenuType } from "@/difinitions/types/components-type/NavMenuType";
import {signOut, useSession} from "next-auth/react";

export default function NavbarComponent() {
    const pathname = usePathname();
    const router = useRouter();
    const { setTheme } = useTheme()

  const navActiveClass = (isActive: boolean) =>
    `text-description-eng font-normal ${
      isActive ? "text-iDonate-green-primary" : "text-iDonate-navy-primary"
    }`;
    const { data: session,status } = useSession();

    useEffect(() => {
      console.log("Session:", session);
      console.log("Status:", status);
    }, [session, status]);

  if (pathname === "/auth/login" && "/auth/sign-up" && "/auth/verification")
    return null;
  else


    return (
        <nav className="w-full h-[72px] flex items-center justify-between shadow-sm z-10  top-0 px-[100px]">
            {/* Logo and Name */}
            <section
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => router.push("/")}
            >
                 <div className="w-10 h-10 bg-iDonate-green-primary rounded-full"></div>
                <span className="text-title-eng">iDonate</span>
            </section>

            {/* Sign In & Donate */}
            <section className="flex items-center space-x-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="bg-iDonate-green-accent hover:bg-iDonate-green-secondary rounded-full border-0 p-2"
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {status === "authenticated" ? (
                    <div className="flex items-center space-x-4 text-iDonate-navy-secondary">
                        {session?.user?.image && (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Image
                                        src={session?.user.image}
                                        alt={`${session?.user.name ?? "User"}'s avatar`}
                                        width={40}
                                        height={40}
                                        className="rounded-full border-2 border-iDonate-navy-primary"
                                    />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => signOut()}>
                                        Sign Out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center space-x-4">
                  <span
                      className="text-description-eng font-normal text-iDonate-navy-primary cursor-pointer"
                      onClick={() => router.push("/")}
                  >
                    Sign In
                  </span>
                    </div>
                )}  
            </section>
        </nav>
    );
}
