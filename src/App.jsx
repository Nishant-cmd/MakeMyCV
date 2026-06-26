import Header from './components/header';
import Details from './components/details';
import Render from './components/cv-render';
function App() {
  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          backgroundColor: ' #fafaf9',
        }}
      >
        <Details />
        <Render />
      </div>
    </>
  );
}

export default App;
