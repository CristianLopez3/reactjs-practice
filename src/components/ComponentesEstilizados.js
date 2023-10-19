import React from 'react';
import styled, { 
  css, 
  keyframes, 
  ThemeProvider,
  createGlobalStyle
} from 'styled-components';

export default function ComponentesEstilizados() {

  // Estilos globales
  const GlobalStyle = createGlobalStyle`
    h2{
      padding: 2rem;
      background: gray;
      color: #000;
      text-transform: uppercase;
    }
  `;

  const setTimeTransition = (time) => `all ${time} ease`;
  let bgSass = '#ce5290';
  let bgSass80 = '#ce529080';

  const fadeIn = keyframes`
    0%{
      opacity: 0;
    }  
    100%{
      opacity: 1;
    }
  `;

  const MyH3 = styled.h3`
    padding: 10px 30px;
    color: ${({ color }) => color};
    background-color: ${bgSass};
    transition: ${setTimeTransition(".5s")};
    animation: ${fadeIn} 2s ease-in;

    ${({ isButton }) =>
      isButton && css`
        margin: 0 auto;
        border-radius: .5rem; 
        background-color: #000;
      `
    }

    &:hover{
      background-color: ${bgSass80};
      border-radius: .5rem;
    }
  `;

  const light = {
    color: '#000',
    bgColor: '#fff'
  }

  const dark = {
    bgColor: '#000',
    color: '#fff'
  }

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 0.5rem;
  `;

  return (
    <>
      <GlobalStyle />
      <h2>Styled Components</h2>
      <MyH3 color="blue"> h3 Estilizado con styled components </MyH3>
      <MyH3 isButton> h3 Estilizado como boton </MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja con el tema claro</Box>
        <BoxRounded>Soy una caja redondeada con el tema claro</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja con el tema oscuro</Box>
        <BoxRounded>Soy una caja redondeada con el tema dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}