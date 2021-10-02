import { useState } from "react";

export default function Quiz() 
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
                alert("Good job! You completed the quiz!")
                setShowScore(true);
            }  
        }

        else //(isCorrect === false)
        {
            alert("Incorrect... Try again.");

        }
        
         
    };

    return (
        <div className = 'quiz'>
            {
                //Replace "false" with logic to display score when user answers all questions
            }

            {showScore ? (
                <div className = 'score-section'>You earned {score} points! </div>
            ) : (
                <>
                    <div className = 'question-section>'>
                        <div className = 'question-count'>
                                <span>Question {currentQuestion + 1} </span>/{questions.length}
                        </div>
                        <div className = 'question-text'>{questions[currentQuestion].questionText} </div>
                    </div>
                    <div className = 'answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick = {() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}