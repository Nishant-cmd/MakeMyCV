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

  const work_experience = {
    user_id: '',
    user_company: '',
    user_position: '',
    user_job_start: '',
    user_job_end: '',
    experience_summary: '',
    user_work_status: '',
  };

  const [workInfo, setWorkInfo] = useState([]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleWorkInfoChange = (e) => {
    const { id: experienceId, name, value } = e.target;

    const experienceExists = workInfo.some((experience) => experience.user_id === experienceId);

    if (experienceExists) {
      setWorkInfo((prevWorkInfo) =>
        prevWorkInfo.map((experience) =>
          experience.user_id === experienceId
            ? {
                ...experience,
                [name]: value,
              }
            : experience,
        ),
      );
    } else {
      setWorkInfo((prevWorkInfo) => [
        ...prevWorkInfo,
        {
          ...work_experience,
          user_id: experienceId,
          [name]: value,
        },
      ]);
    }
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
        <Details
          onChangePersonalInfo={handlePersonalInfoChange}
          personalInfo={personalInfo}
          onChangeWorkInfo={handleWorkInfoChange}
          workInfo={workInfo}
        />
        <Render personalInfo={personalInfo} workInfo={workInfo} />
      </div>
    </>
  );
}

export default App;
