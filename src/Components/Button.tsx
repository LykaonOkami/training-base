import React from 'react';

interface ButtonProps {
  titulo: string;
  varianteColor: string;
  onClick: () => void; 
}

export const Button: React.FC<ButtonProps> = ({ titulo, varianteColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-4 border-black px-6 py-3 font-black uppercase text-xl text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all active:bg-black active:text-white ${varianteColor}`}
    >
      {titulo}
    </button>
  );
};