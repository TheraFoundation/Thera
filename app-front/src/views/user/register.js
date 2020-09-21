import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';


import { Formik, Form, Field } from 'formik';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 4) {
    error = 'Value must be longer than 3 characters';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const Register = ({ history, loading, registerUserAction }) => {
  const [email] = useState('demo@gogo.com');
  const [password] = useState('gogo123');
  const [name] = useState('Sarah Kortney');

  const onUserRegister = (values) => {
    if (!loading) {
      if (values.email !== '' && values.password !== '') {
        //history.push('/');
        registerUserAction(values, history);
      }
    }
    // call registerUserAction()
  };

  const initialValues = { name, email, password };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
            <p className="white mb-0">
              Please use this form to register. <br />
              If you are a member, please{' '}
              <NavLink to="/user/login" className="white">
                login
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle>


            <Formik initialValues={initialValues} onSubmit={onUserRegister}>
            {({ errors, touched }) => (
              <Form>
                <FormGroup className="form-group has-float-label  mb-4">
                  <Label>
                    <IntlMessages id="user.fullname" />
                  </Label>
                  {/* <Input type="name" defaultValue={name} /> */}
                    <Field
                      className="form-control"
                      type="name"
                      name="name"
                      //validate={validatePassword}
                    />
                </FormGroup>

                <FormGroup className="form-group has-float-label  mb-4">
                  <Label>
                    <IntlMessages id="user.email" />
                  </Label>
                  {/* <Input type="email" defaultValue={email} /> */}
                    <Field
                      className="form-control"
                      name="email"
                      type="email"
                      validate={validateEmail}
                    />
                </FormGroup>

                <FormGroup className="form-group has-float-label  mb-4">
                  <Label>
                    <IntlMessages id="user.password" defaultValue={password} />
                  </Label>
                  {/* <Input type="password" /> */}
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                </FormGroup>

                <div className="d-flex justify-content-end align-items-center">
                  {/* <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={() => onUserRegister()}
                  >
                    <IntlMessages id="user.register-button" />
                  </Button> */}

                  <Button
                      color="primary"
                      className={`btn-shadow btn-multiple-state ${
                        loading ? 'show-spinner' : ''
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        <IntlMessages id="user.register-button" />
                      </span>
                    </Button>

                </div>
              </Form>
            )}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
