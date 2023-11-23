import React, { useEffect, useState } from 'react';

const TodoFecha = () => {
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    const FECHA = new Date();
    const fechaFormateada = FECHA.toLocaleDateString('es-AR', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    setFecha(fechaFormateada);
  }, []); 

  return (
    <div className='fecha-container'>
      <p>{fecha}</p>
    </div>
  );
}

export default TodoFecha;
