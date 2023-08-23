import { ReactNode } from 'react';

interface ModalProps {
  isChecked: boolean;
  children: ReactNode;
}

export function Modal({ isChecked, children }: ModalProps) {
  return (
    <div
      className={
        isChecked
          ? 'absolute right-0 mt-2 w-64 rounded bg-white p-4 text-lg text-black'
          : 'text-black` absolute right-0 mt-2 w-64 rounded bg-zinc-900 p-4 text-white'
      }
    >
      {children}
    </div>
  );
}
