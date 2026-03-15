import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-sm border-b border-gray-800/60">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity">
          <span className="text-white text-sm font-semibold leading-tight">
            Rajesh Khadka
          </span>
          <span className="text-emerald-400 text-xs font-mono leading-tight">
            Mindful Software Engineer
          </span>
        </Link>
        <Link
          href="/booking"
          className="text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-lg transition-colors"
        >
          Book free session
        </Link>
      </div>
    </header>
  );
}
