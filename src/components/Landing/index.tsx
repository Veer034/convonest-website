"use client";

import { Button, Card, CardBody } from "@nextui-org/react";
import { useTheme } from "next-themes";

import AnimatedLandingPage from "../Greet";
import Contact from "./Contact";
import CarouselWithTextOverlay from "./LandingPageCarousel";
import ChatIntegration from "./ChatIntegration";

const features = [
  {
    title: "AI-Powered Email Classification",
    description:
      "Streamline your email interactions with AI-powered automation. Automatically classify emails into complaints, queries, or suggestions and assign them to the right agents for swift and effective resolutions.",
    link: "#",
  },
  {
    title: "Live Chat with Intelligent Features",
    description:
      "Deliver real-time support to your customers with our live chat platform. Empower your agents with personalized logins and workflows to handle chat requests efficiently. Enable automated text responses and provide instant access to FAQs, enhancing customer satisfaction while reducing response times.",
    link: "#",
  },
  {
    title: "Dynamic Ticketing System",
    description:
      "Ensure no customer issue is left unresolved with our integrated ticketing solution. Customers can raise concerns effortlessly, and agents can track, manage, and resolve issues transparently.",
    link: "#",
  },
  {
    title: "Intelligent FAQ Assistance",
    description:
      "Revolutionize your customer support with our AI-enhanced FAQ system. By utilizing cutting-edge technology, our platform predicts and matches customer queries with similar questions, providing instant and accurate answers. This minimizes repetitive interactions and enables your team to focus on high-value tasks.",
    link: "#",
  },
  {
    title: "Business Management Reports",
    description:
      "Access dashboards and reports to monitor key performance indicators (KPIs), customer satisfaction levels, and more.",
    link: "#",
  },
  {
    title: "Insights-Driven Analytics",
    description:
      "Unlock the power of data with detailed reports and analytics. Monitor agent performance, response times, and interaction trends to make informed decisions and continually improve your customer experience.",
    link: "#",
  },
  {
    title: "Customizable Workflows",
    description:
      "Adapt our platform to your unique business needs. Define custom workflows for agents, configure rules for task assignment, and ensure tailored customer experiences that reflect your brand values.",
    link: "#",
  },
  {
    title: "Scalable and Secure SaaS Platform",
    description:
      "Our cloud-based platform is designed to scale with your business needs, providing a secure and reliable solution for managing customer interactions, analytics, and automation.",
    link: "#",
  },

  {
    title: "Future-Ready Omnichannel Platform",
    description:
      "Currently supporting email and chat, our platform is designed to integrate calls and SMS in the near future, providing a truly unified customer experience.",
    link: "#",
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
        className={`mx-auto min-h-screen w-full ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        <CarouselWithTextOverlay />

        <div className="mt-10 bg-transparent py-20">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 font-serif text-4xl font-extrabold drop-shadow-lg sm:text-5xl md:text-6xl">
              Transform Your Customer Engagement with AI-Powered Solutions
            </h1>
            <p className="mb-8 text-xl font-light drop-shadow-md sm:text-2xl">
              Convonest Analytics provides a cutting-edge platform to
              revolutionize how businesses manage and optimize customer
              interactions across chat, email, and WhatsApp. Harnessing the
              power of AI-driven automation and data-driven insights, we enable
              businesses to deliver unparalleled customer experiences, enhance
              operational efficiency, and fuel growth through smarter
              decision-making.
            </p>
            <div className="flex flex-col items-center justify-center space-x-0 sm:flex-row sm:space-x-4">
              <Button
                onClick={() => scrollToSection("about-us")}
                className="mb-4 text-lg text-blue-600 hover:bg-blue-100 sm:mb-0"
              >
                Learn More About Us
              </Button>
              <Button
                as="a"
                href="/signup"
                className="mb-4 text-lg text-blue-600 hover:bg-blue-100 sm:mb-0"
              >
                Start Your 21-Day Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <section id="about-us" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-10 text-5xl font-bold text-gray-800">About Us</h2>
            <p className="mx-auto max-w-4xl text-xl text-gray-600 leading-relaxed">
              Founded in October 2024, Convonest Tech Pvt Ltd is a Ranchi-based
              startup dedicated to transforming customer engagement through
              AI-powered interaction management and advanced analytics. Our
              mission is to empower businesses to deliver exceptional customer
              experiences by streamlining communication, resolving issues
              efficiently, and enabling data-driven decision-making.
            </p>
            <p className="mt-10 mx-auto max-w-4xl text-xl text-gray-600 leading-relaxed">
              The company is led by experienced professionals with over a decade
              of expertise in customer engagement technologies, big data, and
              analytics. Our founder brings deep insights from working in the
              contact center domain at Cisco, where they specialized in scalable
              solutions for customer interactions. Additionally, their diverse
              experience includes time in Reliance Retail Ltd., focusing on
              supply chain and logistics, as well as AdTech innovations at Zee5
              OTT platform, all based in Bangalore.
            </p>
            <p className="mt-10 mx-auto max-w-4xl text-xl text-gray-600 leading-relaxed">
              At Convonest, we blend innovation with simplicity, enabling
              businesses to leverage cutting-edge technologies like AI,
              automation, and analytics. Whether it's intelligent email
              classification, dynamic live chat, or robust ticket management, we
              are committed to delivering scalable, future-ready solutions
              tailored to meet our clients' evolving needs.
            </p>
            <p className="mt-10 mx-auto max-w-4xl text-xl text-gray-600 leading-relaxed">
              Driven by a vision to revolutionize how businesses interact with
              their customers, Convonest is your trusted partner for seamless
              communication, actionable insights, and sustainable growth.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="bg-gradient-to-br from-white via-gray-100 to-gray-50 py-16 text-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Main Features of Convonest Analytics
            </h2>
            <p className="mb-8 text-center text-lg text-gray-600">
              Our platform offers a range of features designed to optimize and
              analyze your customer communications effectively, helping your
              business grow.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 rounded-lg"
                >
                  <CardBody className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <AnimatedLandingPage />

      {/* Chat Integration */}
      <ChatIntegration />

      {/* Contact Section */}
      <Contact />
      <Card className="m-0 rounded-none">
        <footer className="w-full bg-gray-800 py-8 text-white">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <p>
              © 2025 Convonest Analytics. All rights reserved. Powered by
              Convonest Tech Pvt Ltd.
            </p>
          </div>
        </footer>
      </Card>
    </>
  );
};

export default LandingPage;
