// Q8: Employee Salary Projection

// 1. Declare variables
let currentSalary = 50000; 
const incrementPercentage = 0.10; // 10%
const years = 5;

let tableHtml = `
    <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Projected Annual Salary</th>
            </tr>
        </thead>
        <tbody>
`;

// 2. Loop for 5 years
for (let i = 1; i <= years; i++) {
    // Apply increment
    currentSalary += (currentSalary * incrementPercentage);
    
    // Rounding
    let roundedSalary = Math.round(currentSalary);

    // Add to table
    tableHtml += `
        <tr>
            <td>Year ${i}</td>
            <td>$${roundedSalary.toLocaleString()}</td>
        </tr>
    `;
}

tableHtml += `</tbody></table>`;

// 3. Render
document.getElementById("table-container").innerHTML = tableHtml;