import Header from './components/header';
import Details from './components/details';
import Render from './components/cv-render';
import { useState } from 'react';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    user_name: '',
    user_title: '',
    user_email: '',
    user_number: '',
    user_location: '',
    user_linkedin: '',
    user_website: '',
    career_summary: '',
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          backgroundColor: ' #fafaf9',
        }}
      >
        <Details onChange={handlePersonalInfoChange} personalInfo={personalInfo} />
        <Render personalInfo={personalInfo} />
      </div>
    </>
  );
}

export default App;
