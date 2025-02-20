import React, { useState } from 'react';
import { Search, Filter, User, Star } from 'lucide-react';

const CounselorFinder = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    mainConcern: '',
    preferredTime: '',
    sessionType: '',
    urgency: ''
  });

  const questions = {
    1: {
      question: "What would you like to discuss?",
      options: [
        "Academic Pressure",
        "Anxiety & Depression",
        "Relationship Issues",
        "Family Problems",
        "Career Guidance",
        "Other"
      ]
    },
    2: {
      question: "When would you prefer to have sessions?",
      options: [
        "Morning (8 AM - 12 PM)",
        "Afternoon (12 PM - 4 PM)",
        "Evening (4 PM - 8 PM)",
        "Night (8 PM - 12 AM)",
        "Flexible"
      ]
    },
    3: {
      question: "How would you like to connect?",
      options: [
        "Video Call",
        "Voice Call",
        "Chat",
        "No Preference"
      ]
    }
  };

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [`question${step}`]: answer });
    if (step < Object.keys(questions).length) {
      setStep(step + 1);
    } else {
      // Show matching counselors
      console.log("Show matching counselors");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-purple-100 rounded-full">
          <div 
            className="h-2 bg-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${(step / Object.keys(questions).length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {questions[step].question}
        </h3>
        <p className="text-gray-600">
          Step {step} of {Object.keys(questions).length}
        </p>
      </div>

      {/* Options */}
      <div className="grid md:grid-cols-2 gap-4">
        {questions[step].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="p-4 border-2 border-purple-100 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition-all duration-300"
          >
            <span className="text-lg text-gray-800">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CounselorFinder; 