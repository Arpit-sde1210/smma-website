import testimonials from "../data/Testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-blue-400 font-medium">
          TESTIMONIALS
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold mt-4">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Businesses trust us to build their online presence
          and generate real customer leads.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
}