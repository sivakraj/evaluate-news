import { postData } from '../src/client/js/sendAndReceive';

//so that previous test don't interfere with the test that's currently running
beforeEach(() => {
    fetch.resetMocks();
});

describe('Post API Data check', () => {

    //tests success scenario
    it('return result if non empty object', () => {
        fetch.mockResponseOnce(JSON.stringify({ id: 1 }));
        const onResponse = jest.fn();
        const onError = jest.fn();

        //url or data is not requred as we're faking calls
        return postData()
        .then(onResponse)
        .catch(onError)
        .finally(() => {
            expect(onResponse).toHaveBeenCalled();
            expect(onError).not.toHaveBeenCalled();
            expect(onResponse).toBeCalledWith({ id: 1 });
        });

    });

    it('calls error block/catch on error', () => {
        fetch.mockRejectOnce(() => Promise.reject(new Error('fake error message')));
        const onResponse = jest.fn();
        const onError = jest.fn();

        //url or data is not requred as we're faking calls
        return postData()
        .then(onResponse)
        .catch(onError)
        .finally(() => {
            expect(onResponse).not.toHaveBeenCalled();
            expect(onError).toHaveBeenCalled();
        });
    });

    it('calls error block/catch and throws error to the calling function', async () => {
        fetch.mockRejectOnce(() => Promise.reject(new Error('fake error message')));

        await expect(postData()).rejects.toThrow(Error('fake error message'));

    });
});