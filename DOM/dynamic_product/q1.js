document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const addProductBtn = document.getElementById('add-product-btn');
    const newProductInput = document.getElementById('new-product-input');
    let nextProductId = 3; 
    let currentlyEditing = null; // Stores the currently editing <li> element

    const createProductItem = (name, id) => {
        const li = document.createElement('li');
        li.setAttribute('data-id', id);
        li.innerHTML = `
            <span class="product-name">${name}</span> 
            <div class="actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        return li;
    };

    const addProduct = () => {
        const productName = newProductInput.value.trim();
        if (productName) {
            const newItem = createProductItem(productName, nextProductId++);
            productList.appendChild(newItem);
            newProductInput.value = '';
        }
    };

    const enterEditMode = (li) => {
        if (currentlyEditing) {
            saveEdit(currentlyEditing); // Auto-save previous edit
        }

        const productNameSpan = li.querySelector('.product-name');
        const currentName = productNameSpan.textContent;
        
        // Replace span with input field
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'edit-input';
        inputField.value = currentName;
        inputField.setAttribute('data-original-name', currentName); // Store original name for reference
        
        productNameSpan.replaceWith(inputField);
        inputField.focus();

        currentlyEditing = li;
    };

    const saveEdit = (li) => {
        const inputField = li.querySelector('.edit-input');
        if (!inputField) return; // Not in edit mode

        const newName = inputField.value.trim() || inputField.getAttribute('data-original-name');
        
        // Replace input field with span
        const productNameSpan = document.createElement('span');
        productNameSpan.className = 'product-name';
        productNameSpan.textContent = newName;
        
        inputField.replaceWith(productNameSpan);

        currentlyEditing = null;
    };

    // Event Delegation on the parent <ul>
    productList.addEventListener('click', (event) => {
        const target = event.target;
        const li = target.closest('li');

        if (!li) return;

        if (target.classList.contains('edit-btn')) {
            enterEditMode(li);
        } else if (target.classList.contains('delete-btn')) {
            productList.removeChild(li);
        }
    });

    // Handle Enter key in the product input field
    newProductInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addProduct();
        }
    });

    // Handle add button click
    addProductBtn.addEventListener('click', addProduct);

    // Auto-save when clicking outside the edited item/input
    document.addEventListener('click', (event) => {
        if (currentlyEditing) {
            const li = currentlyEditing;
            const inputField = li.querySelector('.edit-input');
            
            // Check if click target is outside the currently editing list item
            if (!li.contains(event.target)) {
                saveEdit(li);
            }
        }
    });

    // Allow Enter key to save edit while in edit mode
    productList.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && event.target.classList.contains('edit-input')) {
            saveEdit(currentlyEditing);
        }
    });
});