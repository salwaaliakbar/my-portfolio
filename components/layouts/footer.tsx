// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#1B263B] border-[#415A77] text-[#E0E1DD]">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368 py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-1 w-1/2  bg-linear-to-r from-transparent via-[#06B6D4] to-transparent shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/salwa-ali-akbar-b55404240/" className="text-[#06B6D4] hover:text-[#0EA5E9] transition-colors">Salwa Ansari</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/salwaaliakbar/my-portfolio"
              className="flex items-center gap-2 uppercase text-[#E0E1DD] hover:text-[#06B6D4] transition-colors"
            >
              <IoStar />
              <span>Star</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/salwaaliakbar/my-portfolio/fork"
              className="flex items-center gap-2 uppercase text-[#E0E1DD] hover:text-[#06B6D4] transition-colors"
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