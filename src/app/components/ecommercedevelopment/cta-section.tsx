export function CTA() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative py-20 bg-gradient-to-r from-gray-50 via-orange-50 to-gray-100 bg-[length:200%_200%] animate-gradientMove overflow-hidden"
    >
      {/* Decorative blurred blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-[#FEF3E6] backdrop-blur-xl border border-orange-200/40 shadow-xl p-10 md:p-16 text-center">
          <h2
            id="cta-title"
            className="text-3xl md:text-5xl font-extrabold text-gray-900"
          >
            Supercharge Your Online Store 🚀
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-sans">
            Launch faster, sell smarter, and scale seamlessly with Camlenio’s
            modern e‑commerce solutions. From checkout to customer retention —
            we’ve got you covered.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#start-store"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30 hover:scale-[1.03] transition-transform duration-300"
            >
              Start Selling Today
            </a>
            <a
              href="#view-demo"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 border border-orange-400/60 text-orange-600 bg-white/60 backdrop-blur-sm font-semibold hover:bg-orange-50 transition-colors duration-300"
            >
              View Store Demo
            </a>
          </div>

          {/* Trust badges / social proof */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span>⚡ Fast Checkout</span>
            <span>🔒 Secure Payments</span>
            <span>📈 Analytics Ready</span>
            <span>🌍 Scales Globally</span>
          </div>
        </div>
      </div>
    </section>
  );
}
