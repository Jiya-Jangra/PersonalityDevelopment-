import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css"
import image from "./five.png" ; 
const Questions = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const questions = [
    'I enjoy working in a team environment.',
    'I plan tasks efficiently and meet deadlines.',
    'I am confident in leading others.',
    'I stay calm under pressure.',
    'I pay attention to small details.',
  ];

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handleFinish = () => {
    // Navigate to ResultPage and pass answers
    navigate('/result', { state: { answers } });
  };

  return (
    <div className=" min-h-screen gap-[10px] p-10 flex items-center justify-between bg-zinc-800  ">
      <div className="bg-[#1F4167] p-8 rounded-lg shadow-md w-[80vw]">
        <h2 className="text-2xl text-white font-bold mb-6">Personality Test</h2>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <p className="text-lg mb-2 font-semibold">{question}</p>
            <select
              onChange={e => handleAnswerChange(index, e.target.value)}
              className="border rounded p-2 w-full text-black "
            >
              <option value="" className='font-light'>Select an answer</option>
              <option value="stronglyAgree">Strongly Agree</option>
              <option value="agree">Agree</option>
              <option value="neutral">Neutral</option>
              <option value="disagree">Disagree</option>
              <option value="stronglyDisagree">Strongly Disagree</option>
            </select>
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
          onClick={handleFinish}
        >
          Finish
        </button>
      </div>

      <img
        src={image}
        alt="Description of the image"
        className="w-full h-auto relative top-[60px] left-[40px]" // Tailwind CSS classes for styling (optional)
      />
    </div>
  );
};

export default Questions;

