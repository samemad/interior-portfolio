export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-luxuryMuted flex flex-col md:flex-row gap-2 justify-between">
        <p>© {new Date().getFullYear()} A. Interiors — All rights reserved.</p>
        <p>DevSam.</p>
      </div>
    </footer>
  );
}
