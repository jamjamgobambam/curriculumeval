import React, {useEffect} from 'react'

const Resources = ({feedbackData, handleChange}) => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [])
    
    return (
        <div>
            <hgroup>
                <h2>📄 Resources</h2>
                <h3>For this section, you should focus on the <strong>lesson resources</strong> (slides, activity guides, etc.). There is space for you to provide detailed feedback for each piece.</h3>
            </hgroup>

            <form>
                <div className="form-section">
                    <h3>🖥️ Title Slide</h3>
                    <fieldset>
                        <legend>The <strong>first slide</strong> contains the correct <strong>unit</strong>, <strong>lesson</strong>, and <strong>course name.</strong></legend>
                        <label>
                            <input type="radio" id="slideHeadingsYes" name="slideHeadings" checked={"yes" === feedbackData.slideHeadings} value="yes" onChange={handleChange('slideHeadings')} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="slideHeadingsNo" name="slideHeadings" checked={"no" === feedbackData.slideHeadings} value="no" onChange={handleChange('slideHeadings')} />
                            No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Title Slide Feedback</strong></label>
                    <small>Share any feedback you have about the title slide. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="slideHeadingsNotes" name="slideHeadingsNotes" value={feedbackData.slideHeadingNotes} onChange={handleChange('slideHeadingsNotes')} />
                </div>
                
                <div className="last-form-section">
                    <h3>✅ Answer Keys</h3>
                    <fieldset>
                        <legend>Each <strong>activity guide</strong> and <strong>extra practice</strong> includes a <strong>complete and accurate</strong> answer key.</legend>
                        <label>
                        <input type="radio" id="activityGuidesYes" name="activityGuides" checked={"yes" === feedbackData.activityGuides} value="yes" onChange={handleChange('activityGuides')} />
                        Yes
                        </label>
                        <label>
                        <input type="radio" id="activityGuidesNo" name="activityGuides" checked={"no" === feedbackData.activityGuides} value="no" onChange={handleChange('actvityGuides')} />
                        No
                        </label>
                    </fieldset>
                    
                    <label>✍️ <strong>Answer Keys Feedback</strong></label>
                    <small>Share any feedback you have about the answer keys. Please be as specific and provide as much detail as possible!</small>
                    <textarea id="activityGuidesNotes" name="activityGuidesNotes" value={feedbackData.activityGuidesNotes} onChange={handleChange('activityGuidesNotes')} />
                </div>
            </form>
        </div>
    )
}

export default Resources