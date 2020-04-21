/**
 * @description Handles form submit and delegates the user enetered data for subsequent processing and analysis
 * @param {Event Object} event - broswer event - form submit in this case
 */
function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    const text = document.querySelector('#text').value;

    //Don't proceed further if user didn't input any value
    if(!Client.checkForValidValue(text)) {
        alert('Enter some text to proceed.');
        return;
    }

    const mode = document.querySelector('#mode').value;

    console.log("::: Form Submitted :::");

    //Post data to get text analyzed by Aylien API
    Client.postData('/analyseText', {text, mode})
    .then((response) => {
        //update NA for empty response, expecting to return empty object on error for easy error handling
        if(Object.entries(response).length === 0) {
            Client.updateUI(text, 'NA', 'NA');
        } else {
            Client.updateUI(response.text, response.polarity, response.polarity_confidence);
        }
    });
}

export { handleSubmit };
