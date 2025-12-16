import Modal from "../components/BaseModal";
import type { Experience } from "../lib/types";

interface ExperienceModalProps {
  experience: Experience;
  onClick: ()=>void
}

const ExperienceModal = ({ experience , onClick}: ExperienceModalProps) => {
  return (
    <Modal onClick={onClick}>
      <div className="select-all text-header ">
        {experience.company}
        </div>
    </Modal>
  );
};

export default ExperienceModal;
