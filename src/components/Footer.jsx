import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded bg-gradient-to-br from-rose-500 to-rose-600" />
            <span className="text-sm font-medium text-neutral-800">TileWave</span>
          </div>
          <p className="text-center text-sm text-neutral-500 sm:text-right">
            © {new Date().getFullYear()} TileWave Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
