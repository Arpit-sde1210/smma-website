import projects from "../data/Projects";
import ProjectCard from "./ProjectCard";
export default function ProjectSection() {
  return (
    <section className="border-y border-white/10 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-purple-400 font-medium">
            RECENT WORK
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Projects That Make Competitors Nervous 😏
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}