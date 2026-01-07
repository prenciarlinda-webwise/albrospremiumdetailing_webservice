import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Albros Premium Car Detailing LLC. Read our service agreement and policies.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Service Agreement</h2>
          <p className="text-gray-600 mb-6">
            By booking a service with {siteConfig.name}, you agree to these terms and conditions.
            Please read them carefully before scheduling an appointment.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Booking and Cancellation</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Appointments can be booked online or by phone at {siteConfig.phone}</li>
            <li>We request at least 24 hours notice for cancellations</li>
            <li>Late cancellations or no-shows may be subject to a cancellation fee</li>
            <li>We reserve the right to reschedule appointments due to weather or other circumstances</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Service Requirements</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Access to the vehicle must be provided at the scheduled time</li>
            <li>The vehicle should be reasonably accessible (not blocked by other vehicles)</li>
            <li>We appreciate access to a water source when available, though not required</li>
            <li>Please remove valuables from the vehicle before service</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Payment Terms</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Payment is due upon completion of service</li>
            <li>We accept cash, credit cards, and debit cards</li>
            <li>Prices are subject to change based on vehicle condition and size</li>
            <li>Additional charges may apply for excessive dirt, pet hair, or other conditions</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Satisfaction Guarantee</h2>
          <p className="text-gray-600 mb-6">
            We stand behind our work. If you're not completely satisfied with our service,
            please let us know immediately. We'll work to address any concerns and make it right.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Liability</h2>
          <p className="text-gray-600 mb-6">
            While we take utmost care with every vehicle, {siteConfig.name} is not responsible for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Pre-existing damage or mechanical issues</li>
            <li>Items left in the vehicle</li>
            <li>Normal wear and tear</li>
            <li>Damage caused by pre-existing paint or clear coat conditions</li>
          </ul>
          <p className="text-gray-600 mb-6">
            We are fully insured and will address any legitimate claims promptly.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have questions about these terms, please contact us at:
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
