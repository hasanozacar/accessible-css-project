import React, { useState } from 'react';
import '../styles/form.scss';

const AccessibleForm = ({ onSubmitSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted!");
      onSubmitSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="accessible-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-describedby="nameError"
        />
        {errors.name && <p id="nameError" aria-live="assertive" className="error">{errors.name}</p>}
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="emailError"
        />
        {errors.email && <p id="emailError" aria-live="assertive" className="error">{errors.email}</p>}
      </div>
      
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default AccessibleForm;
