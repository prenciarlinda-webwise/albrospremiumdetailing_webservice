"use client";

import { useState } from "react";
import { FAQSchema } from "@/components/seo/StructuredData";

const faqs = [
  {
    question: "How does mobile car detailing work?",
    answer: "We bring all the equipment and supplies needed directly to your location. Simply book an appointment, and our professional detailer will arrive at your home, office, or any convenient location. We handle everything on-site, so you can continue with your day while we transform your vehicle."
  },
  {
    question: "How long does a typical detailing service take?",
    answer: "Service times vary based on the package you choose. A Premium Wash takes about 1 hour, a Deluxe Wash takes approximately 2 hours, Interior or Exterior Details take about 2 hours each, and our comprehensive All-in Detail takes approximately 4 hours. We'll provide a more accurate estimate based on your vehicle's condition."
  },
  {
    question: "Do I need to provide water or electricity?",
    answer: "Access to a standard outdoor water spigot is helpful but not required for most services. We come fully equipped with water tanks and generators when needed. Just let us know your setup when booking, and we'll make it work."
  },
  {
    question: "What areas do you service?",
    answer: "We proudly serve the entire San Francisco Bay Area including San Jose, Santa Clara, Sunnyvale, Mountain View, Palo Alto, Cupertino, Milpitas, Fremont, Campbell, Los Gatos, Saratoga, San Francisco, Oakland, and San Benito County."
  },
  {
    question: "Are your products safe for all vehicle types?",
    answer: "Absolutely. We use professional-grade, pH-balanced products that are safe for all paint types, clear coats, and finishes. Our team is trained to work with luxury vehicles, classic cars, and everyday drivers alike."
  },
  {
    question: "How often should I get my car detailed?",
    answer: "For optimal maintenance, we recommend a full detail every 3-4 months and a maintenance wash every 2-4 weeks. However, this depends on your driving habits, parking conditions, and personal preferences. Our free assessment can help determine the best schedule for your vehicle."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, debit cards, and cash. Payment is collected after the service is completed to your satisfaction."
  },
  {
    question: "Do you offer any guarantees?",
    answer: "Yes! We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with the results, we'll make it right. We're fully insured for your peace of mind."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white" id="faq">
      <FAQSchema faqs={faqs} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about our mobile detailing services.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                className="flex w-full items-start justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-gray-900 pr-6">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`h-6 w-6 text-blue-600 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 pr-12">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
