"use client";

import React, { useState, useEffect } from "react";

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  gradientClass: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  gradientClass,
  delay,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayValue((prev) => {
          const increment = Math.ceil((value - prev) / 20);
          const newValue = prev + increment;
          if (newValue >= value) {
            clearInterval(interval);
            return value;
          }
          return newValue;
        });
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="bg-white rounded-2xl p-8 card-shadow card-hover relative overflow-hidden group text-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-33 h-33 opacity-5 transform translate-x-8 -translate-y-8">
        <div className={`w-full h-full ${gradientClass} rounded-full`}></div>
      </div>

      {/* Icon */}
      <div
        className={`inline-flex p-4 rounded-xl ${gradientClass} mb-6 mx-auto`}
      >
        <div className="text-white">{icon}</div>
      </div>

      {/* Value */}
      <div className="count-up">
        <div
          className="font-bold text-gray-900 mb-4 text-shadow"
          style={{
            fontSize: "60px",
            lineHeight: "1",
            fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
            letterSpacing: "-0.02em",
            fontWeight: "650",
          }}
        >
          {displayValue.toLocaleString()}
        </div>

        {/* Title */}
        <div
          className="text-gray-700 font-semibold leading-relaxed text-responsive-title"
          style={{
            fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          }}
        >
          {title}
        </div>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default StatCard;
