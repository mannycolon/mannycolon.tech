import React, { Component } from 'react';

import './Contact.styles.css'

// components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// helpers
import { submitForm } from '../../helpers/submitHelpers';

const styles = {
  textField: {
    container: {
      width: '100%',
      backgroundColor: '#37393b',
      margin: '5px',
    },
    inputStyle: {
      color: '#ffffff',
      paddingLeft: '10px',
    },
    textareaStyle: {
      color: '#ffffff',
    },
    hintStyle: {
      color: '#8d8d8d',
      paddingLeft: '10px',
    },
    underlineStyle: {
      bottom: '0px',
    },
    underlineFocusStyle: {
      bottom: '0px',
    },
    errorStyle: {
      padding: '5px 0px'
    }
  },
  button: {
    primary: {
      margin: '10px',
      alignSelf: 'flex-end'
    }
  }
}

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      subject: null,
      message: null,
      nameErrorText: '',
      emailErrorText: '',
      subjectErrorText: '',
      messageErrorText: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateAttributes = this.validateAttributes.bind(this);
    this.validateNameText = this.validateNameText.bind(this);
    this.validateEmailText = this.validateEmailText.bind(this);
    this.validateSubjectText = this.validateSubjectText.bind(this);
    this.validateMessageText = this.validateMessageText.bind(this);
  }

  onSubmit() {
    const { name, email, subject, message } = this.state;

    if (this.validateAttributes()) {
      submitForm(name, email, subject, message)
    }
  }

  validateAttributes() {
    const { name, email, subject, message } = this.state;
    let valid = false;
    if (name && email && subject && message) valid = true;
    if (!name) {
      valid = false;
      this.setState({ nameErrorText: 'This field is required.' })
    } else {
      this.setState({ nameErrorText: '' })
    }
    if (!email || !this.validateEmail(email)) {
      this.setState({ emailErrorText: 'This field is required.' })
      valid = false;
    } else {
      this.setState({ emailErrorText: '' })
    }
    if (!subject) {
      this.setState({ subjectErrorText: 'This field is required.' })
      valid = false;
    } else {
      this.setState({ subjectErrorText: '' })
    }
    if (!message) {
      this.setState({ messageErrorText: 'This field is required.' })
      valid = false;
    } else {
      this.setState({ messageErrorText: '' })
    }

    return valid;
  }

  validateEmail(email) {
    /* eslint-disable no-useless-escape */
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email); // returns true if valid email string.
  }

  validateNameText(name) {
    this.setState({ name })
    if (!name) {
      this.setState({ nameErrorText: 'This field is required.' })
    } else {
      this.setState({ nameErrorText: '' })
    }
  }

  validateEmailText(email) {
    this.setState({ email })
    if(!this.validateEmail(email)) {
      this.setState({ emailErrorText: 'Please enter a valid email address.' })
    } else {
      this.setState({ emailErrorText: '' })
    }
  }

  validateSubjectText(subject) {
    this.setState({ subject })
    if (!subject) {
      this.setState({ subjectErrorText: 'This field is required.' })
    } else {
      this.setState({ subjectErrorText: '' })
    }
  }


  validateMessageText(message) {
    this.setState({ message })
    if (!message) {
      this.setState({ messageErrorText: 'This field is required.' })
    } else {
      this.setState({ messageErrorText: '' })
    }
  }

  render() {
    return (
      <div className="contact-page-container">
        <h1 className="title">Contact Me</h1>
        <div className="form-container">
          <p style={{ width: '90%' }}>
            If you have any questions, please don’t hesitate to contact using form below…
          </p>
          <div style={{ display: 'flex', width: '100%', marginTop: '10px' }}>
            <TextField
              hintText="Full Name"
              style={styles.textField.container}
              inputStyle={styles.textField.inputStyle}
              hintStyle={styles.textField.hintStyle}
              underlineStyle={styles.textField.underlineStyle}
              underlineFocusStyle={styles.textField.underlineFocusStyle}
              errorText= {this.state.nameErrorText}
              errorStyle={styles.textField.errorStyle}
              onChange={(event, name) => this.validateNameText(name) }
            />
            <TextField
              hintText="Email"
              style={styles.textField.container}
              inputStyle={styles.textField.inputStyle}
              hintStyle={styles.textField.hintStyle}
              underlineStyle={styles.textField.underlineStyle}
              underlineFocusStyle={styles.textField.underlineFocusStyle}
              errorText= {this.state.emailErrorText}
              errorStyle={styles.textField.errorStyle}
              onChange={(event, email) => this.validateEmailText(email) }
            />
          </div>
          <div style={{ width: '98%' }}>
            <TextField
              hintText="Subject"
              style={styles.textField.container}
              inputStyle={styles.textField.inputStyle}
              hintStyle={styles.textField.hintStyle}
              underlineStyle={styles.textField.underlineStyle}
              underlineFocusStyle={styles.textField.underlineFocusStyle}
              errorText= {this.state.subjectErrorText}
              errorStyle={styles.textField.errorStyle}
              onChange={(event, subject) => this.validateSubjectText(subject) }
            />
            <TextField
              hintText="Message"
              style={styles.textField.container}
              inputStyle={styles.textField.inputStyle}
              hintStyle={{ ...styles.textField.hintStyle, top: '12px' }}
              underlineStyle={styles.textField.underlineStyle}
              underlineFocusStyle={styles.textField.underlineFocusStyle}
              errorText= {this.state.messageErrorText}
              errorStyle={styles.textField.errorStyle}
              textareaStyle={styles.textField.textareaStyle}
              onChange={(event, message) => this.validateMessageText(message) }
              multiLine={true}
              rows={6}
              rowsMax={10}
            />
          </div>
          <RaisedButton label="Primary" primary={true} style={styles.button.primary} onClick={this.onSubmit} />
        </div>
      </div>
    );
  }
};

export default Contact;
