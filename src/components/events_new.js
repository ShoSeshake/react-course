import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import "./App.css";
import {postEvent }from '../actions';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class EventsNew extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (<div>

      <input {...input} placeholder={label} type={type} />
    {touched && error && <span>{error}</span>}
    </div>);
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field
              label="Title"
              name="title"
              type="text"
              component={this.renderField}
            />{" "}
          </div>
          <div>
            <Field
              label="Body"
              name="body"
              type="text"
              component={this.renderField}
            />{" "}
          </div>
          <div>
            <input type="submit" value="submit" disabled={submitting || pristine || invalid} />
            <Link to="/"> Cancel</Link>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
const validate = (values) => {
  const errors = {};
  if (!values.title) errors.title = "Please enter a title"
  if (!values.body) errors.body = "Please enter a body"
  return errors;
};

const mapDispatchToProps = ({postEvent})

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: "eventNewForm" })
  (EventsNew)
);
