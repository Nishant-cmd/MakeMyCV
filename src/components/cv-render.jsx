import '../styles/render.css';
import Mail from '../assets/mail.svg';
import Linkedin from '../assets/linkedin.svg';
import Location from '../assets/location.svg';
import Link from '../assets/link.svg';
import Phone from '../assets/phone.svg';

export default function Render({ personalInfo }) {
  return (
    <section style={{ width: '100%', padding: '1.5rem' }}>
      <main className="cv-page">
        <Personal_Information_Display personalInfo={personalInfo} />
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

      <div style={{ padding: '2rem' }}>
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
