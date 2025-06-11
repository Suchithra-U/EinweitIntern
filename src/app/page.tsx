"use client";
import React, { useState } from "react";

export default function Home() {
  const sidebarButtons = [
    "GENERAL",
    "PRICING",
    "SALES ANALYTICS",
    "BUSINESS INSIGHT",
    "Revenue optimization",
    "ADVANCE OPTION",
    "CUSTOM QUESTION",
  ];

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  const handleCardClick = (label: string) => {
    setActiveCard(label);
    setShowRightSidebar(false); // Reset right panel
  };

  const handleOpenRightSidebar = () => {
    setShowRightSidebar(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}

      <header
        style={{ backgroundColor: "#F9FAFC" }}
        className="flex justify-between items-center p-4 bg-blue-600"
      >
        <img src="/logo.png" alt="Einweit Logo" className="h-8" />
        <button className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100 text-sm font-medium">
          UPGRADE
        </button>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <aside style={{ backgroundColor: "#F9FAFC" }} className="w-64 p-4   flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {sidebarButtons.map((label, index) => (
              <button
                key={index}
                className="flex items-center gap-3 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => handleCardClick(label)}
              >
                <span className="w-3 h-3 bg-black rounded-full"></span>
                {label}
              </button>
            ))}
          </div>

          {/* Username */}
          <button className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 flex items-center gap-3">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            UserName
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {!activeCard ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h1 className="text-2xl font-semibold mb-2">
                WELCOME TO ASK EINWARE AI
              </h1>
              <p className="text-gray-600 text-lg">
                How can we assist you today?
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className="border rounded-xl shadow p-6 hover:shadow-md cursor-pointer"
                onClick={handleOpenRightSidebar}
              >
                <h2 className="text-xl font-semibold mb-2">{activeCard}</h2>
                <p className="text-gray-600">
                  Click to view more details in sidebar.
                </p>
              </div>
            </div>
          )}
        </main>

        {/* Right Sidebar */}
        {showRightSidebar && (
          <aside style={{ backgroundColor: "#F9FAFC" }} className="w-80 p-4 absolute right-0 top-0 bottom-0 z-10">
            <h3 className="text-lg font-bold mb-4">{activeCard} Details</h3>
            <p className="text-gray-700">
              This is the detailed view for <strong>{activeCard}</strong>. You
              can replace this with dynamic content or forms later.
            </p>
            <button
              onClick={() => setShowRightSidebar(false)}
              className="mt-4 text-blue-600 underline"
            >
              Close
            </button>
          </aside>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{ backgroundColor: "#F9FAFC" }}
        className="text-sm text-gray-400 text-center py-2 "
      >
        © 2025 AskEinware AI – Powered by Einweit Technologies
      </footer>
    </div>
  );
}
