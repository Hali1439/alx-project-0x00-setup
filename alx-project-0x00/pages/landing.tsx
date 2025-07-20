import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      {/* Buttons with different sizes and shapes */}
      <div className="mt-8 space-y-4">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md" />
        <Button title="Large Rounded-full" styles="text-lg rounded-full" />
        <Button title="Extra Rounded-lg" styles="text-lg rounded-lg" />
      </div>
    </div>
  );
};

export default Landing;
