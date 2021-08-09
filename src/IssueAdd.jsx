import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormControl, FormGroup, ControlLabel, Button,
} from 'react-bootstrap';
export default class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      name: form.name.value,
      district: form.district.value,
      phone: undefined,
    };
    const { createIssue } = this.props;
    createIssue(issue);
    form.name.value = ''; form.district.value = '';
  }

  render() {
    return (
      <Form inline name="issueAdd" onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Name:</ControlLabel>
          {' '}
          <FormControl type="text" name="name" />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>District:</ControlLabel>
          {' '}
          <FormControl type="text" name="district" />
        </FormGroup>
        {' '}
        <Button bsStyle="primary" type="submit">Add</Button>
      </Form>
    );
  }
}

IssueAdd.propTypes = {
  createIssue: PropTypes.func.isRequired,
};