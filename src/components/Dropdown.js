import React, { useState } from 'react';
import '../styles/dropdown.scss';

const AccessibleDropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" role="listbox" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <button className="dropdown-button" aria-haspopup="listbox" aria-expanded={isOpen}>
        {selected ? selected.label : label}
      </button>
      {isOpen && (
        <ul className="dropdown-menu" role="listbox">
          {options.map((option, index) => (
            <li key={index} role="option" onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccessibleDropdown;
