import React,{ useState } from "react";

import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Quiz(props)
{
    const questions = [
        {
            questionText: 'Who is said to have had ADHD?',
            answerOptions:
            [
                { answerText: 'Albert Einstein', isCorrect: false },
                { answerText: 'Galileo Galilei', isCorrect: false },
                { answerText: 'Leonardo Da Vinci', isCorrect: true  },    //CORRECT ANSWER
                { answerText: 'Thomas Edison', isCorrect: false  },

            ],
        },

        {
            questionText: 'How many kids are said to have ADHD in the US betweeen ages 2 and 17?',
            answerOptions:
            [
                { answerText: '6.1 million', isCorrect: true  },    //CORRECT ANSWER
                { answerText: '2.4 million', isCorrect: false  },
                { answerText: '8 trillion', isCorrect: false  },
                { answerText: '100,000', isCorrect: false  },

            ],
        },

        {
            questionText: 'Between ages of 1 and 2, how many new brain connections are formed per second?',
            answerOptions:
            [
                { answerText: '100', isCorrect: false  },
                { answerText: '2 million', isCorrect: true  },     //CORRECT ANSWER
                { answerText: '1', isCorrect: false  },
                { answerText: '7', isCorrect: false  },

            ],
        },

        {
            questionText: 'Potential strengths of people who have ADHD...',
            answerOptions:
            [
                { answerText: 'Energetic', isCorrect: false  },
                { answerText: 'Creative', isCorrect: false  },
                { answerText: 'Hyperfocused', isCorrect: false  },
                { answerText: 'All of the above', isCorrect: true  },     //CORRECT ANSWER

            ],
        },

        {
            questionText: 'The heart beats more than 100,000 times per day.',
            answerOptions:
            [
                { answerText: 'True', isCorrect: true  },     //CORRECT ANSWER
                { answerText: 'False', isCorrect: false  },

            ],
        },


    ];

    //Provides the question number corresponding with the elements in the array
    const [currentQuestion, setCurrentQuestion] = useState(0);

    //Score
    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) =>
    {


        if (isCorrect === true)
        {
            alert("Correct!")
            setScore(score + 20);
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length)
            {
                setCurrentQuestion(nextQuestion);
            }
            else
            {
                alert("Good job! You completed the quiz and earned 100 points!")
                setShowScore(true);
            }
        }

        else //(isCorrect === false)
        {
            alert("Incorrect... Try again.");

        }


    };

    return (

        <div>

        <Navbar credits={props.credits}/>
        <Header />

        <div className = 'quiz'>
            {
                //Replace "false" with logic to display score when user answers all questions
            }

            {
                <>
									<div className="col mb-5">
      							<div className="card h-100">
         							<div className="card-body p-4">
          							<div className="text-center">
													<div className = 'question-section>'>
														<div className = 'question-count'>
															<span>Question {currentQuestion + 1} </span>/{questions.length}
														</div>
														<div className = 'question-text'>{questions[currentQuestion].questionText} </div>
														<div className = 'answer-section'>
															{questions[currentQuestion].answerOptions.map((answerOption) => (
																	<button className = "text-center btn btn-outline-dark mt-auto" onClick = {() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
															))}
														</div>
													</div>
          							</div>
        							</div>
        							<div className="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
      							</div>
    							</div>
                </>
            }
        </div>
        <Footer />
        </div>
    );
}

