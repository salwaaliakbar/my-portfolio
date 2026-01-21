"use client";

import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { useTheme } from '../../context/ThemeContext';

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`relative border-t transition-colors duration-300 ${isDark ? "bg-[#1B263B] border-[#415A77] text-[#E0E1DD]" : "bg-[#F5F5F7] border-[#D5D5D7] text-[#1D1D1F]"}`}>
      <div className="mx-auto px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368 py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className={`absolute top-0 h-1 w-1/2 bg-linear-to-r transition-colors duration-300 ${isDark ? "from-transparent via-[#06B6D4] to-transparent shadow-[0_0_20px_rgba(6,182,212,0.5)]" : "from-transparent via-[#0071E3] to-transparent shadow-[0_0_20px_rgba(0,113,227,0.3)]"}`}></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/salwa-ali-akbar-b55404240/" className={`transition-colors ${isDark ? "text-[#06B6D4] hover:text-[#0EA5E9]" : "text-[#0071E3] hover:text-[#0077ED]"}`}>Salwa Ansari</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/salwaaliakbar/my-portfolio"
              className={`flex items-center gap-2 uppercase transition-colors ${isDark ? "text-[#E0E1DD] hover:text-[#06B6D4]" : "text-[#1D1D1F] hover:text-[#0071E3]"}`}
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/salwaaliakbar/my-portfolio/fork"
              className={`flex items-center gap-2 uppercase transition-colors ${isDark ? "text-[#E0E1DD] hover:text-[#06B6D4]" : "text-[#1D1D1F] hover:text-[#0071E3]"}`}
            >
              <CgGitFork />
              <span>Fork</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;