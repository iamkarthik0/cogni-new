import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  variant?: 'gray' | 'blue' | string;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  variant = 'gray',
  className 
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "p-8 md:p-12 rounded-[23px] space-y-4 md:space-y-5",
        variant === 'gray' ? "bg-[#F2F2F2]" : "bg-[#EEF6FF]",
        className
      )}
      style={{ width: '100%', height: '100%' }}
    >
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;