import React, { useState, useEffect } from 'react'

const QuestionCard = ({ question, onAnswer, answered, setAnswered }) => {
  const [result, setResult] = useState(null) // null | true | false

  useEffect(() => {
    // 問題が変わったら結果をリセット
    setResult(null)
  }, [question])

  const handleClick = (isCorrect) => {
    if (result !== null) return // 一度答えたら無視
    setResult(isCorrect)
    setAnswered(true)
    onAnswer(isCorrect)
  }

  return (
    <div className="card">
  <pre>{question.code}</pre>
  <p className="hint">ヒント: {question.hint}</p>
  <div>
    {question.options.map((opt, idx) => (
      <button
        key={idx}
        onClick={() => handleClick(idx === question.correct)}
        disabled={result !== null}
      >
        {opt}
      </button>
    ))}
  </div>
  {result !== null && (
    <p style={{ color: result ? 'green' : 'red', marginTop: '8px' }}>
      {result ? '正解！✨' : '不正解…💦'}
    </p>
  )}
</div>

  )
}

export default QuestionCard
