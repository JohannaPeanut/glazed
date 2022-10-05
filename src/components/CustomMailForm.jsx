import React from 'react'
import { useState } from 'react';


const CustomMailForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
       
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        });
    }

    return (
        <form className="mc__form"
        onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mc__title">{status === "success" 
            ? "Success!" 
            : "Join our email list for future updates."
          }</h3>

        {status === "sending" && (
            // shown when status is sending / could be replaces by spinner
          <div className="mc__alert mc__alert--sending"> 
          
            sending...
          </div>
        )}
        {status === "error" && (
            // when the status prop equals error - pulled from the API // todo: if error message is timeout: show link to mailchimp form page
          <div 
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
            //when the status prop equals success - also pulled from the API and is set up based on react-mailchimp-subscribe's example 
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        <div className="mc__field-container">
          
          <input
            
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            //isRequired
          />

        </div>

        <input
                className='btn'
                type='submit'
                value="Submit"
                //disabled={validateInput(props.formValues)}
            />
      </form>
    )
};

export default CustomMailForm