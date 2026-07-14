import { useState } from 'react';
import SkillLogo from '../../assets/skills.svg';

export default function Skill() {
  const [isVisible, setIsVisible] = useState(false);
  const [items, addItems] = useState([]);

  const deleteItem = (id) => {
    const newList = items.filter((item) => item.id !== id);
    addItems(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const skill = e.target.user_skills.value;

    const newItem = {
      id: crypto.randomUUID(),
      skill: skill,
    };

    addItems([...items, newItem]);

    e.target.reset();
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
          <img src={SkillLogo} alt="A logo that symbolize Skill" />
          <span>Skills</span>
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

      <div id="skills-div" className={isVisible ? 'form-show' : 'form-hidden'}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="user_skills" placeholder="e.g Javascript, React, Node.js" />
          <button type="submit" className="skill-add-btn">
            Add
          </button>
        </form>

        <div>
          {items.map((item) => (
            <Skill_List key={item.id} id={item.id} skill_name={item.skill} onDelete={deleteItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Skill_List({ skill_name, id, onDelete }) {
  return (
    <div>
      <span>{skill_name}</span>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        x
      </button>
    </div>
  );
}
