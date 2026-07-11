import { useState } from 'react';
import ProjectLogo from '../assets/project.svg';
import Deletebtn from '../assets/delete-btn.svg';

export default function Project() {
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
          <img src={ProjectLogo} alt="A logo that symbolize Project" />
          <span>Projects</span>
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
          <Project_List
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
          Add Project
        </button>
      </div>
    </div>
  );
}

function Project_List({ id, itempos, onDelete, showDeleteBtn }) {
  return (
    <form className="project-info">
      <fieldset className="project-info-fieldset">
        <div className="header">
          <legend>{'Project ' + '#' + (itempos + 1)}</legend>
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
        <div id="project-details">
          <div>
            <label htmlFor="project-name">Project Name</label>
            <input id="project-name" type="text" placeholder="E-commerce Website" required />
          </div>

          <div className="project-description">
            <label htmlFor="project-description">Description</label>
            <textarea
              id="project-description"
              rows="5"
              placeholder="Describe what the project does, your contributions, and key features..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="technologies">Technologies Used</label>
            <input id="technologies" type="text" placeholder="React, Node.js, MongoDB" />
          </div>

          <div>
            <label htmlFor="project-link">Project Link</label>
            <input id="project-link" type="url" placeholder="https://github.com/username/project" />
          </div>
        </div>
      </fieldset>
    </form>
  );
}
