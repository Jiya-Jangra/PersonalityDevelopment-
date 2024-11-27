import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import video from './videooooo.mp4'

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || {};

  if (!answers) {
    return (
      <div>
        <p>No answers received. Please retake the test.</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
          onClick={() => navigate('/')}
        >
          Go Back
        </button>
      </div>
    );
  }

  const evaluatePersonality = () => {
    let traits = {
      teamwork: 0,
      leadership: 0,
      planning: 0,
      calmness: 0,
      detailOriented: 0,
    };

    if (answers[0] === 'stronglyAgree' || answers[0] === 'agree') {
      traits.teamwork++;
    }
    if (answers[1] === 'stronglyAgree' || answers[1] === 'agree') {
      traits.planning++;
    }
    if (answers[2] === 'stronglyAgree' || answers[2] === 'agree') {
      traits.leadership++;
    }
    if (answers[3] === 'stronglyAgree' || answers[3] === 'agree') {
      traits.calmness++;
    }
    if (answers[4] === 'stronglyAgree' || answers[4] === 'agree') {
      traits.detailOriented++;
    }

    return traits;
  };

  const traits = evaluatePersonality();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black">
            <video
        className="absolute h-full w-full top-0 object-cover   -z-[1]"
        autoPlay
       
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" p-8 rounded shadow-md max-w-lg w-full text-white"style={{backgroundColor: 'rgba(0, 45, 107, 0.5 )'}}>
        <h2 className="text-2xl font-bold mb-6">Your Personality Traits</h2>
        <div className="mb-4">
          <p className="text-lg font-medium mb-2">Teamwork: {traits.teamwork > 0 ? 'Strong' : 'Needs Improvement'}</p>
          <p className="text-lg font-medium mb-2">Leadership: {traits.leadership > 0 ? 'Strong' : 'Needs Improvement'}</p>
          <p className="text-lg font-medium mb-2">Planning: {traits.planning > 0 ? 'Strong' : 'Needs Improvement'}</p>
          <p className="text-lg font-medium mb-2">Calmness: {traits.calmness > 0 ? 'Strong' : 'Needs Improvement'}</p>
          <p className="text-lg font-medium">Detail-Oriented: {traits.detailOriented > 0 ? 'Strong' : 'Needs Improvement'}</p>
        </div>

        <button
          className="bg-[#002C6D] text-white px-4 py-2 rounded mt-6"
          onClick={() => navigate('/')}
        >
          Retake Test
        </button>
      </div>
    </div>
  );
};


export default Result