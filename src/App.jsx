import React, {useState, useEffect} from 'react'
import { supabase } from './client'
import EvalForm from './EvalForm'
import './App.css'
import '@picocss/pico'

function App() {
  
  const [feedback, setFeedback] = useState([])
    useEffect(() => {
      const fetchFeedback = async () => {
        const {data} = await supabase
        .from('feedback')
        .select()

        setFeedback(data)
      }
      fetchFeedback()
    }, [])

  return (
    <div className="App">

      <header>
        <h1>CSA Curriculum Review 🕵️</h1>
      </header>

      <main><EvalForm /></main>
    </div>
  )
}

export default App