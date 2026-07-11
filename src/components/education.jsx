import { useState } from 'react';
import EducationLogo from '../assets/education.svg';
import Deletebtn from '../assets/delete-btn.svg';

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [items, addItems] = useState([{ id: crypto.randomUUID() }]);

  const deleteItem = (id) => {
    const newList = items.filter((item) => item.id !== id);
    addItems(newList);
  };

  const handleItem = () => {
    const newItem = [...items, { id: crypto.randomUUID() }];
    console.log(newItem);
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
            showDeleteBtn={index === 0 ? false : true}
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

function Education_List({ id, itempos, onDelete, showDeleteBtn }) {
  const [currentlyStudying, setCurrentlyStudying] = useState(false);
  return (
    <form className="education-info">
      <fieldset className="education-info-fieldset">
        <div className="header">
          <legend>{'Education ' + '#' + (itempos + 1)}</legend>
          {showDeleteBtn ? (
            <button
              type="button"
              className="remove-btn"
              onClick={() => {
                onDelete(id);
              }}
            >
              <img src={Deletebtn} alt="delete-btn" />
              <span>remove</span>
            </button>
          ) : (
            <span></span>
          )}
        </div>
        <div id="education-details">
          <div>
            <label htmlFor="institution_name">Institution Name</label>
            <input id="institution_name" type="text" placeholder="University Of Chicago" required />
          </div>

          <div>
            <label htmlFor="degree">Degree</label>
            <input id="degree" placeholder="Bachelors in Computer Science" />
          </div>

          <div>
            <label htmlFor="education-start">Start Date</label>
            <input id="education-start" type="date" />
          </div>

          <div>
            <label htmlFor="education-end">End Date</label>
            <input id="education-end" type="date" disabled={currentlyStudying} />
          </div>
        </div>
        <div id="checkbox-div">
          <input
            type="checkbox"
            id="education-status"
            name="user-education-status"
            onChange={(e) => setCurrentlyStudying(e.target.checked)}
          />
          <label htmlFor="education-status">I currently study here</label>
        </div>
      </fieldset>
    </form>
  );
}
