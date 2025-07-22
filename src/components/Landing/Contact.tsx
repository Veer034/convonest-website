"use client";
import Image from "next/image";
import React, { useState } from "react";
import DemoForm from "./DemoForm"; // Import the demo form component

const Contact = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  const openDemoForm = (planName = "") => {
    setShowDemoForm(true);
  };

  const closeDemoForm = () => {
    setShowDemoForm(false);
  };

  const items = [
    {
      category: "Our Location",
      description: "Ranchi, Jharkhand, 835222",
      icon: "📍",
    },
    {
      category: "Email Us",
      description: "sales@convonest.com",
      icon: "✉️",
    },
    {
      category: "Call Us",
      description: "+91-8884161249",
      icon: "📞",
    },
  ];

  const teamMembers = [
    {
      name: "Ranveer Singh",
      role: "Co-Founder & CEO",
      image: "/images/ranveer.jpg",
      linkedin: "https://www.linkedin.com/in/ranveersingh92",
      description:
        "Expert in customer engagement technologies and big data analytics, with a proven track record of driving innovation and scaling solutions at leading global tech and retail enterprises.",
    },
    {
      name: "Bharat Jangid",
      role: "Co-Founder & CTO",
      image: "/images/bharat.png",
      linkedin: "https://www.linkedin.com/in/bharat-jangid-b3891697",
      description:
        "Technology leader with deep expertise in frontent architecture, having led high-impact engineering initiatives in Socail Media App ",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Team Section */}
      <section id="team" className="py-20 lg:py-28">
        <div className="container mx-auto px-6 text-center sm:px-8 lg:px-10">
          <div className="mb-16">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 mb-4">
              Our Leadership
            </span>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
              Meet Our Visionary Team
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Led by industry veterans with over a decade of expertise in
              customer engagement technologies, our team brings together deep
              technical knowledge and strategic vision.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col items-center rounded-2xl bg-white/70 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-white"
              >
                <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-gradient-to-r from-blue-500 to-indigo-500 shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-1">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {member.name}
                </h3>
                <p className="mb-4 text-lg font-semibold text-blue-600">
                  {member.role}
                </p>
                <p className="mb-6 text-center text-slate-600 leading-relaxed">
                  {member.description}
                </p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>LinkedIn Profile</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.017 0C18.624 0 24.017 5.394 24.017 12.017c0 6.624-5.394 12.017-12.017 12.017C5.394 24.034.001 18.641.001 12.017.001 5.394 5.394 0 12.017 0zM8.948 9.652v6.578h2.146v-6.578h1.46l.155-1.687H11.094V6.484c0-.435.032-.678.678-.678h.927V4.119H11.553c-1.769 0-2.605.97-2.605 2.605v1.241H7.791v1.687h1.157z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact" className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 text-center sm:px-8 lg:px-10">
          <div className="mb-16">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 mb-4">
              Get In Touch
            </span>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
              Let's Start a Conversation
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Ready to transform your customer engagement? Contact our team to
              learn how Convonest can revolutionize your business
              communications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {items.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:from-blue-100 hover:to-indigo-100"
              >
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {item.category}
                </h3>

                {item.category === "Email Us" ? (
                  <a
                    href={`mailto:${item.description}`}
                    className="text-lg font-medium text-slate-600 transition-colors hover:text-blue-600 hover:underline"
                  >
                    {item.description}
                  </a>
                ) : item.category === "Call Us" ? (
                  <a
                    href={`tel:${item.description}`}
                    className="text-lg font-medium text-slate-600 transition-colors hover:text-blue-600 hover:underline"
                  >
                    {item.description}
                  </a>
                ) : (
                  <p className="text-lg font-medium text-slate-600">
                    {item.description}
                  </p>
                )}

                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-20"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-white shadow-2xl">
            <h3 className="mb-4 text-3xl font-bold">Ready to Get Started?</h3>
            <p className="mb-8 text-xl opacity-90">
              Early adopters get exclusive access to our cutting-edge platform
              designed to deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                onClick={() => openDemoForm("")}
                className="rounded-full bg-white px-8 py-4 font-bold text-blue-600 shadow-lg transition-all duration-300 hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1"
              >
                Schedule a Demo
              </a>
              <a
                href="tel:+91-8884161249"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-blue-600 hover:-translate-y-1"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Demo Form Modal (keep it as last child inside main <section>) */}
        {showDemoForm && <DemoForm selectedPlan="" onClose={closeDemoForm} />}
      </section>
    </div>
  );
};

export default Contact;
