import React from 'react'
import {Form} from 'react-bootstrap'

const LessonContent = ({feedbackData, handleChange}) => {
    return (
        <div>
            <hgroup>
                <h2>🧠 Lesson Content</h2>
                <h3>For this section, you should focus on the lesson content (<strong>Warm Up</strong>, <strong>Activity</strong>, <strong>Wrap Up</strong>). There is space for you to provide detailed feedback for each piece.</h3>
            </hgroup>
            
            <form>
                <div className="form-section">
                    <h3>⌚ Pacing</h3>
                    <fieldset>
                        <legend>Each section has a <strong>time</strong>  associated with it that is <strong>achievable</strong> and adds up to <strong>45 minutes.</strong></legend>
                        <label>
                            <input type="radio" id="pacingYes" name="pacing" checked={"yes" === feedbackData.pacing} value="yes" onChange={handleChange('pacing')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="pacingNo" name="pacing" checked={"no" === feedbackData.pacing} value="no" onChange={handleChange('pacing')} />
                            No
                        </label>
                    </fieldset>

                    <label>✍️ <strong>Pacing Feedback</strong></label>
                    <small>Share any feedback you have about pacing. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="pacingNotes" name="pacingNotes" value={feedbackData.pacingNotes} onChange={handleChange('pacingNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>🖥️ Slide Icons</h3>
                    <fieldset>
                        <legend><strong>Slide icons</strong> in the lesson plan <strong>match to the appropriate slide</strong> in the slide deck.</legend>
                        <label>
                            <input type="radio" id="slidesYes" name="slides" checked={"yes" === feedbackData.slides} value="yes" onChange={handleChange('slides')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="slidesNo" name="slides" checked={"no" === feedbackData.slides} value="no" onChange={handleChange('slides')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Slide Icons Feedback</strong></label>
                    <small>Share any feedback you have about the slide icons. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="slidesNotes" name="slidesNotes" value={feedbackData.slidesNotes} onChange={handleChange('slidesNotes')} />
                </div>

                <div className="form-section">
                    <h3>🗣️ Discussions</h3>
                    <fieldset>
                        <legend>Each <strong>prompt</strong> is <strong>italicized</strong> and has a <strong>discussion goal that provides guidance</strong> on the responses students should provide.</legend>
                        <label>
                            <input type="radio" id="promptsYes" name="prompts" checked={"yes" === feedbackData.prompts} value="yes" onChange={handleChange('prompts')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="promptsNo" name="prompts" checked={"no" === feedbackData.prompts} value="no" onChange={handleChange('prompts')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Discussion Prompts Feedback</strong></label>
                    <small>Share any feedback you have about the discussion prompts. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="promptsNotes" name="promptsNotes" value={feedbackData.promptsNotes} onChange={handleChange('promptsNotes')} />
                </div>

                <div className="last-form-section">
                    <h3>✅ Direction Headings</h3>
                    <fieldset>
                        <legend>Each <strong>direction</strong> has a <strong>bold heading</strong> - for example, <strong>Do This:</strong>, <strong>Group:</strong>, or <strong>Discuss:</strong></legend>
                        <label>
                            <input type="radio" id="lessonDirectionsYes" name="lessonDirections" checked={"yes" === feedbackData.lessonDirections} value="yes" onChange={handleChange('lessonDirections')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="lessonDirectionsNo" name="lessonDirections" checked={"no" === feedbackData.lessonDirections} value="no" onChange={handleChange('lessonDirections')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Direction Headings Feedback</strong></label>
                    <small>Share any feedback you have about the direction headings. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="lessonDirectionsNotes" name="lessonDirectionsNotes" value={feedbackData.lessonDirectionsNotes} onChange={handleChange('lessonDirectionsNotes')} />
                </div>                
            </form>
        </div>
    )
}

export default LessonContent