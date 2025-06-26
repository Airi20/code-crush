import React, { useState, useEffect } from 'react'
import questions from './data'
import QuestionCard from './components/QuestionCard'

const App = () => {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)

  // 問題が変わるたびansweredリセット
  //useEffect(() => {
    //setAnswered(false)
 // }, [current])

    const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1)
    setAnswered(true)
    setTimeout(() => {
      setCurrent((prev) => prev + 1)
      setAnswered(false)
    }, 1000)
  }

  return (
    <div className="app">
  <p className="warning-message" style={{ color: 'orange', marginBottom: '1rem' }}>
    ⚠️ スマホは横向き推奨！画面が見切れちゃうよ〜📱➡️📴
  </p>
  {current < questions.length ? (
    <QuestionCard
      question={questions[current]}
      onAnswer={handleAnswer}
      answered={answered}
      setAnswered={setAnswered}
    />
  ) : (
    <div>
      <h2>お疲れ！🎉</h2>
      <p>スコア: {score} / {questions.length}</p>
    </div>
  )}
</div>

  )
}

export default App
