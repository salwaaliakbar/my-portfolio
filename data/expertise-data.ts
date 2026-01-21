interface SkillCard {
  name: string;
  level: string;
  proficiency: number;
}

interface ExpertiseData {
  category: string;
  title: string;
  description: string;
  avgProficiency: number;
  topSkills: SkillCard[];
  color: string;
}

export const expertiseData: ExpertiseData[] = [
  {
    category: "AI & Deep Learning",
    title: "AI & Deep Learning",
    description: "Advanced expertise in LLMs, RAG, Deep Learning & NLP",
    avgProficiency: 87,
    topSkills: [
      { name: "Python", level: "Expert", proficiency: 90 },
      { name: "TensorFlow", level: "Advanced", proficiency: 85 },
      { name: "Pytorch", level: "Advanced", proficiency: 85 },
      { name: "NLP", level: "Expert", proficiency: 90 },
    ],
    color: "from-[#F59E0B] to-[#EC4899]"
  },
  {
    category: "Full Stack Web (MERN)",
    title: "Full Stack Development",
    description: "Expert MERN stack with React, Next.js, Node.js & Express",
    avgProficiency: 93,
    topSkills: [
      { name: "React", level: "Expert", proficiency: 95 },
      { name: "Next JS", level: "Expert", proficiency: 95 },
      { name: "Node JS", level: "Expert", proficiency: 90 },
      { name: "Express JS", level: "Expert", proficiency: 90 },
    ],
    color: "from-[#3B82F6] to-[#06B6D4]"
  },
  {
    category: "Mobile App Development",
    title: "Mobile Development",
    description: "Cross-platform mobile apps with Flutter & Dart",
    avgProficiency: 75,
    topSkills: [
      { name: "Flutter", level: "Advanced", proficiency: 75 },
      { name: "dart", level: "Advanced", proficiency: 75 },
      { name: "Postman", level: "Advanced", proficiency: 80 },
      { name: "Jest", level: "Advanced", proficiency: 70 },
    ],
    color: "from-[#8B5CF6] to-[#06B6D4]"
  },
  {
    category: "Backend & Systems",
    title: "Backend & APIs",
    description: "RESTful APIs, FastAPI, Microservices & CI/CD Pipelines",
    avgProficiency: 87,
    topSkills: [
      { name: "REST API", level: "Expert", proficiency: 95 },
      { name: "Fast API", level: "Expert", proficiency: 90 },
      { name: "GitHub Actions", level: "Advanced", proficiency: 85 },
      { name: "Java", level: "Advanced", proficiency: 85 },
    ],
    color: "from-[#10B981] to-[#06B6D4]"
  },
  {
    category: "Database & Cloud",
    title: "Database & Cloud",
    description: "MongoDB, PostgreSQL, MySQL, Supabase & Cloud Services",
    avgProficiency: 90,
    topSkills: [
      { name: "MongoDB", level: "Expert", proficiency: 95 },
      { name: "PostgreSQL", level: "Expert", proficiency: 90 },
      { name: "MySQL", level: "Expert", proficiency: 90 },
      { name: "Supabase", level: "Advanced", proficiency: 85 },
    ],
    color: "from-[#EF4444] to-[#F97316]"
  },
  {
    category: "Core CS Fundamentals",
    title: "CS Fundamentals",
    description: "Data Structures, OOP, System Design & Architecture",
    avgProficiency: 92,
    topSkills: [
      { name: "Javascript", level: "Expert", proficiency: 90 },
      { name: "Typescript", level: "Expert", proficiency: 85 },
      { name: "HTML", level: "Expert", proficiency: 95 },
      { name: "CSS", level: "Expert", proficiency: 95 },
    ],
    color: "from-[#EC4899] to-[#8B5CF6]"
  },
];

export type { SkillCard, ExpertiseData };
