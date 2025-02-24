// Predefined people
const staff_data = [
    { name: 'Merlon', position: 'Mayor', salary: 75000 },
    { name: 'Merlee', position: 'Sourcerer', salary: 68000 },
    { name: 'Merlumina', position: 'Dead', salary: 62000 },
    { name: 'Merluvlee', position: 'Future Teller', salary: 59000 },
    { name: 'Melvin', position: 'Citizen', salary: 54000 }
];

function displayStaff(data) {
    // Attach to the staff table body in the html
    const table_body = document.getElementById('staff-table-body');
    table_body.innerHTML = '';

    // For each person in staff data, make a new row for the 3 details defined in staff data
    data.forEach(staff => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${staff.name}</td>
            <td>${staff.position}</td>
            <td>${staff.salary}</td>
        `;
        table_body.appendChild(row);
    });
}

function sortStaff(criteria) {
    const sorted_data = [...staff_data].sort((a, b) => {
        if (criteria === 'name') {
            return a.name.localeCompare(b.name);
        } else if (criteria === 'salary') {
            return a.salary - b.salary;
        }
    });
    displayStaff(sorted_data);
} // I honestly had to look this one up because I didn't know localeCompare was a thing but this one works for what I need.