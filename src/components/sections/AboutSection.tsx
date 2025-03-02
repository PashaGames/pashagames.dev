import { motion } from "framer-motion";
import { FaCode, FaGamepad, FaServer, FaRocket } from "react-icons/fa";

const AboutSection = () => {
  const techStack = [
    { name: "TypeScript", category: "core", since: 2021 },
    { name: "React", category: "frontend", since: 2023 },
    { name: "Node.js", category: "backend", since: 2019 },
    { name: "Kubernetes", category: "infra", since: 2024 },
    { name: "PostgreSQL", category: "database", since: 2022 },
  ];

  const timeline = [
    {
      period: "2017-2019",
      icon: <FaCode className="text-violet-400" />,
      title: "Web Foundations",
      content:
        "Crafted basic websites using fundamental technologies, delivering client solutions with PHP-powered backends and Semantic HTML/CSS frontends.",
    },
    {
      period: "2019-2022",
      icon: <FaGamepad className="text-blue-400" />,
      title: "Game Modding Era",
      content: (
        <>
          Made community mods for{" "}
          <span className="text-violet-300">mope.io</span>, reverse-engineering
          game protocols and creating real-time multiplayer modifications.
        </>
      ),
    },
    {
      period: "2023-2024",
      icon: <FaServer className="text-green-400" />,
      title: "Platform Architecture",
      content: (
        <>
          Took over full-stack development of{" "}
          <span className="text-violet-300">roams.io</span>, optimizing certain
          parts of the code, while adding more updates.
        </>
      ),
    },
    {
      period: "2024-Present",
      icon: <FaRocket className="text-purple-400" />,
      title: "Technical Leadership",
      content: (
        <>
          Spearheaded modernization of{" "}
          <span className="text-violet-300">mope.io</span> at 3AM Experiences,
          leading TypeScript migration and helping developers to get familiar
          with the code.
        </>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-raleway uppercase font-bold mb-8"
        >
          <span className="bg-gradient-to-r from-blue-400 to-violet-700 bg-clip-text text-transparent">
            Engineering Evolution
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-white/75 mb-12 max-w-2xl font-open-sans"
        >
          From hand-coded HTML pages to leading cloud-native game platforms, my
          journey reflects a constant pursuit of technical excellence. Balancing
          creative problem-solving with engineering rigor, I bridge gameplay
          innovation with robust system design.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12 group"
              >
                <div className="absolute left-0 top-3 text-2xl">
                  {item.icon}
                </div>
                <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-violet-300 font-mono font-bold">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 h-fit sticky top-24 font-open-sans"
          >
            <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>

            <div className="space-y-6">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex items-center gap-4">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-violet-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold font-raleway">
                        {tech.name}
                      </span>
                      <span className="text-white/50 text-sm">
                        Since {tech.since}
                      </span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-violet-600 rounded-full"
                        style={{
                          width: `${Math.min((2025 - tech.since) * 15, 100)}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-white/50 mt-1 block">
                      {tech.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/70 mt-8 text-sm">
              * Experience timeline normalized across technologies
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
