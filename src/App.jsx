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

  const [workInfo, setWorkInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);

  const work_experience = {
    user_id: '',
    user_company: '',
    user_position: '',
    user_job_start: '',
    user_job_end: '',
    experience_summary: '',
    user_work_status: false,
  };

  const education_details = {
    user_id: '',
    user_college: '',
    user_degree: '',
    user_education_start: '',
    user_education_end: '',
    user_education_status: false,
  };

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

  const deleteEductionInfo = (id) => {
    const remaininEducationInfo = educationInfo.filter((education) => education.user_id !== id);
    setEducationInfo(remaininEducationInfo);
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

  const handleEducationInfoChange = (e) => {
    const { id: educationId, name, value, type, checked } = e.target;

    const educationExists = educationInfo.some((education) => education.user_id === educationId);

    if (educationExists) {
      setEducationInfo((prevEducationInfo) =>
        prevEducationInfo.map((education) =>
          education.user_id === educationId
            ? {
                ...education,
                [name]: type === 'checkbox' ? checked : value,
              }
            : education,
        ),
      );
    } else {
      setEducationInfo((prevEducationInfo) => [
        ...prevEducationInfo,
        {
          ...education_details,
          user_id: educationId,
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
          onDeleteExperience={deleteWorkExperience}
          educationInfo={educationInfo}
          onDeleteEducation={deleteEductionInfo}
          onChangeEducationInfo={handleEducationInfoChange}
        />
        <Render personalInfo={personalInfo} workInfo={workInfo} educationInfo={educationInfo} />
      </div>
    </>
  );
}

export default App;
