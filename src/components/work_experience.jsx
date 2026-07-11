import { useState } from 'react';
import WorkLogo from '../assets/work.svg';
import Deletebtn from '../assets/delete-btn.svg';

export default function Work_Experience() {
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
          <img src={WorkLogo} alt="A logo that symbolize work" />
          <span>Work Experience</span>
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
          <Experience_List
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
          Add Experience
        </button>
      </div>
    </div>
  );
}

function Experience_List({ id, itempos, onDelete, showDeleteBtn }) {
  return (
    <form className="experience-info">
      <fieldset className="experience-info-fieldset">
        <div className="header">
          <legend>{'Experience ' + '#' + (itempos + 1)}</legend>
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
        <div id="experience-details">
          <div>
            <label htmlFor="company_name">Company </label>
            <input
              name="user_company"
              id="company_name"
              type="text"
              placeholder="Microsoft"
              required
            />
            <label htmlFor="position">Position </label>
            <input name="user_position" id="position" placeholder="HR Manager" />
          </div>
          <div>
            <label htmlFor="job-start">Start Date </label>
            <input name="user-job-start" id="job-start" type="date" />
            <label htmlFor="job-end">End Date </label>
            <input name="user-job-end" id="job-end" type="date" />
          </div>
        </div>
        <div className="experience-description">
          <label htmlFor="experience">Description</label>
          <textarea
            id="experience"
            name="experience_summary"
            rows="5"
            cols="50"
            placeholder="A brief description about yourself when you were working at these companies"
          ></textarea>
        </div>
        <div id="checkbox-div">
          <input type="checkbox" id="work-status" name="user-work-status" />
          <label htmlFor="work-status">I currently work here</label>
        </div>
      </fieldset>
    </form>
  );
}
