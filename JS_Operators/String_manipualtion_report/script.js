const rawTitle = " wireless headphones PRO ";

// Step 1: Trim extra whitespace and convert to lowercase
let cleanStep1 = rawTitle.trim().toLowerCase();

// Step 2: Capitalize the first letter of each word
// We split the string into an array of words, map over them, and join them back
let formattedTitle = cleanStep1.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');

// Step 3: Replace "Pro" with "Pro Edition"
// Note: Since we capitalized words in Step 2, we look for "Pro"
let finalTitle = formattedTitle.replace("Pro", "Pro Edition");

// Output results
console.log("--- Product Title Report ---");
console.log(`Original: '${rawTitle}'`);
console.log(`Cleaned:  '${finalTitle}'`);
console.log(`Length:   ${finalTitle.length} characters`);