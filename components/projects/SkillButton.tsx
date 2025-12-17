const SkillButton = ({ skill }: { skill: string }) => {
  return (
    <span
      className="
        text-xs
        px-2 py-1
        rounded-md
        bg-gray-800/80
        text-subheading
        backdrop-blur-sm
        transition-colors
      "
    >
      {skill}
    </span>
  );
};


export default SkillButton;
