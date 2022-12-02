import React from 'react';
import Card from 'react-bootstrap/Card';

const TotalCard = (prop) => {
  const { name, total } = prop;
  return (
    <Card className="border-0">
      <Card.Title className="total-card">{name}</Card.Title>
      <Card.Body className="card-body">
        <Card.Text className="d-flex flex-column">
          <span>{total}</span>
          Total Confirmed Cases
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default TotalCard;
