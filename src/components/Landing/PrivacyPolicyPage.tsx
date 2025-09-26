"use client";

import { Button, Card, CardBody } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

const PrivacyPolicyPage = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("introduction");

  // Navigation sections
  const navigationSections = [
    { id: "introduction", title: "Introduction", icon: "🔒" },
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: "📊",
    },
    { id: "data-usage", title: "How We Use Your Data", icon: "⚙️" },
    { id: "data-security", title: "Data Protection", icon: "🛡️" },
    { id: "data-sharing", title: "Data Sharing", icon: "🤝" },
    { id: "user-rights", title: "Your Rights", icon: "👤" },
    { id: "retention", title: "Data Retention", icon: "⏰" },
  ];

  // Auto-update active section based on scroll
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
      id="privacy-policy"
      className={`min-h-screen ${theme === "dark" ? "text-white" : "text-slate-800"}`}
    >
      {/* Privacy Policy Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-10 lg:pt-14 pb-0">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 mb-4">
              🔒 Privacy & Data Protection
            </span>
            <h1 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 sm:text-2xl">
              Your privacy matters. Learn how we collect, use, and protect your
              data in our AI-powered customer engagement platform.
            </p>
            <div className="mt-8 text-sm text-slate-500">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-0">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky Navigation */}
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
            {/* Content Sections */}
            <div className="lg:w-3/4 h-[80vh] overflow-y-auto pr-4">
              <div className="space-y-16">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">🔒</span>
                        <h2 className="text-3xl font-bold text-slate-800">
                          Introduction
                        </h2>
                      </div>
                      <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
                        <p>
                          Welcome to Convonest, your AI-powered customer
                          engagement platform. This Privacy Policy explains how
                          we collect, use, and protect your information when you
                          use our services for managing customer interactions
                          across chat, email, and other digital channels.
                        </p>
                        <p>
                          We are committed to protecting your privacy and
                          maintaining the highest standards of data security.
                          This policy applies to all users of our platform,
                          including businesses and their customers.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                          <p className="text-blue-800 font-medium mb-2">
                            🛡️ Our Commitment
                          </p>
                          <p className="text-blue-700">
                            We comply with GDPR, DPDP and other applicable data
                            protection regulations to ensure your data is
                            handled responsibly and securely.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>

                {/* Information Collection */}
                <section id="information-collection" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">📊</span>
                        <h2 className="text-3xl font-bold text-slate-800">
                          Information We Collect
                        </h2>
                      </div>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
                            <CardBody className="p-6">
                              <h3 className="text-xl font-bold text-slate-800 mb-3">
                                👤 Account Information
                              </h3>
                              <ul className="space-y-2 text-slate-600">
                                <li>• Name and contact details</li>
                                <li>• Email addresses and phone numbers</li>
                                <li>• Company information</li>
                                <li>• Account credentials</li>
                              </ul>
                            </CardBody>
                          </Card>

                          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0">
                            <CardBody className="p-6">
                              <h3 className="text-xl font-bold text-slate-800 mb-3">
                                💬 Communication Data
                              </h3>
                              <ul className="space-y-2 text-slate-600">
                                <li>• Customer emails and chat messages</li>
                                <li>• Support tickets and conversations</li>
                                <li>
                                  • Response times and interaction history
                                </li>
                                <li>• Customer satisfaction ratings</li>
                              </ul>
                            </CardBody>
                          </Card>

                          <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-0">
                            <CardBody className="p-6">
                              <h3 className="text-xl font-bold text-slate-800 mb-3">
                                ⚙️ Usage Information
                              </h3>
                              <ul className="space-y-2 text-slate-600">
                                <li>
                                  • Platform usage and feature interactions
                                </li>
                                <li>• Agent performance metrics</li>
                                <li>• Dashboard and report access</li>
                                <li>• Login times and session data</li>
                              </ul>
                            </CardBody>
                          </Card>

                          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-0">
                            <CardBody className="p-6">
                              <h3 className="text-xl font-bold text-slate-800 mb-3">
                                📱 Technical Data
                              </h3>
                              <ul className="space-y-2 text-slate-600">
                                <li>• Device and browser information</li>
                                <li>• IP addresses for security</li>
                                <li>• Cookies and similar technologies</li>
                                <li>• Error logs and performance data</li>
                              </ul>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>

                {/* Data Usage */}
                <section id="data-usage" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">⚙️</span>
                        <h2 className="text-3xl font-bold text-slate-800">
                          How We Use Your Data
                        </h2>
                      </div>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
                            <CardBody className="p-6">
                              <div className="text-3xl mb-3">🚀</div>
                              <h3 className="text-lg font-bold text-slate-800 mb-3">
                                Service Delivery
                              </h3>
                              <p className="text-slate-600 text-sm">
                                Provide our AI-powered customer engagement
                                platform, including email classification, chat
                                management, and automated responses.
                              </p>
                            </CardBody>
                          </Card>

                          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
                            <CardBody className="p-6">
                              <div className="text-3xl mb-3">🤖</div>
                              <h3 className="text-lg font-bold text-slate-800 mb-3">
                                AI Enhancement
                              </h3>
                              <p className="text-slate-600 text-sm">
                                Improve our AI models and platform capabilities,
                                such as enhancing classification accuracy,
                                generating suggestions, optimizing workflows,
                                and developing other features or insights as the
                                platform evolves.
                              </p>
                            </CardBody>
                          </Card>

                          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0">
                            <CardBody className="p-6">
                              <div className="text-3xl mb-3">📊</div>
                              <h3 className="text-lg font-bold text-slate-800 mb-3">
                                Analytics & Reports
                              </h3>
                              <p className="text-slate-600 text-sm">
                                Generate performance dashboards, customer
                                insights, business analytics, and other
                                reporting tools that may be introduced in the
                                future to help improve your operations.
                              </p>
                            </CardBody>
                          </Card>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                          <h4 className="font-bold text-yellow-800 mb-2">
                            🔍 Legal Basis for Processing
                          </h4>
                          <div className="text-yellow-700 space-y-2">
                            <p>
                              • <strong>Contract Performance:</strong> To
                              provide our services as agreed
                            </p>
                            <p>
                              • <strong>Legitimate Interest:</strong> To improve
                              our platform and customer experience
                            </p>
                            <p>
                              • <strong>Consent:</strong> For marketing
                              communications and optional features
                            </p>
                            <p>
                              • <strong>Legal Compliance:</strong> To meet
                              regulatory and legal requirements
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>

                {/* Data Security */}
                <section id="data-security" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">🛡️</span>
                        <h2 className="text-3xl font-bold text-slate-800">
                          Data Protection
                        </h2>
                      </div>

                      <div className="space-y-6">
                        <p className="text-slate-600 text-lg">
                          We implement industry-standard security measures to
                          safeguard your data from unauthorized access, loss, or
                          misuse. Security is embedded in every stage of our
                          platform’s design and operations.
                        </p>

                        {/* Access Controls First – shows strong internal discipline */}
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                          <h4 className="font-bold text-blue-800 mb-3">
                            🔒 Access Controls
                          </h4>
                          <p className="text-blue-700">
                            We use role-based access controls, periodic access
                            reviews, and detailed audit logging to ensure only
                            authorized personnel can access your data. All
                            access is monitored and recorded for security
                            purposes.
                          </p>
                        </div>

                        {/* Security Measures Second – covers infrastructure protection */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
                            <CardBody className="p-6">
                              <h3 className="text-lg font-bold text-slate-800 mb-3">
                                🔐 Security Measures
                              </h3>
                              <ul className="space-y-2 text-slate-600 text-sm">
                                <li>
                                  • Enterprise-grade encryption for data at rest
                                  and in transit
                                </li>
                                <li>
                                  • Stored in secure data centers located in
                                  India, unless otherwise required by law or
                                  agreed with the customer.
                                </li>
                                <li>
                                  • Ongoing security monitoring and periodic
                                  internal audits
                                </li>
                              </ul>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>

                {/* Data Sharing */}
                <section id="data-sharing" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">🤝</span>
                        <h2 className="text-3xl font-bold text-slate-800">
                          Data Sharing
                        </h2>
                      </div>
                      <div className="space-y-6">
                        <p className="text-slate-600 text-lg">
                          We do not sell your data. We only share information in
                          limited circumstances to provide our services or
                          comply with legal requirements.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0">
                            <CardBody className="p-6">
                              <h3 className="text-lg font-bold text-slate-800 mb-3">
                                ✅ When We Share Data
                              </h3>
                              <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• With your explicit consent</li>
                                <li>
                                  • With service providers under strict
                                  agreements
                                </li>
                                <li>• To comply with legal obligations</li>
                                <li>
                                  • To protect rights, safety, or security
                                </li>
                              </ul>
                            </CardBody>
                          </Card>

                          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0">
                            <CardBody className="p-6">
                              <h3 className="text-lg font-bold text-slate-800 mb-3">
                                ❌ What We Don't Do
                              </h3>
                              <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Sell data to third parties</li>
                                <li>• Share data for advertising purposes</li>
                                <li>
                                  • Provide access without proper safeguards
                                </li>
                                <li>
                                  • Use your data outside our stated purposes
                                  and policy
                                </li>
                              </ul>
                            </CardBody>
                          </Card>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                          <h4 className="font-bold text-yellow-800 mb-3">
                            🤖 AI Processing
                          </h4>
                          <p className="text-yellow-700">
                            Your data may be processed by our AI systems to
                            provide current and future features of our platform,
                            such as (but not limited to) email classification,
                            automated responses, analytics, and other
                            enhancements. All AI processing is conducted
                            securely within our platform, and we do not share
                            your data with external AI services without your
                            consent.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>

                {/* User Rights */}
                <section id="user-rights" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">👤</span>
                        <h2 className="text-3xl font-bold text-slate-800">
                          Your Rights
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 hover:scale-105 transition-transform">
                          <CardBody className="p-6">
                            <div className="text-3xl mb-3">👁️</div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3">
                              Access Your Data
                            </h3>
                            <p className="text-slate-600 text-sm">
                              Request a copy of the personal data we have about
                              you and how we use it.
                            </p>
                          </CardBody>
                        </Card>

                        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 hover:scale-105 transition-transform">
                          <CardBody className="p-6">
                            <div className="text-3xl mb-3">✏️</div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3">
                              Correct Information
                            </h3>
                            <p className="text-slate-600 text-sm">
                              Update or correct any inaccurate personal
                              information in your account.
                            </p>
                          </CardBody>
                        </Card>

                        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 hover:scale-105 transition-transform">
                          <CardBody className="p-6">
                            <div className="text-3xl mb-3">🗑️</div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3">
                              Delete Your Data
                            </h3>
                            <p className="text-slate-600 text-sm">
                              Request deletion of your personal data when no
                              longer needed for our services.
                            </p>
                          </CardBody>
                        </Card>

                        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 hover:scale-105 transition-transform">
                          <CardBody className="p-6">
                            <div className="text-3xl mb-3">📦</div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3">
                              Export Your Data
                            </h3>
                            <p className="text-slate-600 text-sm">
                              Download your data in a portable format to
                              transfer to another service.
                            </p>
                          </CardBody>
                        </Card>

                        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 hover:scale-105 transition-transform">
                          <CardBody className="p-6">
                            <div className="text-3xl mb-3">⛔</div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3">
                              Object to Processing
                            </h3>
                            <p className="text-slate-600 text-sm">
                              Object to certain uses of your data, including
                              marketing communications.
                            </p>
                          </CardBody>
                        </Card>

                        <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-0 hover:scale-105 transition-transform">
                          <CardBody className="p-6">
                            <div className="text-3xl mb-3">⏸️</div>
                            <h3 className="text-lg font-bold text-slate-800 mb-3">
                              Restrict Processing
                            </h3>
                            <p className="text-slate-600 text-sm">
                              Limit how we process your data while we address
                              your concerns.
                            </p>
                          </CardBody>
                        </Card>
                      </div>

                      <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                        <h4 className="font-bold text-blue-800 mb-3">
                          📞 How to Exercise Your Rights
                        </h4>
                        <p className="text-blue-700 mb-3">
                          Contact us at <strong>privacy@convonest.com</strong>{" "}
                          to exercise any of these rights. We'll respond within
                          30 days.
                        </p>
                        <p className="text-blue-700 text-sm">
                          Please include your name, contact information, and
                          specific request. We may need to verify your identity
                          before processing certain requests.
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </section>

                {/* Data Retention */}
                <section id="retention" className="scroll-mt-20">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardBody className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">⏰</span>
                        <h2 className="text-3xl font-bold text-slate-800">
                          Data Retention
                        </h2>
                      </div>
                      <div className="space-y-6">
                        <p className="text-slate-600 text-lg">
                          We keep your data only as long as needed to provide
                          our services and comply with legal requirements.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
                            <CardBody className="p-6">
                              <h3 className="text-lg font-bold text-slate-800 mb-4">
                                📋 Retention Periods
                              </h3>
                              <div className="space-y-3">
                                <span className="text-slate-800 font-semibold text-sm">
                                  We retain different categories of data for
                                  varying periods depending on legal, business,
                                  and operational needs. Retention periods may
                                  be updated from time to time and will be
                                  communicated in the most recent version of
                                  this policy.
                                </span>
                              </div>
                            </CardBody>
                          </Card>

                          <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-0">
                            <CardBody className="p-6">
                              <h3 className="text-lg font-bold text-slate-800 mb-4">
                                🗂️ After Deletion
                              </h3>
                              <ul className="space-y-2 text-slate-600 text-sm">
                                <li>
                                  • Data is securely deleted from our systems
                                </li>
                                <li>
                                  • Backups are overwritten within 90 days
                                </li>
                                <li>
                                  • Some data may be retained for legal
                                  compliance
                                </li>
                                <li>• Anonymous analytics may be preserved</li>
                              </ul>
                            </CardBody>
                          </Card>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                          <h4 className="font-bold text-orange-800 mb-3">
                            ⚖️ Legal Requirements
                          </h4>
                          <p className="text-orange-700 text-sm">
                            Some data may be retained longer to comply with
                            legal, tax, or regulatory obligations. We will
                            inform you if extended retention is required and the
                            specific legal basis for it.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Questions About Your Privacy?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We're committed to transparency. Contact our team for any questions
            about how we protect and handle your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-blue-600 font-semibold hover:bg-blue-50"
              size="lg"
              radius="full"
              onClick={() => {
                window.location.href = "www.convonest.com/#contact";
              }}
            >
              Contact Privacy Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
