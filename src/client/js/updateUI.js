/**
 * @description Updates UI based on the value passed
 * @param {string} text - text entered by the user
 * @param {string} polarity - polarity of the text, could be one of positive, negative or neutral
 * @param {string} confidence - polarity confidence between the scale of 0 to 1
 */
function updateUI(text, polarity, confidence) {
    document.getElementsByClassName('result__text')[0].textContent = text;
    document.getElementsByClassName('polarity__text')[0].textContent = polarity;
    document.getElementsByClassName('polarity__confidence')[0].textContent = confidence;
}

export { updateUI };