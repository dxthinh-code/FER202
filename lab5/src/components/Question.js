import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function Question({ data, selectedOption, onAnswerSelect }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{data.question}</Card.Title>
        <ListGroup>
          {data.options.map((option, index) => {
            const isSelected = selectedOption === option;
            return (
              <ListGroup.Item
                key={index}
                action
                onClick={() => onAnswerSelect(data.id, option)}
                style={{
                  backgroundColor: isSelected ? '#d4edda' : '',
                  cursor: 'pointer',
                }}
              >
                {option}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Question;
