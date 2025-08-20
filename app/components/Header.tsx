"use client";

import React, { useState, useEffect } from "react";
import { Building2 } from "lucide-react";

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
      <div className="max-w-full mx-auto p-responsive-lg px-8 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex items-center justify-center ">
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className="object-contain drop-shadow-lg"
                style={{
                  width: "calc(3rem + 1.5vw)",
                  height: "calc(3rem + 1.5vw)",
                }}
              />
            </div>

            {/* Company info */}
            <div>
              <h1
                className="font-bold text-gray-900 text-shadow"
                style={{
                  fontSize: "calc(1rem + 1.5vw)",
                  lineHeight: "1.1",
                  fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                  letterSpacing: "-0.02em",
                  fontWeight: "700",
                }}
              >
                PUPUK KUJANG – GATE NPK2
              </h1>
              <div className="flex items-center space-x-4 mt-1">
                <p
                  className="text-gray-600 font-medium"
                  style={{
                    fontSize: "calc(1rem + 0.5vw)",
                    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
                    fontWeight: "500",
                  }}
                >
                  {mounted ? formatDate(currentTime) : "Loading..."}
                </p>
                <div
                  className="font-mono font-semibold text-blue-600"
                  style={{
                    fontSize: "calc(1rem + 0.5vw)",
                    fontFamily: "'Inter', 'Segoe UI', 'Roboto', monospace",
                    fontWeight: "500",
                  }}
                >
                  {mounted ? formatTime(currentTime) : "--:--:--"}
                </div>
              </div>
            </div>
          </div>

          {/* Status indicator */}
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-slow"></div>
            <span className="text-sm font-medium text-gray-600">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
