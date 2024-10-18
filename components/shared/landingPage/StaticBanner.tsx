"use client"
import { FC, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Statistic {
  value: string;
  label: string;
}

interface StatisticsBannerProps {
  className?: string;
  statistics: Statistic[];
}

const StatisticsBanner: FC<StatisticsBannerProps> = ({
  statistics = [
    { value: "50+", label: "Successful Client Implementation" },
    { value: "10+", label: "Generative AI-Powered Solutions" },
    { value: "5x", label: "Increase in Customer Engagement" },
    { value: "40+", label: "AI/ML Deployments" },
  ],
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "bg-[#0055A7] rounded-lg p-6 text-white lg:my-4 py-6 lg:py-12"
        )}
        ref={ref}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="h1"
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Counter endValue={parseInt(stat.value)} inView={inView} />
                {stat.value.includes('+') && '+'}
                {stat.value.includes('x') && 'x'}
              </motion.div>
              <motion.div
                className="text-sm"
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {stat.label}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Counter: FC<{ endValue: number; inView: boolean }> = ({ endValue, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = endValue;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue, inView]);

  return <>{count}</>;
};

export default StatisticsBanner;
