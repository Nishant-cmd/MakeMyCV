import { useState } from 'react';
import Header from './components/header';
import Details from './components/details';
import Render from './components/cv-render';
function App() {
  return (
    <>
      <Header />
      <Details />
      <Render />
    </>
  );
}

export default App;
