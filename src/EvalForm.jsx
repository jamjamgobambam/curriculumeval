import React, {useState} from 'react'
import { supabase } from './client'
import Contents from './components/Contents'
import GettingStarted from './steps/GettingStarted'
import LessonPlan from './steps/LessonPlan'
import LessonContent from './steps/LessonContent'
import Resources from './steps/Resources'
import Levels from './steps/Levels'
import Confirm from './steps/Confirm'

const EvalForm = () => {

    const [activeStep, setActiveStep] = useState(0)

    const getSteps = () => {
        return ["Getting Started", "Lesson Plan", "Lesson Content", "Resources", "Levels", "Confirm"]
    }

    const steps = getSteps()

    const [feedback, setFeedback] = useState({name: '', unit: '', lesson: '', objectives: '', objectivesNotes: '', overview: '', overviewNotes: '', question: '',
        questionNotes: '', standards: '', standardsNotes: '', teacher: '', teacherNotes: '', students: '', studentsNotes: '', pacing: '', pacingNotes: '',
        slides: '', slidesNotes: '', prompts: '', promptsNotes: '', lessonDirections: '', lessonDirectionsNotes: '', slideHeadings: '', slideHeadingsNotes: '',
        activityGuides: '', activityGuidesNotes: '', predictDiscussion: '', predictDiscussionNotes: '', predictCode: '', predictCodeNotes: '', investigate: '',
        investigateNotes: '', investigateTeacher: '', investigateTeacherNotes: '', practicePreview: '', practicePreviewNotes: '', instructions: '',
        instructionsNotes: '', tips: '', tipsNotes: '', starterCode: '', starterCodeNotes: '', exemplar: '', exemplarNotes: ''})

    const handleNextStep = () => {
        setActiveStep((nextStep) => nextStep + 1)
    }

    const handlePreviousStep = () => {
        setActiveStep((previousStep) => previousStep - 1)
    }

    const handleSelectedStep = (step) => event => {
        event.preventDefault()
        setActiveStep(step)
    }

    const handleChange = (input) => (event) => {
        setFeedback({...feedback, [input]: event.target.value})
    }

    return (
        <div>
            <Contents handleSelectedStep={handleSelectedStep} />

            <div className="form-container">
                {activeStep === 0 && (
                    <GettingStarted feedbackData={feedback} handleChange={handleChange} />
                )}
                {activeStep === 1 && (
                    <LessonPlan feedbackData={feedback} handleChange={handleChange} />
                )}
                {activeStep === 2 && (
                    <LessonContent feedbackData={feedback} handleChange={handleChange} />
                )}
                {activeStep === 3 && (
                    <Resources feedbackData={feedback} handleChange={handleChange} />
                )}
                {activeStep === 4 && (
                    <Levels feedbackData={feedback} handleChange={handleChange} />
                )}
                {activeStep === 5 && (
                    <Confirm feedbackData={feedback} />
                )}

                <div className="form-buttons">
                    <button disabled={activeStep === 0} className="previous-button" onClick={handlePreviousStep}>Back</button>
                    <button disabled={activeStep === steps.length - 1} className="next=button" onClick={handleNextStep}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default EvalForm