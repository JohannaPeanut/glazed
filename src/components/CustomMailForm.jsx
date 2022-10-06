import React from 'react'
import { useState } from 'react';
import './MailchimpFormContainer.scss';


const CustomMailForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
       
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        });
        setEmail('')
    }

    return (
        <form className="mc-form"
        onSubmit={(e) => handleSubmit(e)}>
            <div>
        <h3 className="mc-title">{status === "success" 
            ? "Thanks for joining!" 
            : "Join our free beta:"
          }</h3>
          </div>

        {/* {status === "sending" && (
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
        )} */}

        <div className="mc-field-container">
          
          <input
            className="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onSubmit={(e)=> e.target.reset()}
            placeholder="your@email.com"
            //isRequired
            
          />
            <input
                className='btn'
                type='submit'
                value="join"
                //disabled={validateInput(props.formValues)}
            />
        </div>

       
      </form>
    )
};

export default CustomMailForm