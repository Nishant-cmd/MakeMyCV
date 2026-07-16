import Header from './components/layout/header';
import Details from './components/forms/details';
import Render from './components/preview/cv-render';
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
    user_work_status: false,
  };

  const [workInfo, setWorkInfo] = useState([]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const deleteWorkExperience = (id) => {
    const remainingExperience = workInfo.filter((experience) => experience.user_id !== id);
    setWorkInfo(remainingExperience);
  };

  const handleWorkInfoChange = (e) => {
    const { id: experienceId, name, value, type, checked } = e.target;

    const experienceExists = workInfo.some((experience) => experience.user_id === experienceId);

    if (experienceExists) {
      setWorkInfo((prevWorkInfo) =>
        prevWorkInfo.map((experience) =>
          experience.user_id === experienceId
            ? {
                ...experience,
                [name]: type === 'checkbox' ? checked : value,
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
          [name]: type === 'checkbox' ? checked : value,
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
          onDelete={deleteWorkExperience}
        />
        <Render personalInfo={personalInfo} workInfo={workInfo} />
      </div>
    </>
  );
}

export default App;
