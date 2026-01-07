import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Albros Premium Car Detailing LLC. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            When you book a service with {siteConfig.name}, we collect information necessary to provide
            our services, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Contact information (name, phone number, email address)</li>
            <li>Service location address</li>
            <li>Vehicle information (make, model, year)</li>
            <li>Service preferences and history</li>
            <li>Payment information (processed securely through third-party providers)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Schedule and provide detailing services</li>
            <li>Communicate with you about appointments and services</li>
            <li>Process payments</li>
            <li>Improve our services</li>
            <li>Send promotional communications (with your consent)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing</h2>
          <p className="text-gray-600 mb-6">
            We do not sell your personal information. We may share your information with trusted
            service providers who assist in operating our business, such as payment processors
            and scheduling software providers. These providers are bound by confidentiality agreements.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-6">
            You have the right to access, correct, or delete your personal information. To exercise
            these rights, please contact us at {siteConfig.phone} or {siteConfig.email}.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have questions about this privacy policy, please contact us at:
          </p>
          <p className="text-gray-600 mt-2">
            {siteConfig.name}<br />
            Phone: {siteConfig.phone}<br />
            Email: {siteConfig.email}
          </p>
        </div>
      </div>
    </section>
  );
}
