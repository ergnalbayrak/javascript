class Request {

    async get(url) { // Get Request

        const response = await fetch(url); // Response Object

        const data = await response.json(); // JSON Object

        return data;


    }

    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // response object

        const data = await response.json();

        return data;
    }

    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; chartset=UTF-8"

            }
        }); // response object

        const data = await response.json();

        return data;

    }

    async delete(url) {



        const reponse = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'DELETE'
        }); // response object

        // const data = await reponse.json();

        return "Veri Silme İşlemi Başarılı..";
    }




}

const request = new Request();



