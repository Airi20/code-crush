import React, { useState, useEffect, useRef } from 'react'

const QuestionCard = ({ question, onAnswer, answered, setAnswered }) => {
  const [result, setResult] = useState(null)
  const buttonsRef = useRef([]) // ボタン要素の参照を保持

  useEffect(() => {
  setResult(null)
  setTimeout(() => {
    buttonsRef.current.forEach(btn => btn && btn.blur())
  }, 0)
}, [question])


  const handleClick = (isCorrect) => {
    if (result !== null) return
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
            ref={el => (buttonsRef.current[idx] = el)} // ref登録
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
