
import React from 'react';
import './Form.css';
import img3 from './img/img-3.svg'

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Your credentials have been recorded</h1>
      <img className='form-img-2' src={img3} alt='success-image' />
      <button
            className="view-btn"
            onClick={() => {
              window.location = "/questions";
            }}
          >
            VIEW QUESTIONS
          </button>
    </div>
  );
};

export default FormSuccess;