import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import DisplayCard from './DisplayCard';

function FormEntry() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    employeeId: '',
    age: '',
    domain: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const [submitFormData, setSubmitFormData] = useState([]);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First name is required.';
    if (!formData.lastName) formErrors.lastName = 'Last name is required.';
    if (!formData.employeeId) formErrors.employeeId = 'Employee ID is required.';
    if (!formData.age) formErrors.age = 'Age is required.';
    if (!formData.domain) formErrors.domain = 'Domain is required.';
    if (!formData.phoneNumber) formErrors.phoneNumber = 'Phone number is required.';
    return formErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const getFieldData = validate();
    if (Object.keys(getFieldData).length === 0) {
      setSubmitFormData([...submitFormData, formData]);
      setFormData({
        firstName: '',
        lastName: '',
        employeeId: '',
        age: '',
        domain: '',
        phoneNumber: '',
      });
      setErrors({});
    } else {
      setErrors(getFieldData);
    }
  };

  return (
    <Row className="ml-5 mr-5">
      <Col lg="8" md="8" sm="6">
        <h3 className="mt-3">Employee Details</h3>
        <Form className="formStyle" onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formFirstName">
            <Col lg={4} md={4} sm={4}>
              <Form.Label className="formLableStyle">First Name :</Form.Label>
            </Col>
            <Col lg={8} md={8} sm={8}>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter your First Name"
                value={formData.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formLastName">
            <Col lg={4} md={4} sm={4}>
              <Form.Label className="formLableStyle">Last Name :</Form.Label>
            </Col>
            <Col lg={8} md={8} sm={8}>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter your Last Name"
                value={formData.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formEmployeeID">
            <Col lg={4} md={4} sm={4}>
              <Form.Label className="formLableStyle">Employee ID :</Form.Label>
            </Col>
            <Col lg={8} md={8} sm={8}>
              <Form.Control
                type="number"
                name="employeeId"
                placeholder="Enter your Emp ID"
                value={formData.employeeId}
                onChange={handleChange}
                isInvalid={!!errors.employeeId}
              />
              <Form.Control.Feedback type="invalid">
                {errors.employeeId}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formAge">
            <Col lg={4} md={4} sm={4}>
              <Form.Label className="formLableStyle">Age :</Form.Label>
            </Col>
            <Col lg={8} md={8} sm={8}>
              <Form.Control
                type="number"
                name="age"
                placeholder='Enter your age'
                value={formData.age}
                onChange={handleChange}
                isInvalid={!!errors.age}
              />
              <Form.Control.Feedback type="invalid">
                {errors.age}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formDomain">
            <Col lg={4} md={4} sm={4}>
              <Form.Label className="formLableStyle">Domain :</Form.Label>
            </Col>
            <Col lg={8} md={8} sm={8}>
              <Form.Control
                type="text"
                name="domain"
                placeholder="Enter your Domain"
                value={formData.domain}
                onChange={handleChange}
                isInvalid={!!errors.domain}
              />
              <Form.Control.Feedback type="invalid">
                {errors.domain}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPhoneNumber">
            <Col lg={4} md={4} sm={4}>
              <Form.Label className="formLableStyle">Phone Number :</Form.Label>
            </Col>
            <Col lg={8} md={8} sm={8}>
              <Form.Control
                type="number"
                name="phoneNumber"
                placeholder="123-456-7890"
                value={formData.phoneNumber}
                onChange={handleChange}
                isInvalid={!!errors.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Button variant="success" type="submit" style={{float:'right'}}>Submit</Button>
        </Form>
      </Col>
      <Col lg="4" md="4" sm="6">
        {submitFormData && <DisplayCard formData={submitFormData} />}
      </Col>
    </Row>
  );
}

export default FormEntry;

