"use client";

import { Button, Card, CardBody } from "@nextui-org/react";
import { useTheme } from "next-themes";

import AnimatedLandingPage from "../Greet";
import Contact from "./Contact";
import CarouselWithTextOverlay from "./LandingPageCarousel";
import PricingPage from "./PricingPage";

const features = [
  {
    title: "AI-Powered Email Classification",
    description:
      "Streamline your email interactions with AI-powered automation. Automatically classify emails into complaints, queries, or suggestions and assign them to the right agents for swift and effective resolutions.",
    link: "#",
    icon: "🤖",
  },
  {
    title: "Live Chat with Intelligent Features",
    description:
      "Deliver real-time support to your customers with our live chat platform. Empower your agents with personalized logins and workflows to handle chat requests efficiently. Enable automated text responses and provide instant access to FAQs.",
    link: "#",
    icon: "💬",
  },
  {
    title: "Dynamic Ticketing System",
    description:
      "Ensure no customer issue is left unresolved with our integrated ticketing solution. Customers can raise concerns effortlessly, and agents can track, manage, and resolve issues transparently.",
    link: "#",
    icon: "🎫",
  },
  {
    title: "Intelligent FAQ Assistance",
    description:
      "Revolutionize your customer support with our AI-enhanced FAQ system. By utilizing cutting-edge technology, our platform predicts and matches customer queries with similar questions, providing instant and accurate answers.",
    link: "#",
    icon: "❓",
  },
  {
    title: "Business Management Reports",
    description:
      "Access comprehensive dashboards and reports to monitor key performance indicators (KPIs), customer satisfaction levels, and operational metrics for data-driven decisions.",
    link: "#",
    icon: "📊",
  },
  {
    title: "Insights-Driven Analytics",
    description:
      "Unlock the power of data with detailed reports and analytics. Monitor agent performance, response times, and interaction trends to make informed decisions and continually improve your customer experience.",
    link: "#",
    icon: "📈",
  },
  {
    title: "Customizable Workflows",
    description:
      "Adapt our platform to your unique business needs. Define custom workflows for agents, configure rules for task assignment, and ensure tailored customer experiences that reflect your brand values.",
    link: "#",
    icon: "⚙️",
  },
  {
    title: "Scalable and Secure SaaS Platform",
    description:
      "Our cloud-based platform is designed to scale with your business needs, providing a secure and reliable solution for managing customer interactions, analytics, and automation with enterprise-grade security.",
    link: "#",
    icon: "🔒",
  },
  {
    title: "Future-Ready Omnichannel Platform",
    description:
      "Currently supporting email and chat, our platform is designed to integrate calls and SMS in the near future, providing a truly unified customer experience across all communication channels.",
    link: "#",
    icon: "🌐",
  },
];

const LandingPage = () => {
  const { theme } = useTheme();

  // Scroll to specific section
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`mx-auto min-h-screen w-full ${theme === "dark" ? "text-white" : "text-slate-800"}`}
      >
        <CarouselWithTextOverlay />

        {/* Hero Section */}
        <div className="relative mt-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          <div className="relative container mx-auto px-6 text-center sm:px-8 lg:px-10">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl">
                Transform Your Customer Engagement with AI-Powered Solutions
              </h1>
              <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-600 sm:text-2xl lg:text-2xl">
                Convonest Analytics provides a cutting-edge platform to
                revolutionize how businesses manage and optimize customer
                interactions across chat, email, and WhatsApp. Harnessing the
                power of AI-driven automation and data-driven insights.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Button
                  onClick={() => scrollToSection("about-us")}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-0.5"
                  size="lg"
                  radius="full"
                >
                  Learn More About Us
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-blue-600 bg-transparent px-8 py-3 text-lg font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:-translate-y-0.5"
                  size="lg"
                  radius="full"
                  variant="bordered"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <section id="about-us" className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-16">
                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 mb-4">
                  About Convonest
                </span>
                <h2 className="mb-8 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
                  Pioneering the Future of Customer Engagement
                </h2>
              </div>

              <div className="space-y-8 text-lg leading-relaxed text-slate-600">
                <p className="text-xl">
                  Founded in October 2024, Convonest Tech Pvt Ltd is a
                  Ranchi-based startup dedicated to transforming customer
                  engagement through AI-powered interaction management and
                  advanced analytics. Our mission is to empower businesses to
                  deliver exceptional customer experiences by streamlining
                  communication, resolving issues efficiently, and enabling
                  data-driven decision-making.
                </p>

                <div className="grid gap-8 md:grid-cols-2 mt-12">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
                    <h3 className="mb-4 text-xl font-bold text-slate-800">
                      Expert Leadership
                    </h3>
                    <p>
                      Led by seasoned professionals with over a decade of
                      experience in customer engagement technologies, big data,
                      and analytics, bringing deep domain knowledge in building
                      and scaling contact center solutions across diverse
                      industries.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
                    <h3 className="mb-4 text-xl font-bold text-slate-800">
                      Innovation Focus
                    </h3>
                    <p>
                      We blend innovation with simplicity, enabling businesses
                      to leverage cutting-edge technologies like AI, automation,
                      and analytics. From intelligent email classification to
                      dynamic live chat and robust ticket management.
                    </p>
                  </div>
                </div>

                <p className="mt-12 text-xl font-medium text-slate-700">
                  Driven by a vision to revolutionize how businesses interact
                  with their customers, Convonest is your trusted partner for
                  seamless communication, actionable insights, and sustainable
                  growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-28"
        >
          <div className="container mx-auto px-6 sm:px-8 lg:px-10">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 mb-4">
                Platform Features
              </span>
              <h2 className="mb-8 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
                Comprehensive Customer Engagement Suite
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-slate-600">
                Our platform offers a comprehensive range of features designed
                to optimize and analyze your customer communications
                effectively, helping your business achieve sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group border-0 bg-white/70 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-white"
                >
                  <CardBody className="p-8">
                    <div className="mb-4 text-4xl">{feature.icon}</div>
                    <h3 className="mb-4 text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                    <div className="mt-6 h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-24"></div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <PricingPage />

      <AnimatedLandingPage />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 text-white">
        <div className="container mx-auto px-6 text-center sm:px-8 lg:px-10">
          <div className="mb-8">
            <h3 className="mb-4 text-2xl font-bold">Convonest Analytics</h3>
            <p className="text-slate-300">
              Transforming Customer Engagement with AI-Powered Solutions
            </p>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2025 Convonest Analytics. All rights reserved. Powered by
              Convonest Tech Pvt Ltd.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
