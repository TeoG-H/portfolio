import React from 'react'
import { useState  } from 'react'
import { skills } from '../../data/skills'
import * as  Icons from 'lucide-react'
import FadeIn from '../animations/FadeIn'

const Skills = () => {

    // Categorize skills
    const skillCategories = {
    'Frontend Development': [
        skills.find(s => s.name === 'React.js'),
        skills.find(s => s.name === 'JavaScript'),
        skills.find(s => s.name === 'TypeScript'),
        skills.find(s => s.name === 'Next.js'),
        skills.find(s => s.name === 'Tailwind CSS'),
        skills.find(s => s.name === 'Redux'),
    ].filter(Boolean),

    'Backend & APIs': [
        skills.find(s => s.name === 'Node.js'),
        skills.find(s => s.name === 'REST APIs'),
    ].filter(Boolean),

    'Tools & Others': [
        skills.find(s => s.name === 'Git & GitHub'),
        skills.find(s => s.name === 'Responsive Design'),
        skills.find(s => s.name === 'Figma'),
        skills.find(s => s.name === 'Vite'),
    ].filter(Boolean),
    };

    const getProficiencyLevel = (level) => {
    const levels = {
        Expert: 95,
        Advanced: 80,
        Intermediate: 65,
    };
    return levels[level] || 50;
    };

    const getLevelColor = (level) => {
    const colors = {
        Expert: 'text-[#8DF6E9] bg-[#8DF6E9]/20 border-[#8DF6E9]/30',
        Advanced: 'text-[#8DF6E9] bg-[#8DF6E9]/15 border-[#8DF6E9]/25',
        Intermediate: 'text-[#8DF6E9] bg-[#8DF6E9]/10 border-[#8DF6E9]/20',
    };

  return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30';
};

    

  return (
  <section id="skills" className="relative py-20 bg-black overflow-hidden ">
    {/* Animated Background Gradients */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn delay={100}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Icons.Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">My Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills
          </p>
        </div>
      </FadeIn>

      {/* Skills Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Object.entries(skillCategories).map(
          ([category, categorySkills], categoryIndex) => (
            <FadeIn key={category} delay={categoryIndex * 100}>
              <div className="">
                <div className="">
                  <div className=""></div>
                  <h3 className="">{category}</h3>
                </div>

                {/* Skills List */}
                <div className="">
                  {categorySkills.map((skill, skillIndex) => {
                    const IconComponent =
                      Icons[skill.icon] || Icons.Code2;
                    const proficiency = getProficiencyLevel(skill.level);

                    return (
                      <div key={skill.id} className="">
                        <div className="">
                          <div className="">
                            <div className="">
                              <IconComponent className="" />
                            </div>
                            <div>
                              <div className="">
                                {skill.name}
                              </div>
                              <div className="">
                                {skill.experience}
                              </div>
                            </div>
                          </div>

                          <span
                            className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(
                              skill.level
                            )}`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <div className="">
                          <div
                            className=""
                            style={{ width: `${proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Hover Glow Effect */}
                <div className=""></div>
              </div>
            </FadeIn>
          )
        )}
      </div>
    </div>
  </section>
);

}

export default Skills