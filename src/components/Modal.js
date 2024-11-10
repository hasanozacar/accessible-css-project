import React from 'react';
import '../styles/modal.scss';

const AccessibleModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div className="modal-content">
        <header className="modal-header">
          <h2 id="modalTitle" className="modal-title">{title}</h2>
          <button
            onClick={onClose}
            className="close-button"
            aria-label="Modalı kapat"
          >
            &times;
          </button>
        </header>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccessibleModal;
