import React from 'react';

const QuestionCard = ({ question, options, onOptionSelect, onNext, onPrevious, currentQuestion, totalQuestions }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 p-6">
      {/* Question Title */}
      <div className="text-gray-800 text-lg font-semibold">
        Question {currentQuestion} of {totalQuestions}
      </div>
      
      {/* Question Text */}
      <p className="mt-2 text-gray-600 text-base">{question}</p>
      
      {/* Options */}
      <div className="mt-4 grid gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionSelect(index)}
            className="w-full bg-blue-100 hover:bg-blue-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            {option}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={onPrevious}
          disabled={currentQuestion === 1}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
