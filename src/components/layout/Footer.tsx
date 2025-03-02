import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../common/SocialLinks";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="border-t border-white/10 py-12 mt-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-raleway font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-violet-700 bg-clip-text text-transparent">
            PashaGames
          </span>
        </div>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-violet-400 transition-colors"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
