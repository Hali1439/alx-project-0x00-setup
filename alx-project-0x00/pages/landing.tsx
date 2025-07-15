import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8">
      <h1 className="text-2xl font-semibold">Landing Page</h1>

      {/* Render multiple cards */}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
