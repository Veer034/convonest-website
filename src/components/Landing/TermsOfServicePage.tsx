"use client";

import { Button, Card, CardBody } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

const TermsOfServicePage = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("introduction");

  const navigationSections = [
    { id: "introduction", title: "Introduction", icon: "📜" },
    { id: "service-usage", title: "Service Usage", icon: "⚙️" },
    { id: "payments", title: "Payments & Refunds", icon: "💰" },
    { id: "liability", title: "Limitation of Liability", icon: "⚠️" },
    { id: "data-handling", title: "Data Handling", icon: "💾" },
    { id: "service-termination", title: "Service Termination", icon: "❌" },
    { id: "acceptance", title: "User Acceptance", icon: "✅" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationSections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="terms-of-service"
      className={`min-h-screen ${theme === "dark" ? "text-white" : "text-slate-800"}`}
    >
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-10 lg:pt-14 pb-0">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 mb-4">
              📜 Terms & Conditions
            </span>
            <h1 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 sm:text-2xl">
              These Terms of Service outline the rules, responsibilities, and
              rights for using Convonest’s AI-powered customer engagement
              platform.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-0">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/4">
              <div className="sticky top-8">
                <Card className="bg-slate-50 border-0 shadow-lg">
                  <CardBody className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">
                      Quick Navigation
                    </h3>
                    <nav className="space-y-2">
                      {navigationSections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                            activeSection === section.id
                              ? "bg-blue-100 text-blue-700 border-l-4 border-blue-500"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                          }`}
                        >
                          <span className="text-base">{section.icon}</span>
                          <span className="text-sm font-medium">
                            {section.title}
                          </span>
                        </button>
                      ))}
                    </nav>
                  </CardBody>
                </Card>
              </div>
            </div>

            <div className="lg:w-3/4 h-[80vh] overflow-y-auto pr-4">
              <div className="space-y-16">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        📜 Introduction
                      </h2>
                      <p className="text-slate-600 text-lg">
                        Welcome to Convonest. By accessing or using our
                        services, you agree to be bound by these Terms of
                        Service. These terms apply to all users, including
                        businesses and their customers.
                      </p>
                    </CardBody>
                  </Card>
                </section>

                {/* Service Usage */}
                <section id="service-usage" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        ⚙️ Service Usage
                      </h2>
                      <p className="text-slate-600 text-lg">
                        Users must use our platform in accordance with all
                        applicable laws and regulations. Misuse of the platform,
                        including unauthorized access or interference with other
                        users' data, may result in termination of access.
                      </p>
                    </CardBody>
                  </Card>
                </section>

                {/* Payments & Refunds */}
                <section id="payments" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        💰 Payments & Refunds
                      </h2>
                      <p className="text-slate-600 text-lg">
                        All fees are charged as per the subscription plan. In
                        the event of service discontinuation or company
                        shutdown:
                      </p>
                      <ul className="list-disc ml-6 mt-4 space-y-2 text-slate-600">
                        <li>
                          Prepaid fees are generally non-refundable, unless
                          local law requires otherwise.
                        </li>
                        <li>
                          The company may, at its discretion, offer pro-rated
                          refunds for unused service periods.
                        </li>
                        <li>
                          Refunds are subject to verification and processing
                          timelines.
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </section>

                {/* Limitation of Liability */}
                <section id="liability" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        ⚠️ Limitation of Liability
                      </h2>
                      <p className="text-slate-600 text-lg">
                        The company is not liable for any indirect, incidental,
                        or consequential damages resulting from the use or
                        inability to use the service. This includes loss of
                        profits, business interruption, or loss of data, except
                        where required by law.
                      </p>
                    </CardBody>
                  </Card>
                </section>

                {/* Data Handling */}
                <section id="data-handling" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        💾 Data Handling
                      </h2>
                      <p className="text-slate-600 text-lg">
                        Users are responsible for backing up their data. In case
                        of service discontinuation, the company will provide
                        reasonable access to download data before deletion,
                        unless prohibited by law.
                      </p>
                    </CardBody>
                  </Card>
                </section>

                {/* Service Termination */}
                <section id="service-termination" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        ❌ Service Termination
                      </h2>
                      <p className="text-slate-600 text-lg">
                        The company may terminate services for maintenance,
                        regulatory reasons, or business shutdown. Users will be
                        notified in advance whenever reasonably possible.
                      </p>
                    </CardBody>
                  </Card>
                </section>

                {/* User Acceptance */}
                <section id="acceptance" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        ✅ User Acceptance
                      </h2>
                      <p className="text-slate-600 text-lg">
                        By registering, paying for, or using the service, users
                        accept these Terms of Service in full. Users must review
                        the terms before subscribing.
                      </p>
                    </CardBody>
                  </Card>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServicePage;
