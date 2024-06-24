import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function DisplayCard({ formData }) {
  return (
    <div style={{overflow:'auto',height: '80vh' }}>
    {formData.map((data,index)=>(
    <Card className="mt-3 cardGradient"
      key={index}
      onClick={()=>{alert(`Card Holder Name : ${data.firstName}`)}}
      >
      <Card.Body>
        <Card.Title className="mb-3" style={{fontSize:'larger'}}> Card Details :</Card.Title>
        <Row>
          <Col lg={4} md={4} sm={4} className = "cardLableStyle"><strong>First Name:</strong></Col>
          <Col lg={8} md={8} sm={8} className = "cardLableStyle">{data.firstName}</Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={4} className = "cardLableStyle"><strong>Last Name:</strong></Col>
          <Col lg={8} md={8} sm={8} className = "cardLableStyle">{data.lastName}</Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={4} className = "cardLableStyle"><strong>Employee ID:</strong></Col>
          <Col lg={8} md={8} sm={8} className = "cardLableStyle">{data.employeeId}</Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={4} className = "cardLableStyle"><strong>Domain:</strong></Col>
          <Col lg={8} md={8} sm={8} className = "cardLableStyle">{data.domain}</Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={4} className = "cardLableStyle"><strong>Phone Number:</strong></Col>
          <Col lg={8} md={8} sm={8} className = "cardLableStyle">{data.phoneNumber}</Col>
        </Row>
      </Card.Body>
    </Card>
    ))}
    </div>
  );
}
export default DisplayCard;