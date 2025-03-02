import NavLink from "../common/NavLink";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { SOCIAL_LINKS } from "../common/SocialLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAV_LINKS = [
    {
      link: "#home",
      title: "Home",
    },
    {
      link: "#about",
      title: "About",
    },
    {
      link: "#work",
      title: "Work",
    },
    {
      link: "#contact",
      title: "Contact",
    },
  ];

  return (
    <nav>
      <div className="fixed top-4 left-1/2 -translate-x-1/2  z-50 w-[90%] xl:w-[1223px]">
        <div className="flex items-center justify-between md:justify-around gap-2 bg-white/5 backdrop-blur-lg md:backdrop-blur-none rounded-full p-2">
          <div className="text-2xl font-bold ml-2 flex">
            <span>pashagames.</span>
            <span className="text-violet-500">dev</span>
          </div>

          <div className="hidden md:flex w-full justify-center gap-2">
            {NAV_LINKS.map((link, i) => (
              <NavLink key={i} href={link.link} title={link.title} />
            ))}
          </div>

          <div className="hidden md:flex mx-5 gap-5">
            {SOCIAL_LINKS.map((link, i) => (
              <a
                key={i}
                aria-label={link.title}
                href={link.link}
                className="hover:text-violet-300 transition-colors duration-300"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <GiHamburgerMenu
              className={`transition-transform ${isMenuOpen ? "rotate-90" : ""}`}
            />
          </button>
        </div>
        <div
          className={`md:hidden absolute left-0 right-0 top-full mt-2 transition-all duration-300 ease-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible backdrop-blur-lg"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="bg-white/5 rounded-xl p-4 mx-2">
            <div className="flex flex-col items-center gap-4">
              {NAV_LINKS.map((link, i) => (
                <NavLink
                  key={i}
                  href={link.link}
                  title={link.title}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg hover:text-violet-300 transition-colors"
                />
              ))}
              <div className="flex gap-5 mt-2 w-full">
                {SOCIAL_LINKS.map((link, i) => (
                  <a
                    key={i}
                    aria-label={link.title}
                    href={link.link}
                    className="hover:text-violet-300 transition-colors duration-300 w-1/2 flex justify-center p-2 py-4 bg-white/10  rounded-lg hover:bg-white/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
