import { ReactNode } from 'react';

interface ModalProps {
  isChecked: boolean;
  children: ReactNode;
  className: string;
}

export function Modal({ isChecked, children }: ModalProps) {
  return (
    <div className=" border-1 absolute right-0 mt-2 w-64 rounded border border-slate-200 bg-black p-4 text-lg text-slate-200">
      {children}
    </div>
  );
}
