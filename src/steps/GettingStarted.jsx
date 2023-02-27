import React from 'react'

const GettingStarted = ({feedbackData, handleChange}) => {

    let options = null
    let unit = null

    const unit1 = ["1. Welcome to CSA", "2. Java Lab", "3. Classes and Objects", "4. Instantiating Objects", "5. Methods", "6. Methods with Parameters",
                  "7. Loops", "8. Inheritance", "9. Writing Methods", "10. Programming Style and Feedback", "11. Selection Statements", "12. Debugging Strategies",
                  "13. Decomposition and Design", "14. Two-Way Selection Statements", "15. Asphalt Art Project", "16. SpiralPainter FRQ", "17. Unit 1 Assessment"]

    const unit2 = ["1. Attributes", "2. No-Argument Constructors", "3. Parameterized Constructors", "4. The this Keyword", "5. Constructors and Inheritance", "6. Variables", "7. Accessor Methods",
                  "8. Operators and Expressions", "9. Mutator Methods", "10. Printing Objects", "11. Store Management Project", "12. Burger Class FRQ", "13. Unit 3 Assessment"]

    const unit3 = ["1. One-Dimensional (1D) Arrays", "2. Modifying Elements", "3. Traversing 1D Arrays", "4. For Loops", "5. Preconditions and Postconditions", "6. Polymorphism",
                  "7. Enhanced For Loops", "8. Array Algorithms", "9. Finding Duplicates", "10. Data for Social Good Project", "11. TicketTracker FRQ", "12. Unit 3 Assessment"]

    if (feedbackData.unit === "Unit 1: Object-Oriented Programming") {
        unit = unit1
    }
    else if (feedbackData.unit === "Unit 2: Class Structure and Design") {
        unit = unit2
    }
    else if (feedbackData.unit === "Unit 3: Arrays and Algorithms") {
        unit = unit3
    }

    if (unit) {
        options = unit.map((lesson) => <option value={lesson}>{lesson}</option>)
    }

    return (
        <div>
            <hgroup>
                <h2>👋 Getting Started</h2>
                <h3>Hi! Let's start with the unit and lesson you're reviewing.</h3>
            </hgroup>

            <form>
                <label>Name</label>
                <input type="text" id="name" name="name" value={feedbackData.name} onChange={handleChange('name')} />

                <select id="unit" name="unit" value={feedbackData.unit} onChange={handleChange('unit')} required>
                    <option>Select a unit...</option>
                    <option>Unit 1: Object-Oriented Programming</option>
                    <option>Unit 2: Class Structure and Design</option>
                    <option>Unit 3: Arrays and Algorithms</option>
                    {/* <option>Unit 4: Conditions and Logic</option>
                    <option>Unit 5: Two-Dimensional Arrays</option>
                    <option>Unit 6: ArrayLists and String Methods</option>
                    <option>Unit 7: Method Decomposition and Recursion</option>
                    <option>Unit 8: Searching and Sorting</option> */}
                </select>

                <select id="lesson" name="lesson" onChange={handleChange('lesson')} required>
                    <option>Select a lesson...</option>
                    {options}
                </select>
            </form>

        </div>
    )
}

export default GettingStarted