import ProjectCard, { ProjectCardProps } from "../common/ProjectCard";
import RoamsImage from "../../assets/projects/roams.png";
import MopeImage from "../../assets/projects/mope.png";
import DiepImage from "../../assets/projects/diep.png";
import PortfolioImage from "../../assets/projects/portfolio.png";
import { motion } from "framer-motion";

const WorkSection: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "roams.io",
      description:
        "Took over development of a real-time multiplayer browser game inspired by mope.io, using vanilla JavaScript and Canvas2D rendering. Delivered a performant and engaging gameplay experience through optimized client-server architecture and efficient rendering techniques.",
      tags: ["JavaScript", "Canvas2D", "Game Development", "Networking"],
      date: "2023 - 2024",
      company: "Independent",
      position: "Independent Developer",
      link: "https://roams.io/",
      image: RoamsImage,
    },
    {
      title: "mope.io",
      description:
        "Revitalized legacy codebase as Technical Lead, resolving 200+ bugs, with about 20+ of them being critical, to increase player retention by 300%. Engineered TypeScript migration for core account systems including authentication, improving code maintainability while expanding security features. Optimized server infrastructure to double performance capabilities.",
      tags: [
        "TypeScript",
        "Javascript",
        "Java",
        "Leadership",
        "System Architecture",
        "Performance Optimization",
      ],
      date: "2024 - Present",
      company: "3AM Experiences",
      position: "Lead Developer",
      link: "https://mope.io",
      image: MopeImage,
    },
    {
      title: "diep.io",
      description:
        "Designed Kubernetes-powered load balancing system. Created developer-friendly moderation dashboard using a simple webstack (TypeScript, Alpine.js, EJS), enabling C++ developers to contribute effectively to web tooling.",
      tags: ["Kubernetes", "TypeScript", "Alpine.js", "EJS", "DevOps"],
      date: "2025 - Present",
      company: "3AM Experiences",
      position: "Web Developer",
      link: "https://diep.io/",
      image: DiepImage,
    },
    {
      title: "pashagames.dev",
      description: "Portfolio website.",
      tags: ["Typescript", "React", "Tailwind"],
      date: "2025 - Present",
      company: "Independent",
      position: "Lead Developer",
      link: "https://pashagames.dev/",
      image: PortfolioImage,
      githubLink: "https://github.com/PashaGames/pashagames.dev",
    },
  ];

  return (
    <section
      className="flex items-center justify-center min-h-screen px-4 py-20"
      id="work"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-raleway uppercase font-bold text-left mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-violet-700 bg-clip-text text-transparent">
            Featured Work
          </span>
        </h2>
        <div className="flex flex-col gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
