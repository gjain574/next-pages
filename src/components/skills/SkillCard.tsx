import type { Skill } from '@/types/skills'
import Image from 'next/image';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="w-[70px] h-[70px] flex flex-col justify-center bg-black p-2.5 rounded-lg">
      <Image 
        className="max-h-[30px] max-w-[40px] mx-auto" 
        src={skill.image} 
        alt={skill.name}
        width={40}
        height={30}
      />
      <span className="text-xs text-white capitalize leading-tight">
        {skill.name}
      </span>
    </div>
  )
} 