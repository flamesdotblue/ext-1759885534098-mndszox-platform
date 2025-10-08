import React from 'react';
import { Rocket, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'Instant Interactions',
    description: 'Fluid, tactile feedback that responds immediately to user input for a delightful UX.',
    Icon: Zap,
  },
  {
    title: 'Enterprise-Ready',
    description: 'Built with performance and reliability in mind to scale with your business.',
    Icon: Shield,
  },
  {
    title: 'Launch Faster',
    description: 'Use our modern toolkit to ship polished experiences without the heavy lifting.',
    Icon: Rocket,
  },
];

function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Built for modern teams</h2>
        <p className="mt-3 text-neutral-600">
          Beautiful, accessible components with animations that feel native and engaging.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, Icon }) => (
          <div key={title} className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-rose-50 text-rose-600 ring-1 ring-inset ring-rose-100">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
            <p className="mt-2 text-neutral-600">{description}</p>
            <a href="#get-started" className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900 hover:underline">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
