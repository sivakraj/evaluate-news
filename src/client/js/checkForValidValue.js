/**
 * @description Validates text entered by the user. Expects atleast a letter to return true
 * @param {string} inputText - text entered by the user
 * @returns true if user enters atleast one character in the textarea field
 */
function checkForValidValue(inputText) {
    console.log('::: Running checkForValidValue :::', inputText);
    return inputText.length > 0;
}

export { checkForValidValue };
