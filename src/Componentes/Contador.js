import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

    useEffect(() => {
    console.log(`El contador ha cambiado: ${contador}`);
  }, [contador]); 

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      
    </div>
  );
}

export default Contador;
