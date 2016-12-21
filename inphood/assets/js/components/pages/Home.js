import React from "react"
import Article from "../Article"

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Image from 'react-bootstrap/lib/Image';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      url: '',
      ingredients: ''
    }
  }
  setUrl(event) {
    this.setState({url: event.target.value})
  }
  setIngredients(event) {
    this.setState({ingredients: event.target.value})
  }
  getValidationState() {
    const {url} = this.state
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    const test = pattern.test(url)
    if (test) 
      return 'success'
    else 
      return 'error'
  }
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={4}>
              <form>
                <FormGroup validationState={this.getValidationState()}>
                  <ControlLabel>URL</ControlLabel>
                  <FormControl type="url" placeholder="www.google.com" onChange={this.setUrl.bind(this)} />
                </FormGroup>
              </form>
            </Col>
            <Col md={4}>
              <ControlLabel>Image</ControlLabel>
              <Image src={this.state.url} responsive />
            </Col>
            <Col md={4}>
              <form>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Ingredients</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="apples, bananas, citrus, ..." onChange={this.setIngredients.bind(this)} />
                </FormGroup>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}