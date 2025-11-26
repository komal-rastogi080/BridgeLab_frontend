document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const tableBody = document.getElementById('table-body');
    const rows = tableBody.querySelectorAll('tr');
    const noResultsMessage = document.getElementById('no-results');

    const filterTable = () => {
        const filterValue = searchInput.value.toLowerCase().trim();
        let resultsFound = false;

        rows.forEach(row => {
            let rowText = '';
            // Concatenate all cell text for searching
            row.querySelectorAll('td').forEach(cell => {
                rowText += cell.textContent.toLowerCase() + ' ';
            });

            if (rowText.includes(filterValue)) {
                row.style.display = ''; // Show the row
                resultsFound = true;
            } else {
                row.style.display = 'none'; // Hide the row
            }
        });

        // Toggle "No results found" message
        noResultsMessage.style.display = resultsFound ? 'none' : 'block';
    };

    // Use the 'input' event for real-time filtering
    searchInput.addEventListener('input', filterTable);
});