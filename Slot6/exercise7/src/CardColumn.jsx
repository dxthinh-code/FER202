import React from "react";
import xeImage from "./xe.jpg"; // Đảm bảo file xe.jpg nằm trong src/
import 'bootstrap/dist/css/bootstrap.min.css';

const CardColumn = () => {
  const cards = [
    { color: "primary", text: "Some text inside the first card" },
    { color: "warning", text: "Some text inside the first card" },
    { color: "danger", text: "Some text inside the first card" }
  ];

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Cards Columns</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cards.map((card, index) => (
          <div className="col" key={index}>
            <div className={`card border border-4 border-${card.color} text-center`}>
              <img src={xeImage} className="card-img-top img-fluid" alt={`Car ${index + 1}`} />
              <div className={`card-body bg-${card.color}`}>
                <p className={`card-text text-${card.color === "warning" ? "dark" : "white"}`}>
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardColumn;
