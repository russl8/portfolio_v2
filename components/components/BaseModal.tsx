"use client";

import { useState } from "react";

interface ModalProps {
  children: React.ReactNode;
  onClick: () => void;
}
const Modal = ({ children, onClick }: ModalProps) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <div
      onClick={onClick}
      className={`${isActive ? "block" : "hidden"} fixed inset-0 h-screen w-screen bg-gray-950/90 select-none flex flex-row justify-center items-center`}
    >
      {children}
    </div>
  );
};

export default Modal;
