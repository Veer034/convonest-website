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
    { id: "third-party", title: "Third-Party Integrations", icon: "🔗" },
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
              rights for using Convonest's AI-powered customer engagement
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
                      <p className="text-slate-600 text-lg mb-4">
                        Users must use our platform in accordance with all
                        applicable laws and regulations. Misuse of the platform,
                        including unauthorized access or interference with other
                        users' data, may result in termination of access.
                      </p>
                    </CardBody>
                  </Card>
                </section>

                {/* Third-Party Integrations */}
                <section id="third-party" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <h2 className="text-3xl font-bold text-slate-800 mb-6">
                        🔗 Third-Party Integrations
                      </h2>

                      <div className="space-y-6">
                        <p className="text-slate-600 text-lg">
                          Our platform integrates with third-party services to
                          enhance functionality and provide seamless customer
                          engagement across multiple channels.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                          <h3 className="text-xl font-bold text-slate-800 mb-4">
                            Supported Integrations
                          </h3>
                          <ul className="space-y-2 text-slate-600">
                            <li>• Gmail (Google Workspace)</li>
                            <li>• Microsoft Outlook (Microsoft 365)</li>
                            <li>
                              • Other communication platforms as may be added
                            </li>
                          </ul>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                          <h3 className="text-xl font-bold text-slate-800 mb-4">
                            By Connecting These Services, You:
                          </h3>
                          <ul className="space-y-3 text-slate-600">
                            <li>
                              • <strong>Authorize Convonest</strong> to access
                              data according to granted permissions
                            </li>
                            <li>
                              • <strong>Acknowledge</strong> that third-party
                              terms of service also apply
                            </li>
                            <li>
                              • <strong>Understand</strong> that service
                              availability depends on third-party API
                              availability
                            </li>
                            <li>
                              • <strong>Are responsible</strong> for maintaining
                              valid credentials and subscriptions with
                              third-party providers
                            </li>
                          </ul>
                        </div>

                        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
                          <CardBody className="p-6">
                            <h3 className="text-xl font-bold text-slate-800 mb-4">
                              📧 Gmail / Google Workspace Integration
                            </h3>

                            <div className="space-y-4 text-slate-600">
                              <div>
                                <h4 className="font-bold text-slate-800 mb-2">
                                  Authorization & Permissions
                                </h4>
                                <ul className="space-y-2 text-sm ml-4">
                                  <li>
                                    • You grant Convonest permission to access
                                    your Gmail account using Google OAuth 2.0
                                  </li>
                                  <li>
                                    • We request only the minimum permissions
                                    necessary: gmail.readonly and gmail.send
                                  </li>
                                  <li>
                                    • You can revoke access at any time through
                                    Google Account settings
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 mb-2">
                                  Google Terms Compliance
                                </h4>
                                <ul className="space-y-2 text-sm ml-4">
                                  <li>
                                    • Our use of Gmail API is subject to
                                    Google's API Terms of Service
                                  </li>
                                  <li>
                                    • Google's Privacy Policy applies to data
                                    accessed through their services
                                  </li>
                                  <li>
                                    • We comply with Google API Services User
                                    Data Policy
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 mb-2">
                                  Data Usage Limits
                                </h4>
                                <ul className="space-y-2 text-sm ml-4">
                                  <li>
                                    • We use Gmail API within permitted rate
                                    limits and quotas
                                  </li>
                                  <li>
                                    • Service interruptions may occur due to
                                    Google's service availability
                                  </li>
                                  <li>
                                    • We are not responsible for changes to
                                    Google's API or policies
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 mb-2">
                                  Workspace Administrator
                                </h4>
                                <ul className="space-y-2 text-sm ml-4">
                                  <li>
                                    • Google Workspace customers may have
                                    additional security policies
                                  </li>
                                  <li>
                                    • Contact your IT administrator if access is
                                    restricted by organizational policies
                                  </li>
                                  <li>
                                    • Domain-wide delegation may be required for
                                    some enterprise deployments
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </CardBody>
                        </Card>

                        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-0">
                          <CardBody className="p-6">
                            <h3 className="text-xl font-bold text-slate-800 mb-4">
                              📧 Microsoft 365 / Outlook Integration
                            </h3>

                            <div className="space-y-4 text-slate-600">
                              <div>
                                <h4 className="font-bold text-slate-800 mb-2">
                                  Authorization & Permissions
                                </h4>
                                <ul className="space-y-2 text-sm ml-4">
                                  <li>
                                    • You grant Convonest permission to access
                                    your Microsoft 365 account using OAuth 2.0
                                  </li>
                                  <li>
                                    • We request only the minimum permissions
                                    necessary: Mail.Read and Mail.Send
                                  </li>
                                  <li>
                                    • You can revoke access at any time through
                                    Microsoft Account settings
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 mb-2">
                                  Microsoft Terms Compliance
                                </h4>
                                <ul className="space-y-2 text-sm ml-4">
                                  <li>
                                    • Our use of Microsoft Graph API is subject
                                    to Microsoft's API Terms of Use
                                  </li>
                                  <li>
                                    • Microsoft's Privacy Statement applies to
                                    data accessed through their services
                                  </li>
                                  <li>
                                    • We comply with Microsoft's App Developer
                                    Agreement
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 mb-2">
                                  Data Usage Limits
                                </h4>
                                <ul className="space-y-2 text-sm ml-4">
                                  <li>
                                    • We use Microsoft Graph API within
                                    permitted rate limits
                                  </li>
                                  <li>
                                    • Service interruptions may occur due to
                                    Microsoft's service availability
                                  </li>
                                  <li>
                                    • We are not responsible for changes to
                                    Microsoft's API or policies
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold text-slate-800 mb-2">
                                  Administrator Consent
                                </h4>
                                <ul className="space-y-2 text-sm ml-4">
                                  <li>
                                    • Enterprise customers may require
                                    administrator consent for tenant-wide
                                    deployment
                                  </li>
                                  <li>
                                    • Contact your IT administrator if you
                                    cannot authorize the integration
                                  </li>
                                  <li>
                                    • We provide admin consent workflows for
                                    enterprise deployments
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
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
                      <div className="space-y-4">
                        <p className="text-slate-600 text-lg">
                          The company is not liable for any indirect,
                          incidental, or consequential damages resulting from
                          the use or inability to use the service. This includes
                          loss of profits, business interruption, or loss of
                          data, except where required by law.
                        </p>

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                          <h3 className="text-lg font-bold text-orange-800 mb-3">
                            Third-Party Service Dependencies
                          </h3>
                          <p className="text-orange-700">
                            We are not liable for service disruptions, data
                            loss, or functionality issues caused by third-party
                            providers (including Google, Microsoft, or other
                            integrated services). This includes API changes,
                            service outages, or policy modifications by these
                            providers.
                          </p>
                        </div>
                      </div>
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
