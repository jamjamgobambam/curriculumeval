import React from 'react'

const LessonPlan = ({feedbackData, handleChange}) => {
    return (
        <div>
            <hgroup>
                <h2>📘 Lesson Plan</h2>
                <h3>For this section, you should focus on the content at the <strong>top</strong> of the lesson plan. There is space for you to provide detailed feedback for each piece.</h3>
            </hgroup>

            <form>
                <div className="form-section">
                    <h3>🎯 Objectives</h3>
                    <fieldset>
                        <legend>Objectives are in <strong>student-friendly language</strong> and <strong>clearly aligned to activities</strong> in the lesson.</legend>
                        <label>
                            <input type="radio" id="objectivesYes" name="objectives" checked={"yes" === feedbackData.objectives} value="yes" onChange={handleChange('objectives')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="objectivesNo" name="objectives" checked={"no" === feedbackData.objectives} value="no" onChange={handleChange('objectives')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Objectives Feedback</strong></label>
                    <small>Share any feedback you have about the objectives. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="objectivesNotes" name="objectivesNotes" value={feedbackData.objectivesNotes} onChange={handleChange('objectivesNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>🔎 Overview</h3>
                    <fieldset>
                        <legend>Overview clearly explains the <strong>purpose</strong> and <strong>flow</strong> of the lesson.</legend>
                        <label>
                        <input type="radio" id="overviewYes" name="overview" checked={"yes" === feedbackData.overview} value="yes" onChange={handleChange('overview')} />
                        Yes
                        </label>
                        <label>
                        <input type="radio" id="overviewNo" name="overview" checked={"no" === feedbackData.overview} value="no" onChange={handleChange('overview')} />
                        No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Overview Feedback</strong></label>
                    <small>Share any feedback you have about the overview. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="overviewNotes" name="overviewNotes" value={feedbackData.overviewNotes} onChange={handleChange('overviewNotes')} />
                </div>

                <div className="form-section">
                    <h3>❓ Question of the Day</h3>
                    <fieldset>
                        <legend>Question of the Day <strong>sparks curiosity and interest</strong> in the lesson.</legend>
                        <label>
                        <input type="radio" id="questionYes" name="question" checked={"yes" === feedbackData.question} value="yes" onChange={handleChange('question')} />
                        Yes
                        </label>
                        <label>
                        <input type="radio" id="questionNo" name="question" checked={"no" === feedbackData.question} value="no" onChange={handleChange('question')} />
                        No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Question of the Day Feedback</strong></label>
                    <small>Share any feedback you have about the Question of the Day. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="questionNotes" name="questionNotes" value={feedbackData.questionNotes} onChange={handleChange('questionNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>✅ Standards</h3>
                    <fieldset>
                        <legend>All standards listed on the lesson plan are <strong>clearly covered</strong> in the lesson.</legend>
                        <label>
                        <input type="radio" id="standardsYes" name="standards" checked={"yes" === feedbackData.standards} value="yes" onChange={handleChange('standards')} />
                        Yes
                        </label>
                        <label>
                        <input type="radio" id="standardsNo" name="standards" checked={"no" === feedbackData.standards} value="no" onChange={handleChange('standards')} />
                        No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Standards Feedback</strong></label>
                    <small>Share any feedback you have about the standards. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="standardsNotes" name="standardNotes" value={feedbackData.standardsNotes} onChange={handleChange('standardsNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>🧑‍🏫 For Teachers</h3>
                    <fieldset>
                        <legend><strong>Slides</strong> and <strong>answer keys</strong> are listed as <strong>For Teachers</strong>.</legend>
                        <label>
                        <input type="radio" id="teacherYes" name="teacher" checked={"yes" === feedbackData.teacher} value="yes" onChange={handleChange('teacher')} />
                        Yes
                        </label>
                        <label>
                        <input type="radio" id="teacherNo" name="teacher" checked={"no" === feedbackData.objectives} value="no" onChange={handleChange('teacher')} />
                        No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Teacher Resources Feedback</strong></label>
                    <small>Share any feedback you have about the teacher resources. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="teacherNotes" name="teacherNotes" value={feedbackData.teacherNotes} onChange={handleChange('teacherNotes')} />
                </div>
                
                <div className="last-form-section">
                    <h3>🧑‍🎓 For Students</h3>
                    <fieldset>
                        <legend><strong>Activity guides</strong> and other student resources are listed as <strong>For Students</strong>.</legend>
                        <label>
                        <input type="radio" id="studentsYes" name="students" checked={"yes" === feedbackData.students} value="yes" onChange={handleChange('students')} />
                        Yes
                        </label>
                        <label>
                        <input type="radio" id="studentsNo" name="students" checked={"yes" === feedbackData.students} value="no" onChange={handleChange('students')} />
                        No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Student Resources Feedback</strong></label>
                    <small>Share any feedback you have about the student resources. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="studentsNotes" name="studentsNotes" value={feedbackData.studentsNotes} onChange={handleChange('studentsNotes')} />
                </div>
                
            </form>
        </div>
    )
}

export default LessonPlan