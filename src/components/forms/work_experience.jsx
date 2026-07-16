import { useState } from 'react';
import WorkLogo from '../../assets/work.svg';
import Deletebtn from '../../assets/delete-btn.svg';

export default function Work_Experience({ onChange, workInfo, onDelete }) {
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
            onChange={onChange}
            workInfo={workInfo.find((experience) => experience.user_id === item.id)}
            onDeleteExpereince={onDelete}
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

function Experience_List({ id, itempos, onDelete, onChange, workInfo, onDeleteExpereince }) {
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  return (
    <form className="experience-info">
      <fieldset className="experience-info-fieldset">
        <div className="header">
          <legend>{'Experience ' + '#' + (itempos + 1)}</legend>
          <button
            type="button"
            className="remove-btn"
            onClick={() => {
              onDelete(id);
              onDeleteExpereince(id);
            }}
          >
            <img src={Deletebtn} alt="delete-btn" />
            <span>remove</span>
          </button>
        </div>
        <div id="experience-details">
          <div>
            <label htmlFor="company_name">Company</label>
            <input
              name="user_company"
              id={id}
              type="text"
              placeholder="Microsoft"
              required
              value={workInfo?.user_company}
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="position">Position</label>
            <input
              name="user_position"
              id={id}
              placeholder="HR Manager"
              value={workInfo?.user_position}
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="job-start">Start Date</label>
            <input
              name="user_job_start"
              id={id}
              type="date"
              value={workInfo?.user_job_start}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="job-end">End Date</label>
            <input
              name="user_job_end"
              id={id}
              type="date"
              disabled={currentlyWorking}
              value={workInfo?.user_job_end}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="experience-description">
          <label htmlFor="experience">Description</label>
          <textarea
            id={id}
            name="experience_summary"
            rows="5"
            cols="50"
            placeholder="A brief description about yourself when you were working at these companies"
            value={workInfo?.experience_summary}
            onChange={onChange}
          ></textarea>
        </div>
        <div id="checkbox-div">
          <input
            name="user_work_status"
            type="checkbox"
            id={id}
            onChange={(e) => {
              setCurrentlyWorking(e.target.checked);
              onChange(e);
            }}
            checked={workInfo?.user_work_status}
          />
          <label htmlFor="work-status">I currently work here</label>
        </div>
      </fieldset>
    </form>
  );
}
