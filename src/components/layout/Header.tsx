import { FaGithub, FaYoutube } from "react-icons/fa6";
import NavLink from "../common/NavLink";

export default function Header() {
  const NAV_LINKS = [
    {
      link: "#",
      title: "Home",
    },
    {
      link: "#work",
      title: "Work",
    },
    {
      link: "#about",
      title: "About",
    },
    {
      link: "#contact",
      title: "Contact",
    },
  ];

  const SOCIAL_LINKS = [
    {
      link: "https://github.com/PashaGames",
      title: "Github",
      icon: FaGithub,
    },
    {
      link: "https://www.youtube.com/@pashagamesdev",
      title: "YouTube",
      icon: FaYoutube,
    },
  ];
  return (
    <nav>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-lg rounded-full p-2 z-50 w-[90%] xl:w-[1223px]">
        <div className="flex items-center justify-around gap-2">
          <div className="text-2xl font-bold ml-2 flex">
            <span>pashagames.</span>
            <span className="text-violet-500">dev</span>
          </div>
          <div className="flex w-full justify-center gap-2">
            {NAV_LINKS.map((link, i) => {
              return <NavLink key={i} href={link.link} title={link.title} />;
            })}
          </div>
          <div className="flex mx-5 gap-5">
            {SOCIAL_LINKS.map((link, i) => {
              return (
                <a
                  key={i}
                  aria-label={link.title}
                  href={link.link}
                  className="hover:text-violet-300 transition-colors duration-300"
                >
                  <link.icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
