"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Review morning emails", completed: false, createdAt: new Date().toISOString() },
    { id: "2", title: "Complete project proposal", completed: false, createdAt: new Date().toISOString() },
    { id: "3", title: "Team meeting at 2 PM", completed: false, createdAt: new Date().toISOString() },
    { id: "4", title: "Update documentation", completed: true, createdAt: new Date().toISOString() },
  ]);
  const [isClient, setIsClient] = useState(false);
  const [today, setToday] = useState("");

  // Only run on client side
  useEffect(() => {
    setIsClient(true);
    setToday(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    );

    // Load from localStorage
    const stored = localStorage.getItem("tasks");
    if (stored) {
      try {
        setTasks(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to load tasks", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isClient]);

  useEffect(() => {
    if (!isClient) return;

    const handler = (e: CustomEvent) => {
      const newTask: Task = {
        id: Date.now().toString(),
        title: e.detail.title,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks((prev) => [newTask, ...prev]);
    };
    window.addEventListener("addTask" as any, handler);
    return () => window.removeEventListener("addTask" as any, handler);
  }, [isClient]);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  if (!isClient) {
    return (
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-6">Today's Tasks</h1>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(66,165,245,0.12)]">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#64748B]">Progress</span>
              <span className="text-[#42A5F5]">0 of 0</span>
            </div>
            <div className="relative h-2 bg-[#E3F2FD] rounded-full overflow-hidden" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-[#64748B] mb-2">{today}</p>
        <h1 className="text-3xl mb-6">Today's Tasks</h1>

        {/* Progress Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(66,165,245,0.12)]">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[#64748B]">Progress</span>
            <span className="text-[#42A5F5]">
              {completedCount} of {totalCount}
            </span>
          </div>
          <div className="relative h-2 bg-[#E3F2FD] rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#42A5F5] to-[#90CAF9] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Tasks List */}
      <div className="space-y-3">
        <AnimatePresence>
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[rgba(66,165,245,0.12)] hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleTask(task.id)}
                className="w-full flex items-center gap-4 text-left"
              >
                {task.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-[#42A5F5] flex-shrink-0" />
                ) : (
                  <Circle className="w-6 h-6 text-[#CBD5E1] flex-shrink-0" />
                )}
                <span
                  className={`flex-1 transition-all ${
                    task.completed
                      ? "line-through text-[#94A3B8]"
                      : "text-[#1A2332]"
                  }`}
                >
                  {task.title}
                </span>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {tasks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-[#64748B]"
          >
            <p>No tasks yet. Tap the + button to add one!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
