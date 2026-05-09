import services from "../data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-blue-400 font-medium">OUR SERVICES</p>

        <h2 className="text-4xl lg:text-5xl font-bold mt-4">
          Everything Your Business Needs
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}