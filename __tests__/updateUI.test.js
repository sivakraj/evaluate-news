import { updateUI } from '../src/client/js/updateUI';

describe('Results display check', () => {
    it('displays a text analysis report containing text analysed, polarity and confidence', () => {

        //Input, can be any value other than 'NA'
        const text = 'Test text';
        const polarity = 'Test polarity';
        const confidence = 'Test confidence';

        //Set up our document body
        document.body.innerHTML =
        `<div class="result__text">NA</div>
        <table class="table table--list">
                                <thead>
                                    <tr>
                                        <th>Polarity</th>
                                        <th>Confidence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="polarity__text">NA</td>
                                        <td class="polarity__confidence">NA</td>
                                    </tr>
                                </tbody>
                            </table>`;

        updateUI(text, polarity, confidence);

        expect(document.getElementsByClassName('result__text')[0].textContent).toEqual(text);
        expect(document.getElementsByClassName('polarity__text')[0].textContent).toEqual(polarity);
        expect(document.getElementsByClassName('polarity__confidence')[0].textContent).toEqual(confidence);
    });
});