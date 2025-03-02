import { motion } from "framer-motion";
import { FaDiscord, FaYoutube, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "contact@pashagames.dev",
      link: "mailto:contact@pashagames.dev",
    },
    {
      icon: <FaDiscord className="w-6 h-6" />,
      title: "Discord",
      value: "pashagames",
    },
    {
      icon: <FaYoutube className="w-6 h-6" />,
      title: "YouTube",
      value: "@pashagamesdev",
      link: "https://youtube.com/@pashagamesdev",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-raleway uppercase font-bold mb-12 text-center md:text-left"
        >
          <span className="bg-gradient-to-r from-blue-400 to-violet-700 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true, margin: "-50px 0px" }}
            >
              <a
                href={contact.link}
                target={contact.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-violet-400/30 transition-colors flex items-start gap-4 h-full"
              >
                <div className="text-violet-400 p-3 bg-violet-400/10 rounded-xl">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {contact.title}
                  </h3>
                  <p className="text-white/70">{contact.value}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
