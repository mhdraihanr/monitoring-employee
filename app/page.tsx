"use client";

import React from "react";
import {
  Building2,
  Users,
  HardHat,
  GraduationCap,
  UserCheck,
} from "lucide-react";
import Header from "./components/Header";
import StatCard from "./components/StatCard";

const HomePage: React.FC = () => {
  // Sample data - in real implementation, this would come from your API
  const stats = [
    {
      title: "Total Inside NPK2",
      value: 250,
      icon: <Building2 size={28} />,
      gradientClass: "gradient-blue",
      delay: 200,
    },
    {
      title: "Karyawan PKC",
      value: 98,
      icon: <Users size={28} />,
      gradientClass: "gradient-teal",
      delay: 400,
    },
    {
      title: "PHL & Kontraktor",
      value: 53,
      icon: <HardHat size={28} />,
      gradientClass: "gradient-purple",
      delay: 600,
    },
    {
      title: "Praktikan",
      value: 39,
      icon: <GraduationCap size={28} />,
      gradientClass: "gradient-orange",
      delay: 800,
    },
    {
      title: "Visitor",
      value: 10,
      icon: <UserCheck size={28} />,
      gradientClass: "gradient-green",
      delay: 1000,
    },
  ];

  return (
    <div className="min-h-screen bg-pattern">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-6 container-responsive">
        {/* Main Card - Total Inside NPK2 */}
        <div className="mb-6">
          <StatCard
            title={stats[0].title}
            value={stats[0].value}
            icon={stats[0].icon}
            gradientClass={stats[0].gradientClass}
            delay={stats[0].delay}
          />
        </div>

        {/* Other Statistics Grid - 4 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.slice(1).map((stat, index) => (
            <div key={index + 1}>
              <StatCard
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                gradientClass={stat.gradientClass}
                delay={stat.delay}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
