import React from 'react';
import '../styles/button.scss';

const AccessibleButton = ({ label, onClick, ariaLabel }) => (
  <button onClick={onClick} aria-label={ariaLabel} className="accessible-button">
    {label}
  </button>
);

export default AccessibleButton;
