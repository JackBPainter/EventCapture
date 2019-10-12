import React from 'react';
import sendEmail from '../akkroo_api';

const MailDispatch = props => {
    console.log(sendEmail(window))
    return (
        <div>example</div>
    )
}

export default MailDispatch;