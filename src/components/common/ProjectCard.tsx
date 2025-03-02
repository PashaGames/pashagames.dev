import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  date: string;
  company: string;
  position: string;
  githubLink?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
  image,
  date,
  company,
  position,
  githubLink,
}) => {
  return (
    <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 md:flex md:items-start md:gap-6">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <div className="aspect-video rounded-xl overflow-hidden md:aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-1">
          <div className="flex-1">
            <div className="text-sm text-white/70 mb-1 font-open-sans font-bold">
              {company}
            </div>
            <h3 className="text-4xl font-semibold font-raleway break-words">
              {title}
            </h3>
            <p className="text-violet-300/80 text-sm font-raleway font-bold">
              {position}
            </p>
          </div>
          <span className="text-white/50 text-md font-open-sans">{date}</span>
        </div>

        <p className="text-white/70 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full font-open-sans text-md font-bold bg-violet-500/20 text-violet-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-violet-300 hover:text-violet-400 transition-colors"
            aria-label="View project"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </a>

          <a
            href={githubLink ? githubLink : ""}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${githubLink ? "text-violet-300 hover:text-violet-400" : "text-gray-600 pointer-events-none"} transition-colors`}
            aria-label="GitHub repository"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
