import React from 'react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-rose-500 to-rose-600"></span>
          <span className="text-neutral-900">TileWave</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 sm:flex">
          <a href="#features" className="hover:text-neutral-900">Features</a>
          <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
          <a href="#" className="rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800">Sign In</a>
        </nav>
        <button aria-label="Menu" className="sm:hidden rounded-md border border-neutral-300 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
