import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[hsl(220,20%,6%)] border-b border-[hsl(220,15%,20%)]">
      <div className="flex items-center justify-between py-5 px-6">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="group relative text-3xl font-bold tracking-tight transition-all duration-300 hover:scale-105">
            <span className="bg-linear-to-r from-[hsl(38,92%,50%)] via-[hsl(38,80%,45%)] to-[hsl(28,90%,48%)] bg-clip-text text-transparent hover:from-[hsl(38,92%,55%)] hover:via-[hsl(38,80%,50%)] hover:to-[hsl(28,90%,53%)] transition-all duration-300">
              {'<'}SALWA{`/>`}
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[hsl(38,92%,50%)] to-[hsl(28,90%,48%)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-gray-300 transition-colors duration-300 hover:text-[hsl(38,92%,50%)]">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-gray-300 transition-colors duration-300 hover:text-[hsl(38,92%,50%)]">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-gray-300 transition-colors duration-300 hover:text-[hsl(38,92%,50%)]">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-gray-300 transition-colors duration-300 hover:text-[hsl(38,92%,50%)]">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-gray-300 transition-colors duration-300 hover:text-[hsl(38,92%,50%)]">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
