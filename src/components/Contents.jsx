import React from 'react'

const Contents = ({handleSelectedStep}) => {


  return (
    <div className="contents-bar">

      <button onClick={handleSelectedStep(0)}>Getting Started</button>
      <button onClick={handleSelectedStep(1)}>Lesson Plan</button>
      <button onClick={handleSelectedStep(2)}>Lesson Content</button>
      <button onClick={handleSelectedStep(3)}>Resources</button>
      <button onClick={handleSelectedStep(4)}>Levels</button>
      <button onClick={handleSelectedStep(5)}>Submit Feedback</button>

      {/* <aside>
        <nav>
          <ul>
            <li>Getting Started</li>
            <li><a href ="#">Lesson Plan</a></li>
            <li><a href ="#">Lesson Content</a></li>
            <li><a href ="#">Resources</a></li>
            <li><a href ="#">Activities & Levels</a></li>
          </ul>
        </nav>
      </aside> */}
    </div>
  )
}

export default Contents