import HeroSection from "@/components/homepage/hero-section";
import AboutSection from "@/components/homepage/about-section";
import ExperienceSection from "@/components/homepage/experience-section";
import SkillsSection from "@/components/homepage/skills-section";
import EducationSection from "@/components/homepage/education-section";
import ProjectsSection from "@/components/homepage/project-section";
import ContactSection from "@/components/homepage/contact-section";
import Footer from "../components/layouts/footer";
import Navbar from "../components/layouts/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
