export const sendData = (data) => {
    fetch('https://sheetdb.io/api/v1/cmt0o55gau3l3', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                data
            ]
        })
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

}

