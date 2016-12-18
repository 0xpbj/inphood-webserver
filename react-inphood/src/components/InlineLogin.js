import React from 'react';
import { 
  Row, 
  Col,
  Form,
  Button, 
  FormGroup, 
  FormControl,
  ControlLabel,
  Checkbox,
} from 'react-bootstrap/lib';

export default class InlineLogin extends React.Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.state = {};
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onEmailChange(e) {
    const value = this.refs.email.getValue();
    if (/.+@.+\.com/.test(value)) {
      this.setState({emailValid: 'success'});
    } else {
      this.setState({emailValid: 'error'});
    }
  }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.onSubmit} action="">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl 
                ref='email'
                type='text'
                bsStyle={this.state.emailValid}
                placeholder='Email'
                onChange={this.onEmailChange}
                hasFeedback
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </form>
    );
  }
}