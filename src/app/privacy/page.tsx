import PrivacyPolicyPage from "@/components/Landing/PrivacyPolicyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Convonest",
  description:
    "Learn how Convonest protects your data and privacy in our AI-powered customer engagement platform.",
  keywords:
    "privacy policy, data protection, GDPR, CCPA, Convonest, customer data",
  openGraph: {
    title: "Privacy Policy - Convonest",
    description:
      "Learn how Convonest protects your data and privacy in our AI-powered customer engagement platform.",
    type: "website",
  },
};

export default function PolicyPage() {
  return <PrivacyPolicyPage />;
}
