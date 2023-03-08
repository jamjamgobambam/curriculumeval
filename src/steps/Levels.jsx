import React, {useEffect} from 'react'

const Levels = ({feedbackData, handleChange}) => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [])
    
    return (
        <div>
            <hgroup>
                <h2>🖥️ Levels</h2>
                <h3>For this section, you should focus on the <strong>levels</strong>. There is space for you to provide detailed feedback for each piece.</h3>
            </hgroup>

            <form>
                <div className="form-section">
                    <h3>🔮 Predict Level Discussion</h3>
                    <fieldset>
                        <legend>The Predict level has an <strong>accompanying discussion prompt and goal</strong>.</legend>
                        <label>
                            <input type="radio" id="predictDiscussionYes" name="predictDiscussion" checked={"yes" === feedbackData.predictDiscussion} value="yes" onChange={handleChange('predictDiscussion')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="predictDiscussionNo" name="predictDiscussion" checked={"no" === feedbackData.predictDiscussion} value="no" onChange={handleChange('predictDiscussion')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Predict Level Discussion Feedback</strong></label>
                    <small>Share any feedback you have about the predict level discussion. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="predictDiscussionNotes" name="predictDiscussionNotes" value={feedbackData.predictDiscussionNotes} onChange={handleChange('predictDiscussionNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>📄 Predict Level Code</h3>
                    <fieldset>
                        <legend>The <strong>code</strong> in the Predict level is <strong>easy to understand</strong> and <strong>matches the discussion</strong> that follows.</legend>
                        <label>
                            <input type="radio" id="predictCodeYes" name="predictCode" checked={"yes" === feedbackData.predictCode} value="yes" onChange={handleChange('predictCode')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="predictCodeNo" name="predictCode" checked={"no" === feedbackData.predictCode} value="no" onChange={handleChange('predictCode')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Predict Level Code Feedback</strong></label>
                    <small>Share any feedback you have about the predict level code. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="predictCodeNotes" name="predictCodeNotes" value={feedbackData.predictCodeNotes} onChange={handleChange('predictCodeNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>🔎 Investigate Levels</h3>
                    <fieldset>
                        <legend>Investigate levels are <strong>appropriately chunked</strong> and allow students to <strong>explore the new concepts</strong>.</legend>
                        <label>
                            <input type="radio" id="investigateYes" name="investigate" checked={"yes" === feedbackData.investigate} value="yes" onChange={handleChange('investigate')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="investigateNo" name="investigate" checked={"no" === feedbackData.investigate} value="no" onChange={handleChange('investigate')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Investigate Levels Feedback</strong></label>
                    <small>Share any feedback you have about the investigate levels. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="investigateNotes" name="investigateNotes" value={feedbackData.investigateNotes} onChange={handleChange('investigateNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>🧑‍🏫 Teacher Guidance</h3>
                    <fieldset>
                        <legend>Investigate levels include <strong>notes for the teacher</strong> to provide guidance on <strong>what students should notice</strong> on the level.</legend>
                        <label>
                            <input type="radio" id="investigateTeacherYes" name="investigateTeacher" checked={"yes" === feedbackData.investigateTeacher} value="yes" onChange={handleChange('investigateTeacher')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="investigateTeacherNo" name="investigateTeacher" checked={"no" === feedbackData.investigateTeacher} value="no" onChange={handleChange('investigateTeacher')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Teacher Guidance Feedback</strong></label>
                    <small>Share any feedback you have about the notes on the Investigate levels. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="investigateTeacherNotes" name="investigateTeacherNotes" value={feedbackData.investigateTeacherNotes} onChange={handleChange('investigateTeacherNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>🚀 Practice Levels</h3>
                    <fieldset>
                        <legend>Practice levels: each level on the <strong>parent level</strong> has a <strong>preview image</strong>, <strong>name</strong>, and <strong>description</strong>.</legend>
                        <label>
                            <input type="radio" id="practicePreviewYes" name="practicePreview" checked={"yes" === feedbackData.practicePreview} value="yes" onChange={handleChange('practicePreview')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="practicePreviewNo" name="practicePreview" checked={"no" === feedbackData.practicePreview} value="no" onChange={handleChange('practicePreview')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Practice Parent Levels Feedback</strong></label>
                    <small>Share any feedback you have about the parent practice levels. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="practicePreviewNotes" name="practicePreviewNotes" value={feedbackData.practicePreviewNotes} onChange={handleChange('practicePreviewNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>✅ Practice Instructions</h3>
                    <fieldset>
                        <legend>Instructions are <strong>clear</strong>, <strong>complete</strong>, <strong>easy to follow</strong>, <strong>appropriately formatted</strong>, and <strong>free from errors</strong>.</legend>
                        <label>
                            <input type="radio" id="instructionsYes" name="instructions" checked={"yes" === feedbackData.instructions} value="yes" onChange={handleChange('instructions')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="instructionsNo" name="instructions" checked={"no" === feedbackData.instructions} value="no" onChange={handleChange('instructions')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Practice Instructions Feedback</strong></label>
                    <small>Share any feedback you have about the practice level instructions. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="instructionsNotes" name="instructionsNotes" value={feedbackData.instructionsNotes} onChange={handleChange('instructionsNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>📌 Tips and Resources</h3>
                    <fieldset>
                        <legend>Appropriate tips and resources are included in the instructions.</legend>
                        <label>
                            <input type="radio" id="tipsYes" name="tips" checked={"yes" === feedbackData.tips} value="yes" onChange={handleChange('tips')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="tipsNo" name="tips" checked={"no" === feedbackData.tips} value="no" onChange={handleChange('tips')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Tips and Resources Feedback</strong></label>
                    <small>Share any feedback you have about the tips and resources on the levels. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="tipsNotes" name="tipsNotes" value={feedbackData.tipsNotes} onChange={handleChange('tipsNotes')} />
                </div>
                
                <div className="form-section">
                    <h3>🪜 Starter Code</h3>
                    <fieldset>
                        <legend>Starter code includes only the <strong>required elements</strong> needed for the problem.</legend>
                        <label>
                            <input type="radio" id="starterCodeYes" name="starterCode" checked={"yes" === feedbackData.starterCode} value="yes" onChange={handleChange('starterCode')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="starterCodeNo" name="starter-code" checked={"no" === feedbackData.starterCode} value="no" onChange={handleChange('starterCode')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Starter Code</strong></label>
                    <small>Share any feedback you have about the starter code. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="starterCodeNotes" name="starterCodeNotes" value={feedbackData.starterCodeNotes} onChange={handleChange('starterCodeNotes')} />
                </div>
                
                <div className="last-form-section">
                    <h3>🌟 Exemplar Code</h3>
                    <fieldset>
                        <legend>Exemplar code is <strong>labeled</strong> and <strong>runs</strong>.</legend>
                        <label>
                            <input type="radio" id="exemplarYes" name="exemplar" checked={"yes" === feedbackData.exemplar} value="yes" onChange={handleChange('exemplar')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="exemplarNo" name="exemplar" checked={"no" === feedbackData.exemplar} value="no" onChange={handleChange('exemplar')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Exemplar Code Feedback</strong></label>
                    <small>Share any feedback you have about the exemplar code. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="exemplarNotes" name="exemplarNotes" value={feedbackData.exemplarNotes} onChange={handleChange('exemplarNotes')} />
                </div>
            </form>
        </div>
    )
}

export default Levels