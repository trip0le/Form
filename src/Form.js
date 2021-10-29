import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSucess";
import "./Form.css";


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
        <div className='form-container'>
          {/* <div className='form-content-left'> */}
            {/* <img className='form-img' src={img2} alt='spaceship' /> */}
          {/* </div> */}
          {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    );
  };
  
  export default Form;
