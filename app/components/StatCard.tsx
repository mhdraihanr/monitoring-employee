"use client";

import React, { useState, useEffect } from "react";

interface CardStyle {
  bg: string;
  accent: string;
  iconBg: string;
  iconColor: string;
  border: string;
}

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  gradientClass: string;
  delay: number;
  cardIndex?: number;
}

const cardStyles: CardStyle[] = [
  {
    bg: "bg-emerald-500/90",
    accent: "from-emerald-500/20 to-green-500/25",
    iconBg: "bg-white",
    iconColor: "text-emerald-700",
    border: "border-emerald-800/50",
  },
  {
    bg: "bg-blue-500/90",
    accent: "from-blue-500/20 to-cyan-500/25",
    iconBg: "bg-white",
    iconColor: "text-blue-700",
    border: "border-blue-800/50",
  },
  {
    bg: "bg-purple-800/90",
    accent: "from-yellow-500/20 to-orange-500/25",
    iconBg: "bg-white",
    iconColor: "text-yellow-700",
    border: "border-yellow-800/50",
  },
  {
    bg: "bg-amber-500/90",
    accent: "from-amber-500/20 to-orange-500/25",
    iconBg: "bg-white",
    iconColor: "text-amber-700",
    border: "border-amber-800/50",
  },
  {
    bg: "bg-red-500/90",
    accent: "from-red-500/20 to-pink-500/25",
    iconBg: "bg-white",
    iconColor: "text-red-700",
    border: "border-red-800/50",
  },
];

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  gradientClass,
  delay,
  cardIndex = 0,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const currentStyle = cardStyles[cardIndex % cardStyles.length];

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
    <div
      className={`${currentStyle.bg} ${currentStyle.border} border rounded-2xl p-8 card-shadow card-hover relative overflow-hidden group text-center`}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-33 h-33 opacity-10 transform translate-x-8 -translate-y-8">
        <div
          className={`w-full h-full bg-gradient-to-br ${currentStyle.accent} rounded-full`}
        ></div>
      </div>

      {/* Icon */}
      <div
        className={`inline-flex p-4 rounded-xl ${currentStyle.iconBg} mb-6 mx-auto`}
      >
        <div className={currentStyle.iconColor}>{icon}</div>
      </div>

      {/* Value */}
      <div className="count-up">
        <div
          className="font-bold text-white mb-4 text-shadow"
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
          className="text-white font-semibold leading-relaxed text-responsive-title"
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
