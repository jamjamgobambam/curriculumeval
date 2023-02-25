import React, {useEffect} from 'react'
import { supabase } from '../client'

const Confirm = ({feedbackData}) => {

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
            <h2>Thanks for your feedback!</h2>

            <div className="form-buttons">
                <button onClick={addFeedbackData} className="submit-button">Submit Feedback</button>
            </div>
        </div>
    )
}

export default Confirm