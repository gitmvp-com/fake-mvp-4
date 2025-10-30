'use client';

export function BuyMeCoffee() {
  return (
    <a
      href="https://www.buymeacoffee.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full text-sm font-medium transition-colors shadow-subtle hover:shadow-hover"
    >
      <span>☕</span>
      <span className="hidden sm:inline">Buy Me a Coffee</span>
    </a>
  );
}