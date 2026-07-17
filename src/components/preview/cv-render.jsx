import '../../styles/render.css';
import Mail from '../../assets/mail.svg';
import Linkedin from '../../assets/linkedin.svg';
import Location from '../../assets/location.svg';
import Link from '../../assets/link.svg';
import Phone from '../../assets/phone.svg';
import { format } from '../../../node_modules/date-fns';

export default function Render({ personalInfo, workInfo, educationInfo, skillInfo }) {
  return (
    <section style={{ width: '100%', padding: '1.5rem' }}>
      <main className="cv-page">
        <Personal_Information_Display personalInfo={personalInfo} />
        <Work_Experience_Display workInfo={workInfo} />
        <Education_Display educationInfo={educationInfo} />
        <Skill_Display skillInfo={skillInfo} />
      </main>
    </section>
  );
}

function Personal_Information_Display({ personalInfo }) {
  return (
    <>
      <header className="cv-header">
        <h3>{personalInfo?.user_name || 'Your Name'}</h3>
        <h2
          style={{
            fontSize: '1.25rem',
            fontWeight: '400',
            margin: '.5px 0px 1.5rem',
          }}
        >
          {personalInfo?.user_title || 'Professional Title'}
        </h2>
        <div className="contact-info" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {personalInfo?.user_email && (
            <span>
              <img src={Mail} alt="" />
              {personalInfo.user_email}
            </span>
          )}
          {personalInfo?.user_number && (
            <span>
              <img src={Phone} alt="" />
              {personalInfo.user_number}
            </span>
          )}
          {personalInfo?.user_location && (
            <span>
              <img src={Location} alt="" />
              {personalInfo.user_location}
            </span>
          )}
          {personalInfo?.user_linkedin && (
            <span>
              <img src={Linkedin} alt="" />

              {personalInfo.user_linkedin}
            </span>
          )}
          {personalInfo?.user_website && (
            <span>
              <img src={Link} alt="" />
              {personalInfo.user_website}
            </span>
          )}
        </div>
      </header>

      <div style={{ padding: '2rem 2rem 0rem 2rem' }}>
        {personalInfo?.career_summary && (
          <>
            <h4>Personal Summary</h4>
            <hr />
            <p
              style={{ marginTop: '1rem', color: '#525252', fontSize: '0.8rem', lineHeight: '1.8' }}
            >
              {personalInfo.career_summary}
            </p>
          </>
        )}
      </div>
    </>
  );
}

function Work_Experience_Display({ workInfo }) {
  const experience = workInfo.map((workExperience) => {
    console.log(workExperience.user_work_status);
    const start_date = workExperience.user_job_start
      ? format(workExperience.user_job_start, 'MMMM yyyy')
      : '';

    const end_date = workExperience.user_work_status
      ? 'Present'
      : workExperience.user_job_end
        ? format(workExperience.user_job_end, 'MMMM yyyy')
        : '';

    return (
      <div key={workExperience.user_id} style={{ marginBottom: '2rem' }}>
        <ul
          style={{
            padding: '0px',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.8rem',
            fontWeight: '600',
          }}
        >
          <li>{workExperience.user_position || 'Position'}</li>
          {workExperience?.user_job_start && (
            <span>
              {start_date} - {end_date}
            </span>
          )}
        </ul>
        <p style={{ marginTop: '0.5rem', color: '#525252', fontSize: '0.8rem', lineHeight: '1.8' }}>
          {workExperience?.user_company || 'Company'}
        </p>
        <p style={{ color: '#525252', fontSize: '0.8rem', lineHeight: '1.8' }}>
          {workExperience?.experience_summary}
        </p>
      </div>
    );
  });

  return (
    <div style={{ padding: '0.5rem 2rem 0rem 2rem' }}>
      {workInfo[0]?.user_id && (
        <>
          <h4>Work Experience</h4>
          <hr />
        </>
      )}
      {experience}
    </div>
  );
}

function Education_Display({ educationInfo }) {
  const education = educationInfo.map((education) => {
    const start_date = education.user_education_start
      ? format(education.user_education_start, 'MMMM yyyy')
      : '';

    const end_date = education.user_education_status
      ? 'Present'
      : education.user_education_end
        ? format(education.user_education_end, 'MMMM yyyy')
        : '';

    return (
      <div key={education.user_id} style={{ marginBottom: '2rem' }}>
        <ul
          style={{
            padding: '0px',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.8rem',
            fontWeight: '600',
          }}
        >
          <li>{education.user_degree || 'Degree'}</li>
          {education?.user_education_start && (
            <span>
              {start_date} - {end_date}
            </span>
          )}
        </ul>
        <p style={{ marginTop: '0.5rem', color: '#525252', fontSize: '0.8rem', lineHeight: '1.8' }}>
          {education?.user_college || 'College'}
        </p>
      </div>
    );
  });

  return (
    <div style={{ padding: '0.5rem 2rem 0rem 2rem' }}>
      {educationInfo[0]?.user_id && (
        <>
          <h4>Education</h4>
          <hr />
        </>
      )}
      {education}
    </div>
  );
}

function Skill_Display({ skillInfo }) {
  const skillList = skillInfo.map((skill) => (
    <div
      key={skill.id}
      style={{
        color: ' var(--text-primary)',
        fontSize: ' 0.7rem',
        fontWeight: '500',
        background: ' var(--cream)',
        border: '1px solid var(--accent-gold)',
        borderRadius: '20px',
        padding: '0.5rem 1rem',
      }}
    >
      {skill.skill}
    </div>
  ));
  return (
    <div style={{ padding: '0.5rem 2rem 0rem 2rem' }}>
      {skillInfo[0]?.id && (
        <>
          <h4>Skills</h4>
          <hr />
        </>
      )}

      <div style={{ display: 'flex', gap: '.5rem' }}>{skillList}</div>
    </div>
  );
}
