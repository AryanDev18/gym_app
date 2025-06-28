// src/components/TrainerList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./TrainerList.css"; // style as needed

const trainers = [
  { id: 1, name: "Aryan Tanwar", specialty: "Strength Training" },
  { id: 2, name: "Dev Singh", specialty: "Cardio Expert" },
  { id: 3, name: "Tanwar Rishi", specialty: "Yoga & Wellness" },
];

const TrainerList = () => {
  const navigate = useNavigate();

  return (
    <div className="trainer-list">
      <h2>🏋️ Meet Our Trainers</h2>
      <div className="trainer-grid">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="trainer-card"
            onClick={() => navigate(`/trainers/${trainer.id}`)}
          >
            <h3>{trainer.name}</h3>
            <p>{trainer.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerList;


