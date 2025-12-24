const SkillButton = ({ skill }: { skill: string }) => {
  return (
    <span
      className="
        text-xs
        px-2 py-1
        rounded-xs
        bg-accent/25
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
