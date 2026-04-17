"use client";

import { useState, useEffect } from "react";
import { Bell, Moon, Trash2 } from "lucide-react";
import { motion } from "motion/react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClearTasks = () => {
    if (confirm("Are you sure you want to clear all tasks?")) {
      localStorage.removeItem("tasks");
      window.location.reload();
    }
  };

  if (!isClient) {
    return (
      <div className="max-w-md mx-auto px-6 py-8">
        <h1 className="text-3xl mb-8">Settings</h1>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl mb-8">Settings</h1>

        <div className="space-y-4">
          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-[rgba(66,165,245,0.12)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#42A5F5]" />
                </div>
                <div>
                  <h3 className="text-[#1A2332]">Notifications</h3>
                  <p className="text-sm text-[#64748B]">Get task reminders</p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  notifications ? "bg-[#42A5F5]" : "bg-[#CBD5E1]"
                }`}
              >
                <motion.div
                  className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{ left: notifications ? "26px" : "4px" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          </motion.div>

          {/* Dark Mode */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-[rgba(66,165,245,0.12)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                  <Moon className="w-5 h-5 text-[#42A5F5]" />
                </div>
                <div>
                  <h3 className="text-[#1A2332]">Dark Mode</h3>
                  <p className="text-sm text-[#64748B]">Coming soon</p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                disabled
                className={`relative w-12 h-7 rounded-full transition-colors opacity-50 cursor-not-allowed ${
                  darkMode ? "bg-[#42A5F5]" : "bg-[#CBD5E1]"
                }`}
              >
                <div
                  className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md"
                />
              </button>
            </div>
          </motion.div>

          {/* Clear All Tasks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-[rgba(66,165,245,0.12)]"
          >
            <button
              onClick={handleClearTasks}
              className="w-full flex items-center gap-4 text-left hover:opacity-70 transition-opacity"
            >
              <div className="w-10 h-10 bg-[#FFEBEE] rounded-full flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-[#F44336]" />
              </div>
              <div>
                <h3 className="text-[#1A2332]">Clear All Tasks</h3>
                <p className="text-sm text-[#64748B]">Remove all tasks permanently</p>
              </div>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}