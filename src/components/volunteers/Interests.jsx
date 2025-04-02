import React, { useState } from 'react';

const Interests = () => {
  const questions = [
    "How would you like to get involved",
    "Do you have any previous experience in any of the following areas? (Check all that apply)",
    "What inspired you to join USFJ?",
    "Are you a member of a church or faith community?",
    "Please briefly describe your faith journey or spiritual background (if applicable)",
    "What skills or talents do you bring to our organization?",
    "How did you hear about USFJ?"
  ];

  // We'll store an object with keys corresponding to question indices,
  // and the value is true if that question's answer box is visible.
  const [activeQuestions, setActiveQuestions] = useState({});

  const toggleQuestion = (index) => {
    setActiveQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <div key={index} className="border p-4 rounded-full">
          <div
            onClick={() => toggleQuestion(index)}
            className="cursor-pointer"
          >
            <p className="text-sm font-medium">{question}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Interests;
