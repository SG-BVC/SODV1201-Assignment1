document.addEventListener('DOMContentLoaded', () => {
    const year_element = document.getElementById('year');
    year_element.textContent = new Date().getFullYear(); // JS has date constructor with getFulLYear();
});

function markToGrade() {
    // Initialize html elements
    const mark_input = document.getElementById('mark_input').value.trim(); // Input value
    const validation_message = document.getElementById('validation_message');
    const grade_result = document.getElementById('grade_result');

    // Initialize variables
    validation_message.textContent = '';
    grade_result.textContent = '';

    try {
        // If someone is being a silly
        if (mark_input === '') {
            throw new Error('Please enter a mark.');
        }

        // Convert input to int
        const mark = parseInt(mark_input);

        // Define the possible errors
        if (isNaN(mark)) { // non-number
            throw new Error('Invalid input. Please enter a number.');
        }
        if (mark < 0) {
            throw new Error('Mark cannot be negative.');
        }
        if (mark > 100) {
            throw new Error('Mark cannot be greater than 100.');
        }

        // Num to letter grade
        let grade;
        if (mark > 90) {
            grade = 'A';
        } else if (mark > 80) {
            grade = 'B';
        } else if (mark > 70) {
            grade = 'C';
        } else if (mark > 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        grade_result.textContent = `Your Grade: ${grade}`;
    } catch (error) {
        validation_message.textContent = error.message;
    } // Use throw new Error for cleaner code instead of a bunch of if else statements, which puts the "else" statements into a catch statement.
}
