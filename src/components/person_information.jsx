import { useState } from 'react';
import PersonLogo from '../assets/person.svg';
import '../styles/form.css';

export default function Personal_Information() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="form-collapsed">
      <button
        className="action_handler"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <div>
          <img src={PersonLogo} alt="A logo that symbolize personal_info" />
          <span>Personal Information</span>
        </div>
        <svg
          className={isVisible ? 'chevron-rotate' : 'chevron'}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </button>

      <form id="person-information-form" className={isVisible ? 'form-show' : 'form-hidden'}>
        <fieldset>
          <div className="person-name">
            <label htmlFor="name">Full Name </label>
            <input name="user_name" id="name" placeholder="John Doe" required />
          </div>
          <div className="person-position">
            <label htmlFor="title">Professional Title </label>
            <input name="user_title" id="title" placeholder="Senior Software Engineer" required />
          </div>
          <div className="person-details">
            <div>
              <label htmlFor="email">Email </label>
              <input
                name="user_email"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                required
              />
              <label htmlFor="phone">Phone </label>
              <input name="user_number" id="phone" placeholder="+1(555) 123-4567" />
            </div>
            <div>
              <label htmlFor="location">Location </label>
              <input
                name="user_location"
                id="location"
                type="text"
                placeholder="San Francisco, CA"
              />
              <label htmlFor="linkedin">Linkedin </label>
              <input name="user_linkedin" id="linkedin" placeholder="linkedin.com/in/john" />
            </div>
          </div>

          <div className="person-website">
            <label htmlFor="website">Portfolio / Website</label>
            <input name="user_website" id="website" placeholder="https://johndoe.com" />
          </div>

          <div className="person-summary">
            <label htmlFor="summary">Portfolio / Website</label>
            <textarea
              id="summary"
              name="career_summary"
              rows="5"
              cols="50"
              placeholder="A brief overview of your professional background.."
            ></textarea>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
