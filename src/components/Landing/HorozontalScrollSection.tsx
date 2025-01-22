import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import React, { useEffect, useRef } from "react";

function ScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-350vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () =>
            `+=${sectionRef.current ? sectionRef.current.scrollWidth - window.innerWidth : 0}`,
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  const section = (value: string, description: string) => {
    return (
      <div className="flex flex-col items-center text-center -translate-y-5">
        {/* Gradient Value */}
        <h2 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-6xl font-bold leading-none text-transparent">
          {value}
        </h2>
        {/* Divider Line */}
        <div className="my-4 w-20 border-t-2 border-gray-300"></div>
        {/* Description */}
        <p className="max-w-lg text-lg text-gray-700">{description}</p>
      </div>
    );
  };

  return (
    <section id="why-us" className="overflow-hidden">
      <div ref={triggerRef}>
        {/* "Why Choose Us" Section */}
        <div className="w-full bg-gray-100 py-10 mt-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold">Why Choose Us</h2>
          </div>
        </div>

        {/* Horizontal Scrolling Section */}
        <div
          ref={sectionRef}
          className="relative flex h-[500px] w-[400vw] flex-row"
        >
          <div className="flex h-screen w-screen items-center justify-center">
            {section(
              "AI-Driven Automation",
              "Transform workflows with our intelligent AI solutions, streamlining email classification, ticket assignments, and customer interactions for unmatched efficiency."
            )}
          </div>
          <div className="flex h-screen w-screen items-center justify-center">
            {section(
              "Omnichannel Support",
              "Engage with customers across chat, email, and more with our unified platform that ensures seamless communication and superior customer experience."
            )}
          </div>
          <div className="flex h-screen w-screen items-center justify-center">
            {section(
              "Real-Time Insights",
              "Unlock actionable insights through real-time dashboards, improving agent performance, reducing response time, and enhancing customer satisfaction."
            )}
          </div>
          <div className="flex h-screen w-screen items-center justify-center">
            {section(
              "Scalability and Reliability",
              "Scale effortlessly with our secure cloud infrastructure, built to handle millions of interactions while maintaining 99.9% uptime."
            )}
          </div>
          <div className="flex h-screen w-screen items-center justify-center">
            {section(
              "Future-Ready Technology",
              "Stay ahead with a platform designed for innovation, ready to integrate voice, SMS, and advanced AI capabilities for tomorrow's challenges."
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
