import React, { useState, useEffect } from 'react';

export default function  ScrollHooks(){

  const[scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log('Moviendo el scroll');
    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener('scroll', detectarScroll);
    return () => {
      window.removeEventListener('scroll', detectarScroll);
      console.log('Fase de desmontaje');
    }
  }, [ scrollY ]);



  useEffect(() => {
    console.log('Fase de montaje');
  }, [  ])

  useEffect(() => {
    console.log('Fase de Actualizacion');
  })

  useEffect(() => {
    return (() => {
      console.log('Fase de desmontaje');
    })
  })


  return(
    <>
      <h2>Use State Hook con Hook</h2>
      <p>Scroll de la ventada va en {scrollY}px</p>
    </>
  );

}