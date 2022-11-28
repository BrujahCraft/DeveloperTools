const noop = () => {};
const NO_PARAMS = {};  
const NO_HEADERS = {};
const OK_200 = [200];
const backURL = 'https://skypro-rock-scissors-paper.herokuapp.com/';

function requests({
    method = 'GET',
    body,
    url,
    headers = NO_HEADERS,
    params = NO_PARAMS,
    responseType = 'json',
    requestType = 'json',
    okResponses = OK_200,
    checkStatusInResponse = false,
    onSuccess= noop,
    onError= noop,
}) {
    const req = new XMLHttpRequest;

    const urlParams = new URLSearchParams(params);
    const queryString = urlParams.toString();

    req.open(method, url+ (queryString ? `?${queryString}` : ''));

    Object.keys(headers).forEach((key) => {
        req.setRequestHeader(key, headers[key])})

    req.responseType = responseType;
    req.onload = function(event) {
        const target = event.target;

        if (!(okResponses.includes(target.status))) {
            onError(target.statusText)

            return
        }

        if (checkStatusInResponse && target.response.status !== 'ok') {
            onError(target.statusText)

            return
        }

        onSuccess(target.response)
    }

    req.onerror = function() {
        onError();
    }

    let dataBody;
    if (requestType === 'urlencoded') {
        req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
         dataBody = new URLSearchParams(body).toString() ;
    }

    if (requestType === 'json') {
        req.setRequestHeader('Content-type','application/json');

        dataBody = JSON.stringify(body);
    }

    if (requestType === 'form/multipart') {
        req.setRequestHeader('Content-type','application/form/multipart');

        dataBody = new FormData(body);
    }
    req.send(dataBody);
}