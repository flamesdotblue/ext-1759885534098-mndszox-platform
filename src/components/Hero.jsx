import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative isolate min-h-[80vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-24 sm:py-28 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-3 py-1 text-xs font-medium text-rose-700 shadow-sm backdrop-blur">
            Interactive • Minimal • Modern
          </span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Bring your product to life with a responsive, tactile hero
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            A seamless grid of white, cubic tiles that ripple with soft red accents when you interact. Clean, minimalist and engineered for modern web experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#get-started" className="rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800">
              Get Started
            </a>
            <a href="#features" className="rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">
              See Features
            </a>
          </div>
        </div>
        <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Latency', value: '12ms' },
            { label: 'Uptime', value: '99.99%' },
            { label: 'Integrations', value: '50+' },
            { label: 'Users', value: '120k+' },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-neutral-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur">
              <div className="text-2xl font-semibold text-neutral-900">{kpi.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-neutral-500">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
