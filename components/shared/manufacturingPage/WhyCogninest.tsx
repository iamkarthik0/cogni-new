"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function WhyCogninest() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`space-y-9 transition-opacity duration-500 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="space-y-8">
        <h1
          className="h2 text-center transition-transform duration-500 ease-out"
          style={{
            transform: inView ? "translateY(0)" : "translateY(50px)",
          }}
        >
          Why Cogninest AI is the Best for Manufacturing
        </h1>
        <p
          className="subtle-text text-center transition-transform duration-500 ease-out"
          style={{
            transform: inView ? "translateY(0)" : "translateY(50px)",
          }}
        >
          Cogninest AI combines deep industry expertise with robust data-driven
          methodologies to deliver unparalleled solutions tailored specifically
          for the manufacturing sector. Our focus on enhancing operational
          efficiency, predictive maintenance, and real-time analytics ensures
          that manufacturers can make data-informed decisions and achieve
          maximum productivity. With a proven track record and a team of
          experts, Cogninest AI is the ideal partner for companies looking to
          embrace the future of manufacturing.
        </p>

        <Image
          src="/cigni-manufacturing.png"
          alt="Manufacturing illustration"
          width={1146}
          height={404}
        />
      </div>
      
    </section>
  );
}
