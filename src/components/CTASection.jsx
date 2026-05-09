export default function CTASection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-center">
      <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-12">
        <h2 className="text-4xl lg:text-6xl font-black">
          Ready To Scale Your Business?
        </h2>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Let’s create a strong online presence.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold">
            Contact Now
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5">
            Get Proposal
          </button>
        </div>
      </div>
    </section>
  );
}