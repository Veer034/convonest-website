"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const faqs = [
  {
    question: "How to use Convonest Analytics?",
    answer:
      "Convonest Analytics is designed to be user-friendly. Simply sign up, integrate your communication channels, and start analyzing your customer interactions.",
  },
  {
    question: "What channels are supported?",
    answer:
      "Currently, we support chat, email, and WhatsApp. More channels will be added soon, including voice calls.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 21-day free trial for all our plans so you can experience the full capabilities of Convonest.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We take data security very seriously. All data is encrypted and stored securely in compliance with industry standards.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time based on your business needs.",
  },
  {
    question: "Where and how to host this template?",
    answer:
      "We recommend hosting this template on a reliable and secure hosting provider. Our support team can assist you with the setup process.",
  },
];

const FAQAccordion = () => {
  return (
    <div className="container mx-auto bg-cover bg-center px-4 py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Split into two columns */}
        <div>
          {faqs.slice(0, 3).map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div>
          {faqs.slice(3, 6).map((faq, index) => (
            <Accordion key={index + 3} type="single" collapsible>
              <AccordionItem value={`item-${index + 3}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
