import { useState } from 'react';
import EducationLogo from '../../assets/education.svg';
import Deletebtn from '../../assets/delete-btn.svg';

export default function Education({ educationInfo, onChange, onDelete }) {
  const [isVisible, setIsVisible] = useState(false);
  const [items, addItems] = useState([{ id: crypto.randomUUID() }]);

  const deleteItem = (id) => {
    const newList = items.filter((item) => item.id !== id);
    addItems(newList);
  };

  const handleItem = () => {
    const newItem = [...items, { id: crypto.randomUUID() }];
    addItems(newItem);
  };

  return (
    <div className="form-collapsed">
      <button
        className="action_handler"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <div>
          <img src={EducationLogo} alt="A logo that symbolize Education" />
          <span>Education</span>
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

      <div id="experience-info-form" className={isVisible ? 'form-show' : 'form-hidden'}>
        {items.map((item, index) => (
          <Education_List
            key={item.id}
            id={item.id}
            itempos={index}
            onDelete={deleteItem}
            eudcationInfo={educationInfo}
            onChange={onChange}
            onDeleteEducation={onDelete}
          />
        ))}
        <button
          type="button"
          className="add-item-button"
          onClick={() => {
            handleItem();
          }}
        >
          Add Education
        </button>
      </div>
    </div>
  );
}

function Education_List({ id, itempos, onDelete, educationInfo, onChange, onDeleteEducation }) {
  const [currentlyStudying, setCurrentlyStudying] = useState(false);
  return (
    <form className="education-info">
      <fieldset className="education-info-fieldset">
        <div className="header">
          <legend>{'Education ' + '#' + (itempos + 1)}</legend>
          <button
            type="button"
            className="remove-btn"
            onClick={() => {
              onDelete(id);
              onDeleteEducation(id);
            }}
          >
            <img src={Deletebtn} alt="delete-btn" />
            <span>remove</span>
          </button>
        </div>
        <div id="education-details">
          <div>
            <label htmlFor="institution_name">Institution Name</label>
            <input
              name="user_college"
              id={id}
              type="text"
              placeholder="University Of Chicago"
              value={educationInfo?.user_college}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <label htmlFor="degree">Degree</label>
            <input
              name="user_degree"
              id={id}
              placeholder="Bachelors in Computer Science"
              value={educationInfo?.user_degree}
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="education-start">Start Date</label>
            <input
              name="user_education_start"
              id={id}
              type="date"
              value={educationInfo?.user_education_start}
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="education-end">End Date</label>
            <input
              name="user_education_end"
              id={id}
              type="date"
              disabled={currentlyStudying}
              value={educationInfo?.user_education_end}
              onChange={onChange}
            />
          </div>
        </div>
        <div id="checkbox-div">
          <input
            name="user_education_status"
            type="checkbox"
            id={id}
            onChange={(e) => {
              setCurrentlyStudying(e.target.checked);
              onChange(e);
            }}
            checked={educationInfo?.user_education_status}
          />
          <label htmlFor="education-status">I currently study here</label>
        </div>
      </fieldset>
    </form>
  );
}
