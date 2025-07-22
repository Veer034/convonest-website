import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";

interface SectionProps {
  value: string;
  description: string;
  icon?: React.ReactNode;
}

function ScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
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

  const section = ({ value, description, icon }: SectionProps) => {
    return (
      <div className="group relative mx-auto max-w-2xl px-4 md:px-8">
        {/* Background Card */}
        <div className="relative transform rounded-2xl md:rounded-3xl bg-white/90 backdrop-blur-sm shadow-2xl border border-gray-100 p-6 md:p-12 transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl group-hover:bg-white/95">
          {/* Decorative Elements */}
          <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2">
            <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
              {icon || (
                <svg
                  className="h-4 w-4 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-col items-center text-center pt-4 md:pt-6">
            {/* Main Title with Enhanced Typography */}
            <h2 className="mb-4 md:mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-2xl md:text-5xl lg:text-6xl font-black leading-tight text-transparent tracking-tight">
              {value}
            </h2>

            {/* Professional Divider */}
            <div className="relative mb-4 md:mb-8 flex w-full items-center justify-center">
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>
              <div className="absolute h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-500 shadow-sm"></div>
            </div>

            {/* Description with Better Typography */}
            <p className="max-w-xl text-sm md:text-lg leading-relaxed text-gray-600 font-light tracking-wide">
              {description}
            </p>

            {/* Subtle Call-to-Action */}
            <div className="mt-4 md:mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="inline-flex items-center px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors duration-300">
                Learn More
                <svg
                  className="ml-1.5 md:ml-2 h-3 w-3 md:h-4 md:w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-4 md:top-8 left-4 md:left-8 h-16 w-16 md:h-32 md:w-32 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-2xl md:blur-3xl"></div>
            <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 h-12 w-12 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 blur-xl md:blur-2xl"></div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced icons for each section
  const sections = [
    {
      value: "AI-Driven Automation",
      description:
        "Transform workflows with our intelligent AI solutions, streamlining email classification, ticket assignments, and customer interactions for unmatched efficiency.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      value: "Omnichannel Support",
      description:
        "Engage with customers across chat, email, and more with our unified platform that ensures seamless communication and superior customer experience.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      value: "Real-Time Insights",
      description:
        "Unlock actionable insights through real-time dashboards, improving agent performance, reducing response time, and enhancing customer satisfaction.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      value: "Scalability & Reliability",
      description:
        "Scale effortlessly with our secure cloud infrastructure, built to handle millions of interactions while maintaining 99.9% uptime.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      ),
    },
    {
      value: "Future-Ready Technology",
      description:
        "Stay ahead with a platform designed for innovation, ready to integrate voice, SMS, and advanced AI capabilities for tomorrow's challenges.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why-us"
      className="overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div ref={triggerRef}>
        {/* Enhanced Header Section */}
        <div className="relative w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 py-12 md:py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-6 md:top-10 left-1/4 h-32 w-32 md:h-64 md:w-64 rounded-full bg-blue-500 blur-2xl md:blur-3xl"></div>
            <div className="absolute bottom-6 md:bottom-10 right-1/4 h-24 w-24 md:h-48 md:w-48 rounded-full bg-indigo-500 blur-xl md:blur-2xl"></div>
          </div>

          <div className="container relative mx-auto px-4 text-center">
            <h2 className="mb-3 md:mb-4 text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              Why Choose
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Convonest
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base md:text-xl text-gray-300 font-light">
              Discover what sets us apart in delivering exceptional customer
              engagement solutions
            </p>

            {/* Scroll Indicator */}
            <div className="mt-8 md:mt-12 flex justify-center">
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-xs md:text-sm font-medium">
                  Scroll to explore
                </span>
                <svg
                  className="h-4 w-4 md:h-5 md:w-5 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Horizontal Scrolling Section */}
        <div
          ref={sectionRef}
          className="relative flex h-[60vh] md:h-[60vh] w-[500vw] flex-row bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
        >
          {sections.map((sectionData, index) => (
            <div
              key={index}
              className="flex h-[60vh] md:h-[60vh] w-screen items-center justify-center py-8 md:py-20"
            >
              {section(sectionData)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
