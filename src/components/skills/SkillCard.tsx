import type { Skill } from '@/types/skills'
import Image from 'next/image';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
    return (
      <div className="md:h-28 md:w-28 flex flex-col justify-around rounded-lg bg-white odd:bg-gray-300 md:bg-white md:odd:bg-white py-2 px-3 md:px-0 
        transition-all duration-200 hover:translate-x-1">
        <div className="relative w-8 h-8 mx-auto hidden md:block">
          <Image 
            className="w-full h-full object-contain !top-[-25px]" 
            src={skill.image} 
            alt={skill.name}
            fill
            priority
          />
        </div>
        <span className="text-center text-small text-gray-darker font-medium capitalize leading-tight">
          {skill.name}
        </span>
      </div>
    )
}