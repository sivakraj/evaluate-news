/**
 * @description Makes a POST call to the URL specified along with properties and data
 * @param {String} url - URL to make a POST call to
 * @param {Object} data - data to be posted to server
 */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        throw error;
    }
};

export { postData };

