"use client";

import { Button, Card, CardBody } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import DemoForm from "./DemoForm"; // Import the demo form component

const PricingPage = () => {
  const { theme } = useTheme();
  const [isAnnual, setIsAnnual] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openDemoForm = (planName = "") => {
    setSelectedPlan(planName.toLowerCase().replace(" plan", ""));
    setShowDemoForm(true);
  };

  const closeDemoForm = () => {
    setShowDemoForm(false);
  };

  const pricingPlans = [
    {
      name: "Basic Plan",
      price: isAnnual ? 20 : 25,
      originalPrice: 25,
      period: "per agent/month",
      description:
        "Perfect for small teams getting started with AI-powered customer support",
      maxAgents: "Up to 20 agents",
      popular: false,
      features: [
        "Dynamic Ticketing System",
        "Basic Analytics Dashboard",
        "AI-Powered Email Classification",
        "Customer Email Type Recognition",
        "Basic Customer Reviews Management",
        "Standard Support",
        "Email Integration",
        "Basic Workflow Automation",
      ],
      icon: "🚀",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Pro Plan",
      price: isAnnual ? 36 : 45,
      originalPrice: 45,
      period: "per agent/month",
      description:
        "Ideal for growing businesses with advanced automation needs",
      maxAgents: "Up to 100 agents",
      popular: true,
      features: [
        "Everything in Basic Plan",
        "Automatic Email Responses",
        "Advanced AI FAQ Management",
        "Intelligent Query Response System",
        "Advanced Workflow Automation",
        "Priority Support",
        "Custom Email Templates",
        "Performance Analytics",
        "Multi-channel Support (Chat + Email)",
      ],
      icon: "⭐",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      name: "Enterprise Plan",
      price: "Custom",
      originalPrice: "Custom",
      period: "pricing",
      description:
        "Tailored solutions for large organizations with unlimited scalability",
      maxAgents: "Unlimited agents",
      popular: false,
      features: [
        "Everything in Pro Plan",
        "Custom AI Model Training",
        "API Access & Integrations",
        "Dedicated Account Manager",
        "24/7 Premium Support",
        "Custom Dashboard Development",
        "Advanced Security Features",
        "White-label Options",
        "SLA Guarantees",
      ],
      icon: "🏆",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const additionalFeatures = [
    {
      title: "Dashboard Analytics",
      description:
        "Comprehensive dashboard showing customer email types, reviews, and AI classification insights",
      icon: "📊",
    },
    {
      title: "AI Email Classification",
      description:
        "Automatically categorize emails into complaints, queries, or suggestions",
      icon: "🤖",
    },
    {
      title: "Smart Assignment",
      description:
        "Automatic email assignment to the right agents based on expertise and workload",
      icon: "⚡",
    },
    {
      title: "Customer Query Response",
      description:
        "AI-powered responses for customer queries with personalized touch",
      icon: "💬",
    },
  ];

  return (
    <section
      id="pricing"
      className={`min-h-screen ${theme === "dark" ? "text-white" : "text-slate-800"}`}
    >
      {/* Pricing Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 lg:py-28">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 mb-4">
              Pricing Plans
            </span>
            <h1 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl">
              Choose the Perfect Plan for Your Customer Engagement
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 sm:text-2xl">
              Scale your customer engagement with AI-powered solutions. From
              small teams to enterprise operations.
            </p>

            {/* Annual/Monthly Toggle */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <span
                className={`text-lg font-medium ${!isAnnual ? "text-blue-600" : "text-slate-600"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                  isAnnual ? "bg-blue-600" : "bg-slate-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-lg font-medium ${isAnnual ? "text-blue-600" : "text-slate-600"}`}
              >
                Annual
              </span>
              {isAnnual && (
                <span className="ml-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                  Save 20%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`group relative border-0 bg-white/70 backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                  plan.popular ? "ring-2 ring-blue-500 shadow-blue-200/50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardBody className="p-8">
                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      {plan.price === "Custom" ? (
                        <div className="text-4xl font-bold text-slate-800">
                          Custom
                        </div>
                      ) : (
                        <div className="flex items-baseline justify-center">
                          <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            ${plan.price}
                          </span>
                          {isAnnual && plan.price !== "Custom" && (
                            <span className="ml-2 text-lg text-slate-500 line-through">
                              ${plan.originalPrice}
                            </span>
                          )}
                        </div>
                      )}
                      <p className="text-slate-600 mt-1">{plan.period}</p>
                      <p className="text-sm font-semibold text-blue-600 mt-2">
                        {plan.maxAgents}
                      </p>
                    </div>

                    <Button
                      onClick={() =>
                        plan.price === "Custom"
                          ? scrollToContact()
                          : openDemoForm(plan.name)
                      }
                      className={`w-full bg-gradient-to-r ${plan.gradient} font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${
                        plan.popular ? "ring-2 ring-offset-2 ring-blue-500" : ""
                      }`}
                      size="lg"
                      radius="full"
                    >
                      {plan.price === "Custom"
                        ? "Contact Sales"
                        : "Get Started"}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Highlight Section */}
      <div className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-800 mb-4">
              Core Features
            </span>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
              What Makes Our Platform Special
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Every plan includes essential tools to help your business engage
              customers across chat, email, and other digital channels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {additionalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <CardBody className="p-8 text-center">
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="mb-4 text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-28">
        <div className="container mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 mb-4">
              FAQ
            </span>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {[
              {
                question: "Can I upgrade or downgrade my plan anytime?",
                answer:
                  "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.",
              },
              {
                question: "What's included in the AI email classification?",
                answer:
                  "Our AI automatically categorizes incoming emails into complaints, queries, suggestions, and more, then routes them to the appropriate agents or departments.",
              },
              {
                question: "Is there a setup fee?",
                answer:
                  "No setup fees for Basic and Pro plans. Enterprise plans may include implementation services as part of the custom pricing.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "Basic plans include standard support, Pro plans get priority support, and Enterprise customers receive dedicated account management with 24/7 premium support.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardBody className="p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Form Modal (keep it as last child inside main <section>) */}
      {showDemoForm && (
        <DemoForm selectedPlan={selectedPlan} onClose={closeDemoForm} />
      )}
    </section>
  );
};

export default PricingPage;
