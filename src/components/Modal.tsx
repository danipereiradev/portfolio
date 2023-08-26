import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  className: string;
}
export function Modal({ children }: ModalProps) {
  return (
    <div className=" border-1 absolute right-auto top-8 mt-2 w-64 rounded border border-slate-200 bg-black p-4 text-sm text-slate-200">
      {children}
    </div>
  );
}
