import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return (
    <div className="flex min-h-screen w-full max-w-7xl flex-col items-center px-4 py-8">
      {children}
    </div>
  );
}
