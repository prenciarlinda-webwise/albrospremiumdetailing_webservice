"use client";

import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/data/siteConfig";

// Google Reviews data - these should be real reviews from your Google Business Profile
const googleReviews = [
  {
    name: "Michael T.",
    rating: 5,
    date: "2 weeks ago",
    text: "Albros made my interior look better than new! The attention to detail was incredible. They arrived on time, worked efficiently, and left my car spotless. Highly recommend for anyone in San Jose.",
    profilePhoto: null,
  },
  {
    name: "Sarah L.",
    rating: 5,
    date: "1 month ago",
    text: "Amazing mobile service! They came to my office in Santa Clara and detailed my Tesla while I worked. The convenience factor alone is worth it, but the quality exceeded my expectations.",
    profilePhoto: null,
  },
  {
    name: "David K.",
    rating: 5,
    date: "3 weeks ago",
    text: "Best car detailing experience I've had in the Bay Area. Professional, thorough, and the results speak for themselves. My Audi looks showroom fresh. Will definitely use again!",
    profilePhoto: null,
  },
  {
    name: "Jennifer M.",
    rating: 5,
    date: "1 week ago",
    text: "Called for a same-day appointment and they delivered! Great communication throughout. My car hadn't been detailed in over a year and now it looks brand new.",
    profilePhoto: null,
  },
  {
    name: "Robert H.",
    rating: 5,
    date: "2 months ago",
    text: "I use Albros for my small business fleet in Sunnyvale. Consistent quality, great pricing for volume, and they work around our schedule. Can't ask for more!",
    profilePhoto: null,
  },
  {
    name: "Amanda C.",
    rating: 5,
    date: "3 weeks ago",
    text: "The team was so professional and careful with my luxury vehicle. They even pointed out a small scratch I hadn't noticed. Honest, thorough, and excellent results.",
    profilePhoto: null,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentReview = googleReviews[currentIndex];

  return (
    <section className="py-14 lg:py-20 bg-gray-50" id="reviews">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Customer Reviews
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to maintain a 5-star rating across all platforms. Here's what our customers have to say about their experience.
          </p>
        </div>

        {/* Google verification badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4">
            <GoogleIcon className="w-8 h-8" />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">{siteConfig.reviews.googleRating}</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Based on {siteConfig.reviews.googleReviewCount} Google reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main review card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative overflow-hidden">
            {/* Google badge corner */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gray-50 rounded-full px-3 py-1.5">
              <GoogleIcon className="w-4 h-4" />
              <span className="text-xs font-medium text-gray-600">Google Review</span>
            </div>

            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-blue-100">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative z-10 pt-8">
              {/* Stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                "{currentReview.text}"
              </blockquote>

              {/* Reviewer info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                  {currentReview.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{currentReview.name}</p>
                  <p className="text-sm text-gray-500">{currentReview.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all"
            aria-label="Next review"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {googleReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View all reviews link */}
        <div className="text-center mt-10">
          <a
            href={siteConfig.social.gmb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <GoogleIcon className="w-5 h-5" />
            View all {siteConfig.reviews.googleReviewCount} reviews on Google
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <TrustBadge
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Fully Insured"
            description="Complete protection"
          />
          <TrustBadge
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
              </svg>
            }
            title="Satisfaction Guarantee"
            description="100% money back"
          />
          <TrustBadge
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="On-Time Service"
            description="We respect your schedule"
          />
          <TrustBadge
            icon={
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            }
            title="Easy Payment"
            description="All cards accepted"
          />
        </div>
      </div>
    </section>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function TrustBadge({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
      <p className="text-gray-500 text-xs mt-1">{description}</p>
    </div>
  );
}
