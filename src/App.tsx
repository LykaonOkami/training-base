import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Card } from './Components/Card';
import { Button } from './Components/Button';

function App() {
  const [contador, setContador] = useState(0);

  const manejarClic = () => {
    setContador(contador + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <main className="max-w-3xl mx-auto flex flex-col items-center gap-8 mt-12">
        <Card 
          titulo="Manejo de Estado" 
          textoDescriptivo={`El botón ha sido presionado ${contador} veces.`} 
          varianteColor="bg-yellow-300"
        />
        <Button 
          titulo="Aumentar Contador" 
          varianteColor="bg-green-400" 
          onClick={manejarClic} 
        />
      </main>
    </div>
  );
}

export default App;