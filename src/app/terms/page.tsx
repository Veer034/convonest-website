import TermsOfServicePage from "@/components/Landing/TermsOfServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Convonest",
  description:
    "Read the terms and conditions for using Convonest's AI-powered customer engagement platform.",
  keywords:
    "terms of service, terms and conditions, user agreement, Convonest, SaaS terms",
  openGraph: {
    title: "Terms of Service - Convonest",
    description:
      "Read the terms and conditions for using Convonest's AI-powered customer engagement platform.",
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsOfServicePage />;
}
