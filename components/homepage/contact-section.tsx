"use client";

import { personalData } from '../../data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from '../ui/contact-form';
import { useTheme } from "../../context/ThemeContext";

function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div id="contact" className="relative z-50 my-12 lg:my-24 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">      
        <div className="flex items-center gap-4 mb-10">
          <p className={`px-4 py-2 md:text-xs rounded-full font-mono text-sm tracking-wider animate-fade-in-up mt-4 mb-2 transition-colors duration-300 ${isDark ? "bg-[#1B263B] text-[#06B6D4]" : "bg-[#E5E5E7] text-[#0071E3]"}`}>$ ls contact/</p>
          <span className={`h-2 flex-1 transition-colors duration-300 ${isDark ? "bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-transparent" : "bg-linear-to-r from-[#0071E3] via-[#0077ED] to-transparent"}`}></span>
        </div>

        <h2 className={`text-2xl md:text-4xl font-bold leading-tight mb-6 transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>
            Let{"'"}s <span className={`bg-linear-to-r bg-clip-text text-transparent transition-all duration-300 ${isDark ? "from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]" : "from-[#0071E3] via-[#0077ED] to-[#0071E3] drop-shadow-[0_0_12px_rgba(0,113,227,0.4)]"}`}>Connect</span>
          </h2>


        <div className={`pt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>
          <ContactForm />
          <div className="lg:w-3/4">
            <div className="flex flex-col gap-5 lg:gap-9">
              <p className="text-sm md:text-xl flex items-center gap-3">
                <MdAlternateEmail
                  className={`p-2 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer ${isDark ? "bg-[#415A77] hover:bg-[#06B6D4] text-[#E0E1DD] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]" : "bg-[#D5D5D7] hover:bg-[#0071E3] text-[#1D1D1F] shadow-[0_0_20px_rgba(0,113,227,0.15)] hover:shadow-[0_0_30px_rgba(0,113,227,0.3)] hover:text-[#E0E1DD]"}`}
                  size={36}
                />
                <span>{personalData.email}</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <IoMdCall
                  className={`p-2 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer ${isDark ? "bg-[#415A77] hover:bg-[#06B6D4] text-[#E0E1DD] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]" : "bg-[#D5D5D7] hover:bg-[#0071E3] text-[#1D1D1F] shadow-[0_0_20px_rgba(0,113,227,0.15)] hover:shadow-[0_0_30px_rgba(0,113,227,0.3)] hover:text-[#E0E1DD]"}`}
                  size={36}
                />
                <span>
                  {personalData.phone}
                </span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <CiLocationOn
                  className={`p-2 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer ${isDark ? "bg-[#415A77] hover:bg-[#06B6D4] text-[#E0E1DD] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]" : "bg-[#D5D5D7] hover:bg-[#0071E3] text-[#1D1D1F] shadow-[0_0_20px_rgba(0,113,227,0.15)] hover:shadow-[0_0_30px_rgba(0,113,227,0.3)] hover:text-[#E0E1DD]"}`}
                  size={36}
                />
                <span>
                  {personalData.address}
                </span>
              </p>
            </div>
            <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
              <Link target="_blank" href={personalData.github}>
                <IoLogoGithub
                  className={`p-3 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer ${isDark ? "bg-[#415A77] hover:bg-[#06B6D4] text-[#E0E1DD] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]" : "bg-[#D5D5D7] hover:bg-[#0071E3] text-[#1D1D1F] shadow-[0_0_20px_rgba(0,113,227,0.15)] hover:shadow-[0_0_30px_rgba(0,113,227,0.3)] hover:text-[#E0E1DD]"}`}
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.linkedIn}>
                <BiLogoLinkedin
                  className={`p-3 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer ${isDark ? "bg-[#415A77] hover:bg-[#06B6D4] text-[#E0E1DD] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]" : "bg-[#D5D5D7] hover:bg-[#0071E3] text-[#1D1D1F] shadow-[0_0_20px_rgba(0,113,227,0.15)] hover:shadow-[0_0_30px_rgba(0,113,227,0.3)] hover:text-[#E0E1DD]"}`}
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.facebook}>
                <FaFacebook
                  className={`p-3 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer ${isDark ? "bg-[#415A77] hover:bg-[#06B6D4] text-[#E0E1DD] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]" : "bg-[#D5D5D7] hover:bg-[#0071E3] text-[#1D1D1F] shadow-[0_0_20px_rgba(0,113,227,0.15)] hover:shadow-[0_0_30px_rgba(0,113,227,0.3)] hover:text-[#E0E1DD]"}`}
                  size={48}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;