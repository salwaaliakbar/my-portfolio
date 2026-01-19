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
          <p className="bg-[hsl(220,18%,10%)] px-4 py-2 md:text-xs rounded-full text-[hsl(38,92%,50%)] font-mono text-sm tracking-wider animate-fade-in-up mt-4 mb-2">$ ls contact/</p>
          <span className="h-2 flex-1 bg-linear-to-r from-[hsl(38,92%,50%)] via-[hsl(38,80%,45%)] to-transparent"></span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
            Let{"'"}s <span className="bg-linear-to-r from-[hsl(38,92%,50%)] via-[hsl(38,80%,45%)] to-[hsl(28,90%,48%)] bg-clip-text text-transparent hover:from-[hsl(38,92%,55%)] hover:via-[hsl(38,80%,50%)] hover:to-[hsl(28,90%,53%)] transition-all duration-300">Connect</span>
          </h2>


        <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center text-[hsl(40,20%,95%)]">
          <ContactForm />
          <div className="lg:w-3/4">
            <div className="flex flex-col gap-5 lg:gap-9">
              <p className="text-sm md:text-xl flex items-center gap-3">
                <MdAlternateEmail
                  className="bg-[hsl(38,80%,45%)] p-2 rounded-full hover:bg-[hsl(38,92%,50%)] hover:scale-110 transition-all duration-300 text-[hsl(40,20%,95%)] cursor-pointer"
                  size={36}
                />
                <span>{personalData.email}</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <IoMdCall
                  className="bg-[hsl(38,80%,45%)] p-2 rounded-full hover:bg-[hsl(38,92%,50%)] hover:scale-110 transition-all duration-300 text-[hsl(40,20%,95%)] cursor-pointer"
                  size={36}
                />
                <span>
                  {personalData.phone}
                </span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <CiLocationOn
                  className="bg-[hsl(38,80%,45%)] p-2 rounded-full hover:bg-[hsl(38,92%,50%)] hover:scale-110 transition-all duration-300 text-[hsl(40,20%,95%)] cursor-pointer"
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
                  className="bg-[hsl(38,80%,45%)] p-3 rounded-full hover:bg-[hsl(38,92%,50%)] hover:scale-110 transition-all duration-300 text-[hsl(40,20%,95%)] cursor-pointer"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.linkedIn}>
                <BiLogoLinkedin
                  className="bg-[hsl(38,80%,45%)] p-3 rounded-full hover:bg-[hsl(38,92%,50%)] hover:scale-110 transition-all duration-300 text-[hsl(40,20%,95%)] cursor-pointer"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.facebook}>
                <FaFacebook
                  className="bg-[hsl(38,80%,45%)] p-3 rounded-full hover:bg-[hsl(38,92%,50%)] hover:scale-110 transition-all duration-300 text-[hsl(40,20%,95%)] cursor-pointer"
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