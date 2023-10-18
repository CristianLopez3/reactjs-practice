import React, { createRef, useRef } from 'react';

export default function Referencias ()
{

  // const refMenuButton = createRef() -> Para componentes de clase.

  let refMenuButton = useRef(),
    refMenuNav = useRef();

   const handlerMenuAccordion = (e) =>  {
    if(refMenuButton.current.textContent === 'Menu') {
      refMenuButton.current.textContent = 'Close';
      refMenuNav.current.style.display = 'block';
    } else {
      refMenuButton.current.textContent = 'Menu';
      refMenuNav.current.style.display = 'none';
    }
  }

  return (
    <>
      <h2> Referencias en el DOM </h2>
      <button id='menu-btn' ref={refMenuButton} onClick={handlerMenuAccordion}>
        Menu
      </button>
      <nav id='menu' ref={refMenuNav} style={{display: "none"}}   >
        <a href='#'> Section 1 </a> <br />
        <a href='#'> Section 2 </a> <br />
        <a href='#'> Section 3 </a> <br />
        <a href='#'> Section 4 </a> <br />
        <a href='#'> Section 5 </a> <br />
      </nav>
    </>
  );

}