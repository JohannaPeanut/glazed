import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomMailForm from './CustomMailForm';
import './MailchimpFormContainer.scss';

const MailchimpFormContainer = props => {

    const postUrl = process.env.REACT_APP_MAILCHIMP_URI

    return (
        <div className="mc-form-container">
            <MailchimpSubscribe 
            url={postUrl}
            render={({ subscribe, status, message }) => (
                <CustomMailForm
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )} />
        </div>
    );
};


export default MailchimpFormContainer