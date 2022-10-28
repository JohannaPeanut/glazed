import React from 'react';
import { useState } from 'react';
import './MailchimpFormContainer.scss';

const CustomMailForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [delayed, setDelayed] = useState(false);

  const mailchimpAltUrl = process.env.REACT_APP_MAILCHIMP_ALT_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDelayed(false)
    // delayed is set to true after 5 sec
    setTimeout(() => {
      setDelayed(true);
    }, 5000);

    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email
      });
    setEmail('');
  };

  return (
    <form className="mc-form" onSubmit={(e) => handleSubmit(e)}>
      <>
        {!status ? (
          // checks if status message is there
          <div>
            <h3 className="mc-title">Join our free beta:</h3>
          </div>
        ) : (
          status === 'success' ? (
            //when the status prop equals success - also pulled from the API and is set up based on react-mailchimp-subscribe's example
            <div>
              <h3 className="mc-title"> Thanks for joining!</h3>
            </div>
          ) : (
            !delayed ? (
              // shown when status is sending / could be replaces by spinner
              <div>
                <h3 className="mc-title">Sending...</h3>
              </div>
            ) : (
              // in case no success after 5 seconds
              <div> 
              <h3 className="mc-title">
                This didn't work. Try{' '}
                <a
                  href={mailchimpAltUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </h3>
            </div>
            )
          )
        )
      }        
      </>

      <div className="mc-field-container">
        <input
          className="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onSubmit={(e) => e.target.reset()}
          placeholder="your@email.com"
          //isRequired
        />
        <input
          className="btn"
          type="submit"
          value="join"
          //disabled={validateInput(props.formValues)}
        />
      </div>
    </form>
  );
};

export default CustomMailForm;
