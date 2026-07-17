import Education from './education';
import Personal_Information from './person_information';
import Project from './projects';
import Skill from './skills';
import Work_Experience from './work_experience';

export default function Details({
  onChangePersonalInfo,
  personalInfo,
  onChangeWorkInfo,
  workInfo,
  onDeleteExperience,
  educationInfo,
  onDeleteEducation,
  onChangeEducationInfo,
  onSkillChange,
}) {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '40%' }}>
      <p>Start filling up your information !</p>
      <Personal_Information onChange={onChangePersonalInfo} personalInfo={personalInfo} />
      <Work_Experience
        onChange={onChangeWorkInfo}
        workInfo={workInfo}
        onDelete={onDeleteExperience}
      />
      <Education
        onChange={onChangeEducationInfo}
        educationInfo={educationInfo}
        onDelete={onDeleteEducation}
      />
      <Skill onChange={onSkillChange} />
      <Project />
    </main>
  );
}
