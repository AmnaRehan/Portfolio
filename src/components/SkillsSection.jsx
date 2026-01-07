import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "React", level: 85, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "HTML/CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "SQL Server", level: 95, category: "backend" },

  // Tools
  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 95, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Vercel", level: 80, category: "tools" },
  { name: "Netlify", level: 80, category: "tools" },
  { name: "Clerk (Auth)", level: 80, category: "tools" },
  { name: "Convex (Backend as a Service)", level: 80, category: "tools" },
  { name: "Vapi (AI Voice Agents)", level: 80, category: "tools" },



  // Languages
  { name: "C/C++", level: 90, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "JavaScript", level: 85, category: "languages" },
  { name: "TypeScript", level: 80, category: "languages" },
  { name: "Assembly", level: 95, category: "languages" },

  // Soft Skills
  { name: "Public Speaking", level: 95, category: "soft" },
  { name: "Teamwork", level: 95, category: "soft" },
  { name: "Communication", level: 95, category: "soft" },
  { name: "Problem Solving", level: 90, category: "soft" },
  { name: "Leadership", level: 90, category: "soft" },
  { name: "Organizational Skills", level: 90, category: "soft" },

];
const categories = ["all", "frontend", "backend", "tools", "languages", "soft"];


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};