interface NavLinkProps {
  href: string;
  title: string;
}

export default function NavLink({
  href,

  title,
}: NavLinkProps) {
  return (
    <a
      href={href}
      className="font-raleway  p-2 rounded-full transition-colors relative group flex items-center"
      aria-label={title}
    >
      <div className="ml-2 w-24 text-center">
        <span className="text-xsrounded-lg transition-all duration-300 inline-block px-2 py-1 group-hover:text-violet-300">
          {title}
        </span>
      </div>
    </a>
  );
}
