import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { Card } from './Components/Card';
import { Button } from './Components/Button';

function App() {
  // 1. Declaramos el Estado (Hook useState) inicializado en 0
  const [contador, setContador] = useState(0);

  // 2. Función para modificar el estado a través del "setter" (setContador)
  const manejarClic = () => {
    setContador(contador + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />

      <main className="max-w-3xl mx-auto flex flex-col items-center gap-8 mt-12">
        
        {/* 3. Renderizamos la Card pasando Props estáticas y el Estado dinámico */}
        <Card 
          titulo="Manejo de Estado" 
          textoDescriptivo={`El botón ha sido presionado ${contador} veces.`} 
          varianteColor="bg-yellow-300"
        />

        {/* 4. Renderizamos el Button inyectando Props y la función que altera el estado */}
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