import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export function Modal({ isOpen, children }: ModalProps) {
  return (
    isOpen && (
      <div className="fixed inset-0 flex h-full items-center justify-center bg-black bg-opacity-70 px-7 backdrop-blur-lg">
        {children}
      </div>
    )
  );
}
