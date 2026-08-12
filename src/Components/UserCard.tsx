import React from 'react';

interface UserCardProps {
  nombre: string;
  puesto: string;
}

export const UserCard: React.FC<UserCardProps> = ({ nombre, puesto }) => {
  return (
    <div className="border-4 border-black bg-white p-6 max-w-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-3xl font-black text-black uppercase mb-4 border-b-4 border-black pb-2">
        {nombre}
      </h2>
      <span className="bg-black text-white text-lg font-bold uppercase px-4 py-2 inline-block">
        {puesto}
      </span>
    </div>
  );
};