import React from 'react';

interface CardProps {
  titulo: string;
  textoDescriptivo: string;
  varianteColor: string;
}

export const Card: React.FC<CardProps> = ({ titulo, textoDescriptivo, varianteColor }) => {
  return (
    <div className={`border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${varianteColor}`}>
      <h3 className="text-2xl font-black uppercase mb-2 border-b-4 border-black pb-1 text-black">
        {titulo}
      </h3>
      <p className="text-lg font-bold text-black">
        {textoDescriptivo}
      </p>
    </div>
  );
};