import React, {useEffect} from 'react'
import { supabase } from '../client'

const Confirm = ({feedbackData}) => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [])

    const addFeedbackData = async () => {
        const {error} = await supabase
        .from('feedback')
        .insert({name: feedbackData.name, unit: feedbackData.unit, lesson: feedbackData.lesson, objectives: feedbackData.objectives, objectivesNotes: feedbackData.objectivesNotes,
            overview: feedbackData.overview, overviewNotes: feedbackData.overviewNotes, question: feedbackData.question, questionNotes: feedbackData.questionNotes,
            standards: feedbackData.standards, standardsNotes: feedbackData.standardsNotes, teacher: feedbackData.teacher, teacherNotes: feedbackData.teacherNotes,
            students: feedbackData.students, studentsNotes: feedbackData.studentsNotes, pacing: feedbackData.pacing, pacingNotes: feedbackData.pacingNotes, slides: feedbackData.slides,
            slidesNotes: feedbackData.slidesNotes, prompts: feedbackData.prompts, promptsNotes: feedbackData.promptsNotes, lessonDirections: feedbackData.lessonDirections,
            lessonDirectionsNotes: feedbackData.lessonDirectionsNotes, slideHeadings: feedbackData.slideHeadings, slideHeadingsNotes: feedbackData.slideHeadingsNotes,
            activityGuides: feedbackData.activityGuides, activityGuidesNotes: feedbackData.activityGuidesNotes, predictDiscussion: feedbackData.predictDiscussion,
            predictDiscussionNotes: feedbackData.predictDiscussionNotes, predictCode: feedbackData.predictCode, predictCodeNotes: feedbackData.predictCodeNotes,
            investigate: feedbackData.investigate, investigateNotes: feedbackData.investigateNotes, investigateTeacher: feedbackData.investigateTeacher,
            investigateTeacherNotes: feedbackData.investigateTeacherNotes, practicePreview: feedbackData.practicePreview, practicePreviewNotes: feedbackData.practicePreviewNotes,
            instructions: feedbackData.instructions, instructionsNotes: feedbackData.instructionsNotes, tips: feedbackData.tips, tipsNotes: feedbackData.tipsNotes,
            starterCode: feedbackData.starterCode, starterCodeNotes: feedbackData.starterCodeNotes, exemplar: feedbackData.exemplar, exemplarNotes: feedbackData.exemplarNotes})
        .select()

        window.location = "/"
    }

    return (
        <div>
            <hgroup>
                <h2>🎉 Thanks for your feedback!</h2>
                <h3>Here's what you've entered. When you're ready, scroll to the bottom to submit your feedback.</h3>
            </hgroup>

            <div className="form-section">
                <h4>👋 Getting Started</h4>
                <p><strong>Name:</strong> {feedbackData.name}</p>
                <p><strong>Unit:</strong> {feedbackData.unit}</p>
                <p><strong>Lesson:</strong> {feedbackData.lesson}</p>
            </div>

            <div className="form-section">
                <h4>📘 Lesson Plan</h4>
                <p><strong>Objectives:</strong> {feedbackData.objectives}</p>
                <p>{feedbackData.objectivesNotes}</p>
                <p><strong>Overview:</strong> {feedbackData.overview}</p>
                <p>{feedbackData.overviewNotes}</p>
                <p><strong>Question of the Day:</strong> {feedbackData.question}</p>
                <p>{feedbackData.questionNotes}</p>
                <p><strong>Standards:</strong> {feedbackData.standards}</p>
                <p>{feedbackData.standardsNotes}</p>
                <p><strong>For Teachers:</strong> {feedbackData.teacher}</p>
                <p>{feedbackData.teacherNotes}</p>
                <p><strong>For Students:</strong> {feedbackData.students}</p>
                <p>{feedbackData.studentsNotes}</p>
            </div>

            <div className="form-section">
                <h4>🧠 Lesson Content</h4>
                <p><strong>Pacing:</strong> {feedbackData.pacing}</p>
                <p>{feedbackData.pacingNotes}</p>
                <p><strong>Slide Icons:</strong> {feedbackData.slides}</p>
                <p>{feedbackData.slidesNotes}</p>
                <p><strong>Discussions:</strong> {feedbackData.prompts}</p>
                <p>{feedbackData.promptsNotes}</p>
                <p><strong>Direction Headings:</strong> {feedbackData.lessonDirections}</p>
                <p>{feedbackData.lessonDirectionsNotes}</p>
            </div>

            <div className="form-section">
                <h4>📄 Resources</h4>
                <p><strong>Title Slide:</strong> {feedbackData.slideHeadings}</p>
                <p>{feedbackData.slideHeadingsNotes}</p>
                <p><strong>Answer Keys:</strong> {feedbackData.activityGuides}</p>
                <p>{feedbackData.activityGuidesNotes}</p>
            </div>

            <div className="last-form-section">
                <h4>🖥️ Levels</h4>
                <p><strong>Predict Level:</strong> {feedbackData.predictDiscussion}</p>
                <p>{feedbackData.predictDiscussionNotes}</p>
                <p><strong>Predict Level Code:</strong> {feedbackData.predictCode}</p>
                <p>{feedbackData.predictCodeNotes}</p>
                <p><strong>Investigate Levels:</strong> {feedbackData.investigate}</p>
                <p>{feedbackData.investigateNotes}</p>
                <p><strong>Teacher Guidance:</strong> {feedbackData.investigateTeacher}</p>
                <p>{feedbackData.investigateTeacherNotes}</p>
                <p><strong>Practice Levels:</strong> {feedbackData.practicePreview}</p>
                <p>{feedbackData.practicePreviewNotes}</p>
                <p><strong>Practice Instructions:</strong> {feedbackData.instructions}</p>
                <p>{feedbackData.instructionsNotes}</p>
                <p><strong>Tips and Resources:</strong> {feedbackData.tips}</p>
                <p>{feedbackData.tipsNotes}</p>
                <p><strong>Starter Code:</strong> {feedbackData.starterCode}</p>
                <p>{feedbackData.starterCodeNotes}</p>
                <p><strong>Exemplar Code:</strong> {feedbackData.exemplar}</p>
                <p>{feedbackData.exemplarNotes}</p>
            </div>

            <div className="form-buttons">
                <button onClick={addFeedbackData} className="submit-button">Submit Feedback</button>
            </div>
        </div>
    )
}

export default Confirm