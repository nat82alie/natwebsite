import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import $ from 'jquery';
import './email-form.css';

class EmailForm extends Component {
  sendEmail() {
    let name = $('#contact-name')[0].value;
    let email = $('#contact-email')[0].value;
    let subject = $('#contact-subject')[0].value;
    let body = $('#contact-email-body')[0].value;

    let alertString = 'Just kidding it doesnt actually send the email yet. Here is your info though,'
      + ' for when I get around to playing with a mailing service:'
      + '\n\nName: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nBody: ' + body;
    alert(alertString);

    // possible resources:
    // https://blog.mailtrap.io/javascript-send-email/
    // https://blog.mailtrap.io/react-send-email/
  }

  render() {
    // TO DO: delete the <br/>'s & instead put each form field in their own div and add padding to the divs
    return (
      <div className="page-container">

        <Typography variant='h6'>
          Contact Form:
        </Typography>
        <br/>
        <form>
          <label htmlFor="contact-name">
            Name
          </label><br/>
          <input type="text" id="contact-name" name="contact-name"/><br/><br/>

          <label htmlFor="contact-email">
            Email Address
          </label><br/>
          <input type="email" id="contact-email" name="contact-email"/><br/><br/>

          <label htmlFor="contact-subject">
            Subject
          </label><br/>
          <input id="contact-subject" name="contact-subject"/><br/><br/>

          <label htmlFor="contact-email-body">
            Email Body
          </label><br/>
          <textarea id="contact-email-body" name="contact-email-body"/><br/><br/>

          <Button variant="outlined" onClick={this.sendEmail}>Send</Button>
        </form>
      </div>
    );
  }
}

export default EmailForm;
