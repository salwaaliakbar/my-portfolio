import { personalData } from '../../data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from '../ui/contact-form';

function ContactSection() {
  return (
    <div id="contact" className="relative z-50 my-12 lg:my-24 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">      
        <div className="flex items-center gap-4 mb-10">
          <p className="bg-[#1B263B] px-4 py-2 md:text-xs rounded-full text-[#06B6D4] font-mono text-sm tracking-wider animate-fade-in-up mt-4 mb-2">$ ls contact/</p>
          <span className="h-2 flex-1 bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-transparent"></span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
            Let{"'"}s <span className="bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] bg-clip-text text-transparent hover:from-[#0EA5E9] hover:via-[#06B6D4] hover:to-[#0EA5E9] transition-all duration-300">Connect</span>
          </h2>


        <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center text-[#E0E1DD]">
          <ContactForm />
          <div className="lg:w-3/4">
            <div className="flex flex-col gap-5 lg:gap-9">
              <p className="text-sm md:text-xl flex items-center gap-3">
                <MdAlternateEmail
                  className="bg-[#415A77] p-2 rounded-full hover:bg-[#06B6D4] hover:scale-110 transition-all duration-300 text-[#E0E1DD] cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                  size={36}
                />
                <span>{personalData.email}</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <IoMdCall
                  className="bg-[#415A77] p-2 rounded-full hover:bg-[#06B6D4] hover:scale-110 transition-all duration-300 text-[#E0E1DD] cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                  size={36}
                />
                <span>
                  {personalData.phone}
                </span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <CiLocationOn
                  className="bg-[#415A77] p-2 rounded-full hover:bg-[#06B6D4] hover:scale-110 transition-all duration-300 text-[#E0E1DD] cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
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
                  className="bg-[#415A77] p-3 rounded-full hover:bg-[#06B6D4] hover:scale-110 transition-all duration-300 text-[#E0E1DD] cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.linkedIn}>
                <BiLogoLinkedin
                  className="bg-[#415A77] p-3 rounded-full hover:bg-[#06B6D4] hover:scale-110 transition-all duration-300 text-[#E0E1DD] cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.facebook}>
                <FaFacebook
                  className="bg-[#415A77] p-3 rounded-full hover:bg-[#06B6D4] hover:scale-110 transition-all duration-300 text-[#E0E1DD] cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
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