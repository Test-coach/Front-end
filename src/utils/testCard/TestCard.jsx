import React from 'react'

const TestCard = ({ courseTyping }) => {
  return (
    <div>
        <br/>
        <div>{courseTyping.title}</div>
        <div>{courseTyping.description}</div>
        <div>{courseTyping.difficulty}</div>
        <div>{courseTyping.duration} min </div>
         <div>{courseTyping.passage.language}</div>
          <br/>
    </div>
  )
}

export default TestCard