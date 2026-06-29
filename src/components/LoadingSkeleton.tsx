"use client";
import React from "react";

/**
 * Animated skeleton pulse block.
 * Renders a rounded rectangle with a subtle shimmer animation.
 */
function SkeletonBlock({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-gray-800 rounded-md animate-pulse ${className}`}
    />
  );
}

/**
 * Full-page loading skeleton matching the About page layout.
 * Prevents layout shift and gives a polished loading experience.
 */
export function AboutSkeleton() {
  return (
    <div className="bg-black text-white min-h-screen px-10 md:px-32 py-20 pt-32 md:pt-40">
      {/* Hero Section skeleton */}
      <section className="text-center mb-20">
        <SkeletonBlock className="h-8 w-48 mx-auto mb-4" />
        <SkeletonBlock className="h-16 w-[70%] mx-auto" />
      </section>

      {/* Resume Section skeleton */}
      <section className="text-center mb-16">
        <SkeletonBlock className="h-6 w-32 mx-auto mb-6" />
        <SkeletonBlock className="h-4 w-full max-w-3xl mx-auto mb-2" />
        <SkeletonBlock className="h-4 w-[90%] max-w-3xl mx-auto mb-2" />
        <SkeletonBlock className="h-4 w-[80%] max-w-3xl mx-auto" />
      </section>

      {/* Image skeleton */}
      <div className="w-full flex justify-center mb-20">
        <SkeletonBlock className="w-full max-w-xl h-64 rounded-lg" />
      </div>

      {/* Skills skeleton */}
      <section className="mb-20">
        <SkeletonBlock className="h-6 w-48 mb-6" />
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-8 w-24" />
          ))}
        </div>
      </section>

      {/* Experience skeleton */}
      <section className="mb-20">
        <SkeletonBlock className="h-6 w-48 mb-6" />
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonBlock key={i} className="h-10 w-full mb-3" />
        ))}
      </section>
    </div>
  );
}

/**
 * Full-page loading skeleton matching the Work page layout.
 */
export function WorkSkeleton() {
  return (
    <div className="bg-black text-white min-h-screen px-10 md:px-32 py-20 pt-32 md:pt-40">
      {/* Hero Section skeleton */}
      <section className="mb-20">
        <SkeletonBlock className="h-20 w-[60%] mb-4" />
        <SkeletonBlock className="h-8 w-32" />
      </section>

      {/* Experience + Button skeleton */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <SkeletonBlock className="h-14 w-56 rounded-full" />
        <div>
          <SkeletonBlock className="h-6 w-full mb-3" />
          <SkeletonBlock className="h-6 w-[90%] mb-3" />
          <SkeletonBlock className="h-6 w-[80%]" />
        </div>
      </section>

      {/* Project List skeleton */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col space-y-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-12 w-[80%]" />
          ))}
        </div>
        <div>
          <SkeletonBlock className="h-8 w-48 mb-4" />
          <SkeletonBlock className="h-4 w-full mb-2" />
          <SkeletonBlock className="h-4 w-[85%]" />
        </div>
      </section>
    </div>
  );
}
