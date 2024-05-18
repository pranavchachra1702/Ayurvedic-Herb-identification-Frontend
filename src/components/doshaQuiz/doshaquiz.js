
import React, { useState } from 'react';
import "./doshaquiz.css";

export default function Quiz() {
	const questions = [
        {
            question: 'Body Build:',
            options: [
              { dosha: 'Vata', text: 'Thin, with prominent joints and protruding bones.', points: 1 },
              { dosha: 'Pitta', text: 'Moderate, muscular, and well-proportioned.', points: 1 },
              { dosha: 'Kapha', text: 'Solid, sturdy, with a tendency towards heaviness.', points: 1 }
            ]
          },
          {
            question: 'Skin Texture:',
            options: [
              { dosha: 'Vata', text: 'Dry, rough, and prone to cracking.', points: 1 },
              { dosha: 'Pitta', text: 'Soft, warm, and prone to freckles or moles.', points: 1 },
              { dosha: 'Kapha', text: 'Smooth, oily, and cool to the touch.', points: 1 }
            ]
          },
          {
            question: 'Appetite:',
            options: [
              { dosha: 'Vata', text: 'Variable, sometimes strong, sometimes weak.', points: 1 },
              { dosha: 'Pitta', text: 'Strong, but manageable; enjoy regular meals.', points: 1 },
              { dosha: 'Kapha', text: 'Steady and strong; rarely experience hunger.', points: 1 }
            ]
          },
          {
            question: 'Sleep Pattern:',
            options: [
              { dosha: 'Vata', text: 'Light sleeper, prone to insomnia and irregular sleep cycles.', points: 1 },
              { dosha: 'Pitta', text: 'Moderate sleeper, may wake occasionally but usually sleeps well.', points: 1 },
              { dosha: 'Kapha', text: 'Deep sleeper, enjoy long hours of uninterrupted sleep.', points: 1 }
            ]
          },
          {
            question: 'Preferred Climate:',
            options: [
              { dosha: 'Vata', text: 'Warm and humid environments.', points: 1 },
              { dosha: 'Pitta', text: 'Moderate climates with some warmth.', points: 1 },
              { dosha: 'Kapha', text: 'Cool and dry climates.', points: 1 }
            ]
          },
          {
            question: 'Response to Stress:',
            options: [
              { dosha: 'Vata', text: 'Feel anxious, worried, and restless under pressure.', points: 1 },
              { dosha: 'Pitta', text: 'Easily irritable and may exhibit signs of frustration.', points: 1 },
              { dosha: 'Kapha', text: 'Tend to withdraw and feel lethargic when stressed.', points: 1 }
            ]
          },
          {
            question: 'Communication Style:',
            options: [
              { dosha: 'Vata', text: 'Talkative, creative, and often change topics rapidly.', points: 1 },
              { dosha: 'Pitta', text: 'Direct, articulate, and persuasive.', points: 1 },
              { dosha: 'Kapha', text: 'Calm, slow-paced, and thoughtful in speech.', points: 1 }
            ]
          },
          {
            question: 'Digestion:',
            options: [
              { dosha: 'Vata', text: 'Irregular, often experiencing gas, bloating, or constipation.', points: 1 },
              { dosha: 'Pitta', text: 'Strong, efficient, and rarely have digestive issues.', points: 1 },
              { dosha: 'Kapha', text: 'Slow and steady, but may experience sluggish digestion.', points: 1 }
            ]
          },
          {
            question: 'Memory and Learning:',
            options: [
              { dosha: 'Vata', text: 'Quick to learn but tend to forget easily.', points: 1 },
              { dosha: 'Pitta', text: 'Sharp memory and good retention of information.', points: 1 },
              { dosha: 'Kapha', text: 'Steady learner, with a strong memory once learned.', points: 1 }
            ]
          },
          {
            question: 'Reaction to Food:',
            options: [
              { dosha: 'Vata', text: 'Easily affected by raw, cold, or dry foods.', points: 1 },
              { dosha: 'Pitta', text: 'Enjoy spicy and hot foods but may experience heartburn.', points: 1 },
              { dosha: 'Kapha', text: 'Prefer warm, cooked foods and have a strong appetite.', points: 1 }
            ]
          }
        
		]

        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [showDosha, setShowDosha] = useState(false);
        const [score, setScore] = useState(0);
        const [dosha, setDosha] = useState('');
      
        const handleAnswerOptionClick = (dosha) => {
          setScore(score + 1);
      
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowDosha(true);
            calculateDosha();
          }
        };
      
        const calculateDosha = () => {
          if (score >= 0 && score <= 5) {
            setDosha('Vata');
          } else if (score >= 6 && score <= 10) {
            setDosha('Pitta');
          } else {
            setDosha('Kapha');
          }
        };
      
        const goToNextQuestion = () => {
          setCurrentQuestion(currentQuestion + 1);
        };
      
        const goToPrevQuestion = () => {
          setCurrentQuestion(currentQuestion - 1);
        };
        
        const backgroundImageClass = `background-image-${currentQuestion + 1}`;
      
        return (
          <div className={`body ${backgroundImageClass}`}>
            <div className='app'>
              {showDosha ? (
                <div className='dosha-section'>
                  <p>Your dosha is: {dosha}</p>
                </div>
              ) : (
                <>
                  <div className='question-section'>
                    <div className='question-count'>
                      <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].question}</div>
                  </div>
                  <div className='answer-section'>
                    {questions[currentQuestion].options.map((option) => (
                      <button key={option.dosha} onClick={() => handleAnswerOptionClick(option.dosha)}>
                        {option.text}
                      </button>
                    ))}
                  </div>
                  <div className='navigation-buttons'>
                    {currentQuestion > 0 && (
                      <button onClick={goToPrevQuestion}>Previous</button>
                    )}
                    {currentQuestion < questions.length - 1 && (
                      <button onClick={goToNextQuestion}>Next</button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      }