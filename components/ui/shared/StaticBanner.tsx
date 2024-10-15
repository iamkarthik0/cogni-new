import { FC } from "react";
import { cn } from "@/lib/utils";

interface Statistic {
  value: string;
  label: string;
}

interface StatisticsBannerProps {
  className?: string;
  statistics: Statistic[];
}

const StatisticsBanner: FC<StatisticsBannerProps> = ({
  className,
  statistics = [
    { value: "50+", label: "Successful Client Implementation" },
    { value: "10+", label: "Generative AI-Powered Solutions" },
    { value: "5x", label: "Increase in Customer Engagement" },
    { value: "40+", label: "AI/ML Deployments" },
  ],
}) => {
  return (
    <div
      className={cn(
        "bg-[#0055A7] rounded-lg p-6 text-white container mx-auto lg:my-4 py-6 lg:py-12",
        className
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statistics.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="h1">{stat.value}</div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsBanner;
