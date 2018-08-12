import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
// core components
import GridContainer from "../Grid/GridContainer"
import GridItem from "../Grid/GridItem"

// helpers
import { submitForm } from '../../helpers/submitHelpers';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: "var(--red-color)",
    }
  },
  primaryButton: {
    margin: theme.spacing.unit,
    alignSelf: 'flex-end'
  },
  formsContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: '50px'
  }
})

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
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

  validateNameText(name, other) {
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
    const { classes, parentClasses } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
          <div id="contact-section" className={`${parentClasses.pContent} ${parentClasses.gridItemContent}`} >
            <h2 className={parentClasses.title}>Contact Me</h2>
            <div className={classes.formsContainer}>
              <div>
                <FormControl className={classes.formControl}
                            error={this.state.nameErrorText ? true : false}
                            fullWidth>
                  <Input id="name"
                         placeholder="Full Name"
                         value={this.state.name}
                         fullWidth
                         type="text"
                         name="name"
                         classes={{
                          underline: classes.cssUnderline,
                         }}
                         onChange={(event, name) => this.validateNameText(event.target.value, name)} />
                  <FormHelperText>{this.state.nameErrorText}</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}
                             error={this.state.emailErrorText ? true : false}
                             fullWidth>
                  <Input id="Email"
                         placeholder="Email"
                         value={this.state.email}
                         fullWidth
                         classes={{
                          underline: classes.cssUnderline,
                         }}
                         onChange={(event) => this.validateEmailText(event.target.value.trim())} />
                  <FormHelperText>{this.state.emailErrorText}</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}
                             error={this.state.subjectErrorText ? true : false}
                             fullWidth>
                  <Input id="Subject"
                         placeholder="Subject"
                         value={this.state.subject}
                         fullWidth
                         classes={{
                          underline: classes.cssUnderline,
                         }}
                         onChange={(event) => this.validateSubjectText(event.target.value)} />
                  <FormHelperText>{this.state.subjectErrorText}</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}
                             error={this.state.messageErrorText ? true : false}
                             fullWidth>
                  <Input id="Message"
                         placeholder="Message"
                         value={this.state.message}
                         fullWidth
                         multiline
                         rows={6}
                         classes={{
                          underline: classes.cssUnderline,
                         }}
                         onChange={(event) => this.validateMessageText(event.target.value)} />
                  <FormHelperText>{this.state.messageErrorText}</FormHelperText>
                </FormControl>
              </div>
              <Button variant="contained" color="primary" className={classes.primaryButton} onClick={this.onSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    );
  }
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  parentClasses: PropTypes.object.isRequired,
}

export default withStyles(styles)(Contact);
