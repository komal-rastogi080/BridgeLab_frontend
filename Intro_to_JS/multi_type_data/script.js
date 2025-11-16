
const strVar = "Komal Rastogi";
const numVar = 1024;
const boolVar = true;
const arrVar = ["Admin", "Editor"];
const objVar = { lastLogin: "2023-10-27" };
const nullVar = null;
const undefVar = undefined;

function identifyType(value) {
    if (Array.isArray(value)) return "array";
    return typeof value;
}

const reportData = [
    { label: "User Name", value: strVar, type: identifyType(strVar) },
    { label: "User ID", value: numVar, type: identifyType(numVar) },
    { label: "Is Active", value: boolVar, type: identifyType(boolVar) },
    { label: "Roles", value: `[${arrVar.join(", ")}]`, type: identifyType(arrVar) },
    { label: "Metadata", value: JSON.stringify(objVar), type: identifyType(objVar) },
    { label: "Profile Pic", value: nullVar, type: identifyType(nullVar) },
    { label: "Next Session", value: undefVar, type: identifyType(undefVar) }
];

let tableHtml = `
    <table>
        <thead>
            <tr>
                <th>Label</th>
                <th>Value</th>
                <th>Type detected</th>
            </tr>
        </thead>
        <tbody>
`;

reportData.forEach(row => {
    tableHtml += `
        <tr>
            <td>${row.label}</td>
            <td>${row.value}</td>
            <td><code>${row.type}</code></td>
        </tr>
    `;
});

tableHtml += `</tbody></table>`;

document.getElementById("output").innerHTML = tableHtml;
console.table(reportData);