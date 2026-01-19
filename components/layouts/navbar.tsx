import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#1B263B] border-b border-[#415A77]">
      <div className="flex items-center justify-between py-5 px-6">
        <div className="flex shrink-0 items-center">
          <Link
            href="/"
            className="group relative text-3xl font-bold tracking-tight transition-all duration-300 hover:scale-105">
            <span className="bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(14,165,233,0.55)]">
              {'<'}SALWA{`/>`}
            </span>
            <span className="absolute -bottom-1 left-0 h-2 w-0 bg-linear-to-r from-[#06B6D4] to-[#0EA5E9] transition-all duration-300 group-hover:w-full shadow-[0_0_20px_rgba(6,182,212,0.5)]"></span>
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-gray-300 transition-colors duration-300 hover:text-[#06B6D4]">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-gray-300 transition-colors duration-300 hover:text-[#06B6D4]">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-gray-300 transition-colors duration-300 hover:text-[#06B6D4]">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-gray-300 transition-colors duration-300 hover:text-[#06B6D4]">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-gray-300 transition-colors duration-300 hover:text-[#06B6D4]">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
