"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Settings, Plus } from "lucide-react";
import { AddTaskModal } from "./AddTaskModal";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service worker registered:", registration.scope);
        })
        .catch((error) => {
          console.error("Service worker registration failed:", error);
        });
    }
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F0F7FF] to-white">
      <main className="flex-1 pb-20 overflow-y-auto">
        {children}
      </main>

      {/* Add Task Button - Floating */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#42A5F5] rounded-full shadow-lg flex items-center justify-center hover:bg-[#1E88E5] transition-all active:scale-95 z-10"
        style={{
          boxShadow: "0 8px 24px rgba(66, 165, 245, 0.4)",
        }}
      >
        <Plus className="w-6 h-6 text-white" />
      </button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[rgba(66,165,245,0.12)] backdrop-blur-lg bg-opacity-95">
        <div className="max-w-md mx-auto px-6 py-3 flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className="flex flex-col items-center gap-1 py-2 px-6 transition-all"
              >
                <Icon
                  className={`w-6 h-6 transition-colors ${
                    isActive ? "text-[#42A5F5]" : "text-[#64748B]"
                  }`}
                />
                <span
                  className={`text-xs transition-colors ${
                    isActive ? "text-[#42A5F5]" : "text-[#64748B]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
