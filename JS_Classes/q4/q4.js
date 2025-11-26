/**
 * Q 4: Custom Form Builder (Forms + Classes)
 */

class FormBuilder {
    /**
     * Constructs a FormBuilder instance.
     * @param {string} formId - The ID of the HTML <form> element.
     * @param {Array<Object>} fields - An array of field configuration objects.
     */
    constructor(formId, fields) {
        this.formElement = document.getElementById(formId);
        this.fields = fields;
        if (!this.formElement) {
            console.error(`Form element with ID '${formId}' not found.`);
        }
    }

    /**
     * Dynamically generates the form structure and inserts it into the DOM.
     */
    buildForm() {
        if (!this.formElement) return;

        let innerHTML = '';

        this.fields.forEach(field => {
            const id = field.label.toLowerCase().replace(/\s+/g, '-');
            const type = field.type || 'text';
            const name = field.label.toLowerCase().replace(/\s+/g, '');

            innerHTML += `
                <div class="form-group">
                    <label for="${id}">${field.label}:</label>
                    <input type="${type}" id="${id}" name="${name}" ${field.required ? 'required' : ''}>
                </div>
            `;
        });

        this.formElement.innerHTML = innerHTML;
    }

    /**
     * Collects and returns all entered values from the form as an object.
     * @returns {Object} - An object containing field names and their values.
     */
    getFormData() {
        if (!this.formElement) return {};

        const formData = {};
        const inputs = this.formElement.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            // Use the name attribute (set during buildForm) for the object key
            if (input.name) {
                formData[input.name] = input.value;
            }
        });

        return formData;
    }
}

// Define the fields for the form
const registrationFields = [
    { type: 'text', label: 'Full Name', required: true },
    { type: 'email', label: 'Work Email', required: true },
    { type: 'number', label: 'Employee ID', required: false },
    { type: 'text', label: 'Department', required: true },
];

document.addEventListener('DOMContentLoaded', () => {
    const formBuilder = new FormBuilder('dynamic-form', registrationFields);
    
    // 1. Build the form dynamically
    formBuilder.buildForm();

    const submitBtn = document.getElementById('submit-btn');
    const outputData = document.getElementById('output-data');

    // 2. Add event listener to submit button to display data
    submitBtn.addEventListener('click', (event) => {
        // Prevent default form submission if it were a type="submit" button
        event.preventDefault(); 
        
        const data = formBuilder.getFormData();
        
        // Display the collected data
        outputData.textContent = JSON.stringify(data, null, 2);
        console.log("Collected Form Data:", data);
    });
});