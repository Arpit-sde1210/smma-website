import pricingPlans from "../data/Pricing";

export default function PricingSection() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-blue-400 font-medium">PRICING</p>

        <h2 className="text-5xl font-bold mt-4">
          Flexible Plans
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-3xl font-bold">
              {plan.name}
            </h3>

            <p className="text-5xl font-black mt-6">
              {plan.price}
            </p>

            <div className="mt-8 space-y-4">
              {plan.features.map((feature, idx) => (
                <div key={idx}>
                  ✔ {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}