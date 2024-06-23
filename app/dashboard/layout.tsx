"use client";
import SidebarNav from "@/components/sub/navbar/SidebarNav";
import { SessionProvider } from "next-auth/react";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <SidebarNav />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
};

export default layout;
