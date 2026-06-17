import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
          🚀 30 Days Challenge
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Next.js Mastery
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Learn Next.js 15 step by step with daily practice, code, and theory.
        </p>
      </div>

      {/* Progress Stats */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 border border-gray-700">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Overall Progress</span>
            <span>3 / 30 days</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[10%]"></div>
          </div>
        </div>
      </div>

      {/* Days Grid */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span>📚</span> Curriculum
        </h2>
        <div className="grid md:grid-cols-2 gap-6">

          {/* Day 1 Card */}
          <Link href="/day-1-routing" className="group">
            <div className="bg-gray-800/40 hover:bg-gray-800/70 transition-all rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Day 01</span>
                <span className="text-green-400 text-sm">✅ Completed</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">File-based Routing</h3>
              <p className="text-gray-400 text-sm mb-4">Learn how Next.js creates routes automatically from folder structure. Dynamic routes, nested routes, and page.js magic.</p>
              <div className="flex items-center text-blue-400 text-sm font-medium gap-1">
                Explore →
                <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Day 2 Card - Updated */}
          <Link href="/day-2-server-client" className="group">
            <div className="bg-gray-800/40 hover:bg-gray-800/70 transition-all rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">Day 02</span>
                <span className="text-green-400 text-sm">✅ Completed</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">Server vs Client Components</h3>
              <p className="text-gray-400 text-sm mb-4">Understanding 'use client', SSR, interactivity. Live demos: server data fetch, client counter, mixed pattern.</p>
              <div className="flex items-center text-purple-400 text-sm font-medium gap-1">
                Explore →
                <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Day 3 Card - Updated */}

          <Link href="/day-3-navigation" className="group">
            <div className="bg-gray-800/40 hover:bg-gray-800/70 transition-all rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">Day 03</span>
                <span className="text-green-400 text-sm">✅ Completed</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">Navigation</h3>
              <p className="text-gray-400 text-sm mb-4">Link component, useRouter, active links, programmatic navigation.</p>
              <div className="flex items-center text-purple-400 text-sm font-medium gap-1">
                Explore →
                <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Day 4 Card - Updated */}

          <Link href="/day-4-layouts" className="group">
            <div className="bg-gray-800/40 hover:bg-gray-800/70 transition-all rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">Day 04</span>
                <span className="text-green-400 text-sm">✅ Completed</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">Layouts & Templates</h3>
              <p className="text-gray-400 text-sm mb-4">Shared layouts, nested layouts, persist state.</p>
              <div className="flex items-center text-purple-400 text-sm font-medium gap-1">
                Explore →
                <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* <div className="bg-gray-800/20 rounded-xl p-6 border border-gray-700/30 backdrop-blur-sm">
            <div className="text-xs font-mono text-gray-500 bg-gray-700/30 px-2 py-1 rounded inline-block mb-3">Day 04</div>
            <h3 className="text-xl font-bold mb-2 text-gray-400">Layouts & Templates</h3>
            <p className="text-gray-500 text-sm">Shared layouts, nested layouts, persist state.</p>
          </div> */}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 py-8 text-center text-gray-500 text-sm">
        <p>30 Days of Next.js — Building step by step | 👨‍💻 Daily Practice</p>
      </footer>
    </div>
  );
}