import type { Skill } from '@/types/skills'
import Image from 'next/image';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
    return (
      <div className="h-28 w-28 flex flex-col justify-around rounded-lg bg-white py-2 
        transition-all duration-200 hover:-translate-y-1">
        <div className="relative w-8 h-8 mx-auto">
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