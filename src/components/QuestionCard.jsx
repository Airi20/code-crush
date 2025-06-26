import React, { useState, useEffect, useRef } from 'react'

const QuestionCard = ({ question, onAnswer, answered, setAnswered }) => {
  const [result, setResult] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
  setResult(null)

  // ここでフォーカス強制解除！
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur()
  }
}, [question])

  const handleClick = (isCorrect) => {
    if (result !== null) return
    setResult(isCorrect)
    setAnswered(true)
    onAnswer(isCorrect)
  }

  return (
    <div
      className="card"
      ref={containerRef}
      //tabIndex={-1}  // ここ重要！フォーカス移動先として機能
    >
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
