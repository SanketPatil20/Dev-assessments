
// array of students
const students = [
    {
        name: "Sanket Patil",
        rollNumber: 101,
        marks: 85
    },
    {
        name: "Bob Dylan",
        rollNumber: 102,
        marks: 65
    },
    {
        name: "Charlie Puth",
        rollNumber: 103,
        marks: 92
    },
    {
        name: "Diana Prince",
        rollNumber: 104,
        marks: 78
    },
    {
        name: "Ethan Hunt",
        rollNumber: 105,
        marks: 58
    }
];

// Function to display students
function displayStudents(studentList) {
    const displayElement = document.getElementById('studentDisplay');
    displayElement.innerHTML = '';

    studentList.forEach(student => {
        const studentElement = document.createElement('div');
        studentElement.className = 'student';
        studentElement.innerHTML = `
                    <h3>${student.name}</h3>
                    <p><strong>Roll Number:</strong> ${student.rollNumber}</p>
                    <p><strong>Marks:</strong> ${student.marks}</p>
                `;
        displayElement.appendChild(studentElement);
    });
}

// Display all students initially
displayStudents(students);

// Filter students when button is clicked
const filterButton = document.getElementById('filterButton');
const resetButton = document.getElementById('resetButton');

filterButton.addEventListener('click', () => {
    const topScorers = students.filter(student => student.marks > 70);
    displayStudents(topScorers);
    filterButton.style.display = 'none';
    resetButton.style.display = 'inline-block';
});

resetButton.addEventListener('click', () => {
    displayStudents(students);
    resetButton.style.display = 'none';
    filterButton.style.display = 'inline-block';
});